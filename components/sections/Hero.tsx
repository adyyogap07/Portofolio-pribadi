"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* Decorative gradient blob background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/2 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 to-accent/20 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur-xs">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span>Terbuka untuk peluang baru &amp; kolaborasi</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Halo, saya{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                  Ady Yoga Pratama
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-lg font-semibold text-primary sm:text-xl">
                IT Developer &amp; Software Engineer
              </p>
              <p className="mt-2 max-w-xl text-base text-muted sm:text-lg">
                Fokus merancang dan mengembangkan aplikasi web yang scalable,
                performa tinggi, dan responsif dengan pengalaman pengguna yang optimal.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#proyek">
                    <span>Lihat Proyek</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#kontak">Hubungi Saya</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-6 text-muted">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Ikuti:
                </span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@adyyoga.dev"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <Reveal delay={0.2}>
              <div className="relative group">
                {/* Decorative ambient gradient backdrop */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-30 blur-lg transition duration-500 group-hover:opacity-50"
                />

                {/* Rectangular photo frame */}
                <div className="relative aspect-[3/4] w-64 sm:w-72 md:w-80 overflow-hidden rounded-2xl border-4 border-background bg-surface shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Foto profil Ady Yoga Pratama"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle inner border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                </div>

                {/* Floating status badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl border border-border/80 bg-background/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    Available for Work
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
