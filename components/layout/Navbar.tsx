"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import type { SanityProfile } from "@/sanity/lib/data";

const NAV_LINKS = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Tentang", href: "/#tentang" },
  { name: "Skill", href: "/#skill" },
  { name: "Pengalaman", href: "/#pengalaman" },
  { name: "Proyek", href: "/#proyek" },
  { name: "Kontak", href: "/#kontak" },
];

export function Navbar({ profile }: { profile?: SanityProfile | null }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-border/80 bg-background/80 border-b shadow-xs backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {profile?.fullName && (
          <Link
            href="/"
            className="group text-foreground flex items-center gap-2 font-bold tracking-tight"
          >
            <span className="from-primary to-accent flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr text-sm font-black text-white shadow-sm transition-transform duration-150 group-hover:scale-105">
              {profile.fullName
                .split(/\s+/)
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            <span className="hidden text-sm font-semibold sm:inline-block">
              {profile.fullName}
            </span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:bg-surface hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {profile?.cvUrl && (
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex"
              asChild
            >
              <a href={profile.cvUrl} download>
                <FileDown className="h-4 w-4" />
                <span>Unduh CV</span>
              </a>
            </Button>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="border-border/60 bg-surface/80 text-foreground hover:bg-surface focus-visible:ring-primary inline-flex h-9 w-9 items-center justify-center rounded-xl border p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-border bg-background/95 border-b px-4 pt-2 pb-4 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:bg-surface hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {profile?.cvUrl && (
              <div className="border-border mt-2 border-t pt-2">
                <a
                  href={profile.cvUrl}
                  download
                  onClick={() => setIsOpen(false)}
                  className="bg-primary flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white shadow-xs"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Unduh CV</span>
                </a>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
