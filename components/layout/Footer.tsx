"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = React.useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="border-t border-border bg-surface/50 py-12 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
              HE
            </span>
            <span className="text-sm font-semibold text-foreground">
              Moh. Hasan Efendi
            </span>
          </div>

          <p className="flex items-center gap-1 text-xs text-muted">
            Dibuat dengan Next.js, Tailwind CSS &amp; Sanity
          </p>

          <div className="flex items-center gap-4 text-muted">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub Profil"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn Profil"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@hasanefendi.dev"
              className="transition-colors hover:text-foreground"
              aria-label="Kirim Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted">
          &copy; {currentYear} Ady Yoga Pratama. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
