import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SanitySkill } from "@/sanity/lib/data";

interface SkillCategoryGroup {
  category: string;
  skills: SanitySkill[];
}

export function Skills({ skills }: { skills?: SanitySkill[] }) {
  if (!skills?.length) return null;

  const categories = [
    ["frontend", "Frontend"],
    ["backend", "Backend"],
    ["database", "Database"],
    ["devops", "DevOps & Infrastruktur"],
    ["tools", "Tools & Workflow"],
  ] as const;
  const skillGroups: SkillCategoryGroup[] = categories
    .map(([key, category]) => ({
      category,
      skills: skills.filter((skill) => skill.category === key),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <section id="skill" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Keahlian Teknis"
          title="Teknologi & Tooling yang Saya Kuasai"
          description="Kombinasi teknologi modern yang digunakan untuk merancang arsitektur aplikasi yang handal dan skalabel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <Reveal key={group.category} delay={groupIdx * 0.1}>
              <div className="border-border/80 bg-surface/50 hover:border-primary/50 hover:bg-surface h-full rounded-2xl border p-6 transition duration-200">
                <div className="border-border/60 mb-4 flex items-center justify-between border-b pb-3">
                  <h3 className="text-foreground text-base font-bold">
                    {group.category}
                  </h3>
                  <span className="text-muted text-xs">
                    {group.skills.length} keahlian
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="border-border bg-background text-foreground hover:border-primary hover:text-primary inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-150"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
