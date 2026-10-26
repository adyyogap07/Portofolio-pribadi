import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  slug: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Enterprise Inventory Management System",
    summary:
      "Aplikasi manajemen inventaris pergudangan real-time dengan reporting analitik dan kontrol hak akses multi-role.",
    slug: "inventory-management",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Healthcare Service Portal",
    summary:
      "Platform penjadwalan janji temu medis online dan rekam medis digital yang terintegrasi secara aman.",
    slug: "healthcare-portal",
    techStack: ["React", "Node.js", "REST API", "Docker"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Modern E-Commerce Storefront",
    summary:
      "Platform belanja online dengan performa tinggi, filter produk cepat, keranjang belanja, dan integrasi payment gateway.",
    slug: "ecommerce-storefront",
    techStack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="proyek" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portofolio Pilihan"
          title="Karya & Proyek Unggulan"
          description="Beberapa proyek pilihan yang mendemonstrasikan kapabilitas teknis dan desain antarmuka."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface hover:shadow-lg">
                {/* Project preview header/banner */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-tr from-primary/20 via-surface to-accent/20 flex items-center justify-center p-6 text-center">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Studi Kasus
                    </span>
                    <p className="text-lg font-bold text-foreground line-clamp-2">
                      {proj.title}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1"
                    >
                      <span>{proj.title}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background px-2 py-1 text-xs font-medium text-muted border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <div className="flex items-center gap-3">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
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
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                          <span>Kode</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="text-xs font-medium text-muted hover:text-foreground"
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
