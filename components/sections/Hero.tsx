"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { SanityProfile } from "@/sanity/lib/data";

export function Hero({
  profile,
  hasProjects,
}: {
  profile?: SanityProfile | null;
  hasProjects: boolean;
}) {
  if (!profile) return null;

  const socialLinks = [
    ...(profile.githubUrl
      ? [
          {
            href: profile.githubUrl,
            label: "GitHub",
            icon: <GithubIcon className="h-4 w-4" />,
          },
        ]
      : []),
    ...(profile.linkedinUrl
      ? [
          {
            href: profile.linkedinUrl,
            label: "LinkedIn",
            icon: <LinkedinIcon className="h-4 w-4" />,
          },
        ]
      : []),
    ...(profile.email
      ? [
          {
            href: `mailto:${profile.email}`,
            label: "Email",
            icon: <Mail className="h-4 w-4" />,
          },
        ]
      : []),
  ];

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* Decorative gradient blob background */}
      <div
        aria-hidden="true"
        className="from-primary/15 to-accent/20 pointer-events-none absolute -top-40 right-1/2 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-tr blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero text */}
          <div
            className={profile.avatar?.url ? "lg:col-span-7" : "lg:col-span-12"}
          >
            <Reveal delay={0.1}>
              {profile.fullName && (
                <h1 className="text-foreground mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Halo, saya{" "}
                  <span className="from-primary to-accent bg-gradient-to-r via-blue-600 bg-clip-text text-transparent">
                    {profile.fullName}
                  </span>
                </h1>
              )}
            </Reveal>

            <Reveal delay={0.2}>
              {profile.headline && (
                <p className="text-primary mt-4 text-lg font-semibold sm:text-xl">
                  {profile.headline}
                </p>
              )}
              {profile.tagline && (
                <p className="text-muted mt-2 max-w-xl text-base sm:text-lg">
                  {profile.tagline}
                </p>
              )}
            </Reveal>

            {(hasProjects || profile.email) && (
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {hasProjects && (
                    <Button size="lg" asChild>
                      <Link href="#proyek">
                        <span>Lihat Proyek</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {profile.email && (
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="#kontak">Hubungi Saya</Link>
                    </Button>
                  )}
                </div>
              </Reveal>
            )}

            {socialLinks.length > 0 && (
              <Reveal delay={0.4}>
                <div className="text-muted mt-10 flex items-center gap-6">
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    Ikuti:
                  </span>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label === "Email" ? undefined : "_blank"}
                      rel={
                        link.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-colors"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Hero Image */}
          {profile.avatar?.url && (
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <Reveal delay={0.2}>
                <div className="group relative">
                  <div
                    aria-hidden="true"
                    className="from-primary to-accent absolute -inset-2 rounded-2xl bg-gradient-to-tr opacity-30 blur-lg transition duration-500 group-hover:opacity-50"
                  />
                  <div className="border-background bg-surface relative aspect-[3/4] w-64 overflow-hidden rounded-2xl border-4 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01] sm:w-72 md:w-80">
                    <Image
                      src={profile.avatar.url}
                      alt={profile.avatar.alt || "Foto profil"}
                      fill
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
