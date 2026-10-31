"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import type { SanityProfile } from "@/sanity/lib/data";

export function Footer({ profile }: { profile?: SanityProfile | null }) {
  const currentYear = React.useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="border-border bg-surface/50 border-t py-12 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {profile?.fullName && (
            <div className="flex items-center gap-2">
              <span className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
                {profile.fullName
                  .split(/\s+/)
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span className="text-foreground text-sm font-semibold">
                {profile.fullName}
              </span>
            </div>
          )}

          <p className="text-muted flex items-center gap-1 text-xs">
            Dibuat dengan Next.js, Tailwind CSS &amp; Sanity
          </p>

          {(profile?.githubUrl || profile?.linkedinUrl || profile?.email) && (
            <div className="text-muted flex items-center gap-4">
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="GitHub Profil"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label="LinkedIn Profil"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-foreground transition-colors"
                  aria-label="Kirim Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="border-border/60 text-muted mt-8 border-t pt-6 text-center text-xs">
          {profile?.fullName &&
            `© ${currentYear} ${profile.fullName}. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
