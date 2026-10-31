import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, GraduationCap } from "lucide-react";
import type { SanityExperience } from "@/sanity/lib/data";

export function Experience({
  experiences,
}: {
  experiences?: SanityExperience[];
}) {
  if (!experiences?.length) return null;

  return (
    <section id="pengalaman" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pengalaman & Pendidikan"
          title="Jejak Karir & Perjalanan Belajar"
          description="Riwayat pengalaman profesional dan latar belakang akademis dalam bidang teknologi."
        />

        <div className="border-border/80 relative space-y-12 border-l-2 pl-6 sm:pl-8">
          {experiences.map((item, idx) => {
            const isWork = item.kind === "work";
            const period = `${item.startDate.slice(0, 4)} – ${
              item.endDate ? item.endDate.slice(0, 4) : "Sekarang"
            }`;
            return (
              <Reveal key={item._id} delay={idx * 0.1}>
                <div className="group relative">
                  {/* Timeline point */}
                  <span className="border-background bg-primary absolute top-1 -left-[31px] flex h-7 w-7 items-center justify-center rounded-full border-4 text-white shadow-xs transition-transform duration-200 group-hover:scale-110 sm:-left-[39px] sm:h-8 sm:w-8">
                    {isWork ? (
                      <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ) : (
                      <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </span>

                  <div className="border-border/80 bg-background hover:border-primary/40 rounded-2xl border p-6 shadow-xs transition duration-200 hover:shadow-md">
                    <span className="bg-primary/10 text-primary inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold">
                      {period}
                    </span>
                    <h3 className="text-foreground mt-2 text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm font-medium">
                      {item.organization}
                    </p>
                    {item.description && (
                      <p className="text-muted mt-3 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
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
