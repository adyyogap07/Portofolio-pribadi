import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Code2, Compass, Cpu, Zap } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Clean & Maintainable",
    description:
      "Menulis kode terstruktur, modular, dan mengikuti best practices untuk kemudahan pengembangan jangka panjang.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimalisasi kecepatan muat halaman, Core Web Vitals, dan efisiensi query basis data.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description:
      "Berpengalaman dengan ekosistem Next.js, React, TypeScript, Tailwind, REST API, dan Headless CMS.",
  },
  {
    icon: Compass,
    title: "Problem Solver",
    description:
      "Berorientasi pada solusi bisnis nyata dengan komunikasi transparan dan kolaboratif.",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tentang Saya"
          title="Menghubungkan Ide dengan Solusi Digital yang Elegan"
          description="Sekilas latar belakang, pendekatan kerja, dan dedikasi saya dalam dunia software engineering."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-muted leading-relaxed">
            <Reveal>
              <p>
                Saya adalah seorang Software Engineer &amp; IT Developer yang bersemangat
                dalam membangun solusi web yang tidak hanya berkinerja tinggi, namun
                juga memberikan nilai nyata bagi pengguna dan bisnis.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Dengan latar belakang yang kuat dalam pengembangan aplikasi modern,
                saya terbiasa menangani alur pengembangan dari rancangan arsitektur,
                integrasi API, hingga implementasi antarmuka yang responsif dan interaktif.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Saya percaya bahwa produk digital terbaik dibangun dari kombinasi antara
                kode yang bersih, performa yang cepat, dan estetika desain yang memanjakan mata.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.1 * idx}>
                  <div className="rounded-2xl border border-border/80 bg-background p-5 shadow-xs transition duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-normal">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
