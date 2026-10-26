import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const PROJECT_DATABASE: Record<
  string,
  {
    title: string;
    summary: string;
    category: string;
    techStack: string[];
    demoUrl?: string;
    repoUrl?: string;
    highlights: string[];
    description: string;
  }
> = {
  "inventory-management": {
    title: "Enterprise Inventory Management System",
    summary:
      "Aplikasi manajemen inventaris pergudangan real-time dengan reporting analitik dan kontrol hak akses multi-role.",
    category: "Web Application",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
    highlights: [
      "Pelacakan stok barang masuk dan keluar secara real-time.",
      "Dashboard analitik penjualan dan perputaran barang.",
      "Sistem otentikasi role-based access control (Admin, Gudang, Auditor).",
      "Ekspor laporan otomatis dalam format PDF dan Excel.",
    ],
    description:
      "Aplikasi ini dibangun untuk mengatasi kendala pelacakan manual pada sistem gudang berkapasitas besar. Dengan arsitektur modern Next.js dan PostgreSQL, sistem mampu memproses ribuan transaksi per hari dengan latensi minimal.",
  },
  "healthcare-portal": {
    title: "Healthcare Service Portal",
    summary:
      "Platform penjadwalan janji temu medis online dan rekam medis digital yang terintegrasi secara aman.",
    category: "Fullstack Platform",
    techStack: ["React", "Node.js", "Express", "Docker", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
    highlights: [
      "Sistem booking jadwal temu dokter dengan kalender interaktif.",
      "Penyimpanan riwayat konsultasi pasien dengan enkripsi data.",
      "Integrasi notifikasi pengingat janji temu via email dan pesan otomatis.",
    ],
    description:
      "Portal pelayanan kesehatan digital yang dirancang untuk mempermudah alur konsultasi antara pasien dan tenaga medis. Fokus utama proyek ini adalah keamanan data pasien, keandalan server, dan antarmuka yang intuitif bagi pasien lanjut usia.",
  },
  "ecommerce-storefront": {
    title: "Modern E-Commerce Storefront",
    summary:
      "Platform belanja online dengan performa tinggi, filter produk cepat, keranjang belanja, dan integrasi payment gateway.",
    category: "E-Commerce",
    techStack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com",
    highlights: [
      "Katalog produk dinamis dikelola lewat Headless CMS (Sanity).",
      "Pencarian instan dan pemfilteran kategori tanpa reload halaman.",
      "Integrasi sistem pembayaran aman dengan Stripe webhook.",
    ],
    description:
      "Toko daring modern berkecepatan tinggi yang mengutamakan Core Web Vitals dan SEO produk. Katalog konten dapat diedit secara instan melalui Sanity Studio tanpa memerlukan deploy ulang kode.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "inventory-management" },
    { slug: "healthcare-portal" },
    { slug: "ecommerce-storefront" },
  ];
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = PROJECT_DATABASE[slug];

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${project.title} | Portofolio Moh. Hasan Efendi`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = PROJECT_DATABASE[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-muted hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Semua Proyek</span>
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg text-muted">{project.summary}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-border/80 py-4">
            {project.demoUrl && (
              <Button size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span>Kunjungi Live Demo</span>
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  <span>Lihat Source Code</span>
                </a>
              </Button>
            )}
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground">Tentang Proyek</h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">Fitur &amp; Pencapaian Utama</h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground">Teknologi yang Digunakan</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
