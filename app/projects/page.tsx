import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

const ALL_PROJECTS = [
  {
    id: "1",
    title: "Enterprise Inventory Management System",
    summary:
      "Aplikasi manajemen inventaris pergudangan real-time dengan reporting analitik dan kontrol hak akses multi-role.",
    slug: "inventory-management",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    category: "Web App",
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
    category: "Fullstack",
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
    category: "E-Commerce",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
  },
];

export const metadata = {
  title: "Semua Proyek | Moh. Hasan Efendi",
  description: "Daftar lengkap proyek dan portofolio pengembangan web Moh. Hasan Efendi.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="inline-flex items-center gap-1.5 text-muted hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Link>
            </Button>
          </div>

          <SectionHeading
            label="Koleksi Portofolio"
            title="Semua Proyek &amp; Eksplorasi"
            description="Kumpulan proyek perangkat lunak, aplikasi web, dan eksperimen teknologi yang telah saya kerjakan."
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-tr from-primary/20 via-surface to-accent/20 flex items-center justify-center p-6 text-center">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {proj.category}
                    </span>
                    <p className="text-lg font-bold text-foreground line-clamp-2">
                      {proj.title}
                    </p>
                  </div>
                </div>

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
                          <span>Demo</span>
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
