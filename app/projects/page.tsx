import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { getAllProjects, getProfile } from "@/sanity/lib/data";

export const metadata = {
  title: "Semua Proyek | Ady Yoga Pratama",
  description:
    "Daftar lengkap proyek dan portofolio pengembangan web Ady Yoga Pratama.",
};

export default async function ProjectsPage() {
  const [sanityProjects, profile] = await Promise.all([
    getAllProjects(),
    getProfile(),
  ]);
  const projects = sanityProjects.map((project) => ({
    id: project._id,
    title: project.title,
    summary: project.summary,
    slug: project.slug,
    techStack: project.techStack || [],
    category: project.category || undefined,
    demoUrl: project.demoUrl || undefined,
    repoUrl: project.repoUrl || undefined,
    thumbnail: project.thumbnail,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar profile={profile} />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/"
                className="text-muted hover:text-foreground inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Link>
            </Button>
          </div>

          {projects.length > 0 && (
            <SectionHeading
              label="Koleksi Portofolio"
              title="Semua Proyek &amp; Eksplorasi"
              description="Kumpulan proyek perangkat lunak, aplikasi web, dan eksperimen teknologi yang telah saya kerjakan."
              align="left"
            />
          )}

          {projects.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="group border-border/80 bg-surface/50 hover:border-primary/50 hover:bg-surface flex flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="from-primary/20 via-surface to-accent/20 relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-tr p-6 text-center">
                    {"thumbnail" in proj && proj.thumbnail?.url ? (
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
                            <span>Demo</span>
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
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}
