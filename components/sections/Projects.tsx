import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { SanityProject } from "@/sanity/lib/data";

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  slug: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  category?: string;
  thumbnail?: {
    url?: string | null;
    alt?: string | null;
  } | null;
}

export function Projects({ projects }: { projects?: SanityProject[] }) {
  if (!projects?.length) return null;

  const projectItems: ProjectItem[] = projects.map((project) => ({
    id: project._id,
    title: project.title,
    summary: project.summary,
    slug: project.slug,
    techStack: project.techStack || [],
    demoUrl: project.demoUrl || undefined,
    repoUrl: project.repoUrl || undefined,
    category: project.category || undefined,
    thumbnail: project.thumbnail,
  }));

  return (
    <section id="proyek" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portofolio Pilihan"
          title="Karya & Proyek Unggulan"
          description="Beberapa proyek pilihan yang mendemonstrasikan kapabilitas teknis dan desain antarmuka."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 0.1}>
              <div className="group border-border/80 bg-surface/50 hover:border-primary/50 hover:bg-surface flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Project preview header/banner */}
                <div className="from-primary/20 via-surface to-accent/20 relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-tr p-6 text-center">
                  {proj.thumbnail?.url ? (
                    <Image
                      src={proj.thumbnail.url}
                      alt={proj.thumbnail.alt || proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="space-y-1">
                      {proj.category && (
                        <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                          {proj.category}
                        </span>
                      )}
                      <p className="text-foreground line-clamp-2 text-lg font-bold">
                        {proj.title}
                      </p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-foreground group-hover:text-primary text-lg font-bold transition-colors">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1"
                    >
                      <span>{proj.title}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </h3>
                  <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Tags */}
                  {proj.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-background text-muted border-border/60 rounded-md border px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action links */}
                  <div className="border-border/60 mt-6 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-3">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary inline-flex items-center gap-1 text-xs font-medium hover:underline"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-foreground inline-flex items-center gap-1 text-xs font-medium"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          <span>Kode</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="text-muted hover:text-foreground text-xs font-medium"
                    >
                      Detail &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">Lihat Semua Proyek</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
