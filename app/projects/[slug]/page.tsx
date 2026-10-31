import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { getProfile, getProjectBySlug } from "@/sanity/lib/data";
import type { SanityProject } from "@/sanity/lib/data";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

interface ProjectDetail {
  title: string;
  summary: string;
  category?: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  highlights: string[];
  description?: string;
  thumbnail?: SanityProject["thumbnail"];
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const sanityProject = await getProjectBySlug(slug);

  if (!sanityProject) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${sanityProject.title} | Portofolio Ady Yoga Pratama`,
    description: sanityProject.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  return (
    <Suspense fallback={null}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const [sanityProject, profile] = await Promise.all([
    getProjectBySlug(slug),
    getProfile(),
  ]);
  const project = sanityProject ? mapSanityProject(sanityProject) : null;

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar profile={profile} />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/projects"
                className="text-muted hover:text-foreground inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Semua Proyek</span>
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {project.category && (
              <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                {project.category}
              </span>
            )}
            <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted text-lg">{project.summary}</p>
          </div>

          {project.thumbnail?.url && (
            <div className="border-border relative mt-8 aspect-video overflow-hidden rounded-2xl border">
              <Image
                src={project.thumbnail.url}
                alt={project.thumbnail.alt || project.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {(project.demoUrl || project.repoUrl) && (
            <div className="border-border/80 mt-8 flex flex-wrap items-center gap-3 border-y py-4">
              {project.demoUrl && (
                <Button size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Kunjungi Live Demo</span>
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Lihat Source Code</span>
                  </a>
                </Button>
              )}
            </div>
          )}

          <div className="mt-10 space-y-8">
            {project.description && (
              <div>
                <h2 className="text-foreground text-xl font-bold">
                  Tentang Proyek
                </h2>
                <p className="text-muted mt-3 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {project.highlights.length > 0 && (
              <div>
                <h2 className="text-foreground text-xl font-bold">
                  Fitur &amp; Pencapaian Utama
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-muted flex items-start gap-2.5 text-sm"
                    >
                      <CheckCircle className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.techStack.length > 0 && (
              <div>
                <h2 className="text-foreground text-xl font-bold">
                  Teknologi yang Digunakan
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border-border bg-surface text-foreground rounded-lg border px-3 py-1.5 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
}

function mapSanityProject(project: SanityProject): ProjectDetail {
  return {
    title: project.title,
    summary: project.summary,
    category: project.category || undefined,
    techStack: project.techStack || [],
    demoUrl: project.demoUrl || undefined,
    repoUrl: project.repoUrl || undefined,
    highlights: project.highlights || [],
    description: project.description || undefined,
    thumbnail: project.thumbnail,
  };
}
