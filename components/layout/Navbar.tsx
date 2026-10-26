"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Tentang", href: "/#tentang" },
  { name: "Skill", href: "/#skill" },
  { name: "Pengalaman", href: "/#pengalaman" },
  { name: "Proyek", href: "/#proyek" },
  { name: "Kontak", href: "/#kontak" },
];

export function Navbar() {
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
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-bold tracking-tight text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-sm font-black text-white shadow-sm transition-transform duration-150 group-hover:scale-105">
            AY
          </span>
          <span className="hidden text-sm sm:inline-block font-semibold">
            Ady Yoga Pratama
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="#kontak" download aria-label="Unduh CV Ady Yoga Pratama">
              <FileDown className="h-4 w-4" />
              <span>Unduh CV</span>
            </a>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-surface/80 p-2 text-foreground transition-colors hover:bg-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-b border-border bg-background/95 px-4 pt-2 pb-4 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <a
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-xs"
              >
                <FileDown className="h-4 w-4" />
                <span>Unduh CV</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
