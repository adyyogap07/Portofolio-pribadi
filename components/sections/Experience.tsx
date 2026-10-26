import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineEntry {
  period: string;
  role: string;
  institution: string;
  description: string;
  type: "work" | "education";
}

const EXPERIENCES: TimelineEntry[] = [
  {
    period: "2023 – Sekarang",
    role: "IT Developer & Software Engineer",
    institution: "Tech Solutions / Freelance",
    description:
      "Merancang, membangun, dan mengoptimalkan sistem web interaktif, integrasi API, serta otomasi alur kerja digital.",
    type: "work",
  },
  {
    period: "2021 – 2023",
    role: "Fullstack Web Developer",
    institution: "Digital Agency",
    description:
      "Mengembangkan aplikasi web kustom untuk berbagai klien, mengelola basis data SQL, dan memelihara infrastruktur server.",
    type: "work",
  },
  {
    period: "2017 – 2021",
    role: "Teknik Informatika / Ilmu Komputer",
    institution: "Universitas",
    description:
      "Mempelajari dasar-dasar ilmu komputer, algoritma, rekayasa perangkat lunak, dan jaringan komputer.",
    type: "education",
  },
];

export function Experience() {
  return (
    <section id="pengalaman" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pengalaman & Pendidikan"
          title="Jejak Karir & Perjalanan Belajar"
          description="Riwayat pengalaman profesional dan latar belakang akademis dalam bidang teknologi."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-12">
          {EXPERIENCES.map((item, idx) => {
            const isWork = item.type === "work";
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline point */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-white shadow-xs transition-transform duration-200 group-hover:scale-110">
                    {isWork ? (
                      <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ) : (
                      <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </span>

                  <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-xs transition duration-200 hover:border-primary/40 hover:shadow-md">
                    <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-muted">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
