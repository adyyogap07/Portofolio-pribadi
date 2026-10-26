import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface SkillItem {
  name: string;
}

interface SkillCategoryGroup {
  category: string;
  skills: SkillItem[];
}

const DEFAULT_SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5/CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "RESTful API" },
      { name: "Sanity CMS" },
      { name: "Authentication" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
    ],
  },
  {
    category: "DevOps & Infrastruktur",
    skills: [
      { name: "Linux" },
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "Vercel / Cloudflare" },
      { name: "Networking" },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "ESLint / Prettier" },
      { name: "CI/CD" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skill" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Keahlian Teknis"
          title="Teknologi & Tooling yang Saya Kuasai"
          description="Kombinasi teknologi modern yang digunakan untuk merancang arsitektur aplikasi yang handal dan skalabel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEFAULT_SKILL_GROUPS.map((group, groupIdx) => (
            <Reveal key={group.category} delay={groupIdx * 0.1}>
              <div className="h-full rounded-2xl border border-border/80 bg-surface/50 p-6 transition duration-200 hover:border-primary/50 hover:bg-surface">
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                  <h3 className="font-bold text-foreground text-base">
                    {group.category}
                  </h3>
                  <span className="text-xs text-muted">
                    {group.skills.length} keahlian
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-150 hover:border-primary hover:text-primary"
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
