# DESAIN — Web Portofolio Moh. Hasan Efendi

Dokumen ini berisi arah desain visual, struktur halaman, arsitektur teknis, dan skema konten Sanity.

**Versi:** 1.1 (backend: Sanity)

---

## 1. Prinsip Desain

1. **Bersih & fokus konten**: ruang kosong cukup, hierarki jelas.
2. **Profesional tapi punya karakter**: satu warna aksen yang konsisten.
3. **Mobile-first**: dirancang dari 360px ke atas.
4. **Cepat**: minim JavaScript di client, gambar dioptimasi.
5. **Aksesibel**: kontras AA, fokus terlihat, navigasi keyboard.

## 2. Palet Warna

| Token | Light | Dark | Kegunaan |
|-------|-------|------|----------|
| `background` | `#FFFFFF` | `#0B1020` | Latar halaman |
| `surface` | `#F5F7FB` | `#121933` | Kartu, section selang-seling |
| `border` | `#E3E7F0` | `#222B4A` | Garis pemisah |
| `foreground` | `#0F172A` | `#E6EAF5` | Teks utama |
| `muted` | `#64748B` | `#94A3C0` | Teks sekunder |
| `primary` | `#2563EB` | `#3B82F6` | Tombol, link, aksen |
| `accent` | `#06B6D4` | `#22D3EE` | Highlight, gradien |
| `success` | `#16A34A` | `#22C55E` | Notifikasi sukses |
| `danger` | `#DC2626` | `#EF4444` | Error |

Gradien hero: `primary → accent` (arah 135°), dipakai hemat (judul, tombol utama, blob latar).

## 3. Tipografi

- **Heading:** Inter atau Plus Jakarta Sans (700/800)
- **Body:** Inter (400/500)
- **Kode / label teknis:** JetBrains Mono

| Elemen | Mobile | Desktop |
|--------|--------|---------|
| H1 (hero) | 36px | 60px |
| H2 (judul section) | 28px | 40px |
| H3 (judul kartu) | 20px | 24px |
| Body | 16px | 18px |
| Caption | 14px | 14px |

Gunakan `next/font` agar font dimuat tanpa layout shift.

## 4. Spasi, Radius, Bayangan

- Skala spasi Tailwind (4px basis); padding section `py-20 md:py-28`.
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.
- Radius: kartu `rounded-2xl`, tombol `rounded-xl`, input `rounded-lg`.
- Bayangan lembut: `shadow-sm` default, `shadow-lg` saat hover.

## 5. Breakpoint

| Nama | Lebar | Catatan |
|------|-------|---------|
| base | < 640px | 1 kolom |
| `sm` | ≥ 640px | |
| `md` | ≥ 768px | Grid proyek 2 kolom |
| `lg` | ≥ 1024px | Grid proyek 3 kolom, navbar penuh |
| `xl` | ≥ 1280px | |

## 6. Struktur Halaman

### 6.1 Peta Situs

```
/                    Beranda (semua section)
/projects            Daftar proyek lengkap + filter
/projects/[slug]     Detail proyek
/blog                (Rilis 2)
/studio              Sanity Studio (login Sanity)
/404                 Halaman tidak ditemukan
```

### 6.2 Urutan Section Beranda

1. Navbar (sticky)
2. Hero
3. Tentang
4. Skill
5. Pengalaman & Pendidikan
6. Proyek Unggulan
7. Kontak
8. Footer

### 6.3 Wireframe

**Navbar**
```
[Logo / HE]        Beranda  Tentang  Skill  Pengalaman  Proyek  Kontak   [🌙] [Unduh CV]
```

**Hero**
```
┌──────────────────────────────────────────────┐
│  Halo, saya                       ┌────────┐ │
│  Moh. Hasan Efendi                │  FOTO  │ │
│  IT Developer & Software Engineer │ BULAT/ │ │
│  Tagline singkat 1-2 kalimat      │ BLOB   │ │
│  [Lihat Proyek]  [Hubungi Saya]   └────────┘ │
│  GitHub  LinkedIn  Email                     │
└──────────────────────────────────────────────┘
```

**Skill**
```
Frontend      [Next.js] [React] [Tailwind] [TypeScript]
Backend       [Node.js] [REST API] [Sanity]
Database      [PostgreSQL] [MySQL]
Infra/DevOps  [Linux] [Docker] [Networking]
Tools         [Git] [Figma] [Postman]
```

**Pengalaman (timeline vertikal)**
```
 ●── 2023 – Sekarang   Posisi · Perusahaan
 │     Deskripsi singkat, 2-3 poin pencapaian
 ●── 2020 – 2023       Posisi · Perusahaan
 ●── 2016 – 2020       Pendidikan · Kampus
```

**Proyek (grid kartu)**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Thumbnail   │ │ Thumbnail   │ │ Thumbnail   │
│ Judul       │ │ Judul       │ │ Judul       │
│ Ringkasan   │ │ Ringkasan   │ │ Ringkasan   │
│ [tag][tag]  │ │ [tag][tag]  │ │ [tag][tag]  │
│ Demo | Kode │ │ Demo | Kode │ │ Demo | Kode │
└─────────────┘ └─────────────┘ └─────────────┘
```

**Kontak**
```
┌──────────────────────┐  ┌───────────────────┐
│ Nama                 │  │ Email             │
│ Email                │  │ Lokasi            │
│ Subjek               │  │ GitHub / LinkedIn │
│ Pesan                │  │                   │
│ [Kirim Pesan]        │  │                   │
└──────────────────────┘  └───────────────────┘
```

## 7. Komponen UI

| Komponen | Keterangan |
|----------|------------|
| `Navbar` | Sticky, blur latar, menu hamburger di mobile, penanda section aktif |
| `ThemeToggle` | Light/dark, simpan di localStorage |
| `Button` | Varian: primary, secondary, ghost; ukuran: sm, md, lg |
| `SectionHeading` | Label kecil + judul + deskripsi |
| `SkillBadge` / `SkillGroup` | Badge ikon + nama |
| `Timeline` / `TimelineItem` | Garis vertikal + titik |
| `ProjectCard` | Gambar, judul, ringkasan, tag, link |
| `ProjectFilter` | Chip filter kategori |
| `SanityImage` | Pembungkus `next/image` dengan URL dari `@sanity/image-url` + hotspot |
| `RichText` | Render Portable Text (heading, list, kode, gambar) |
| `ContactForm` | RHF + Zod, status loading/sukses/error |
| `Toast` | Notifikasi hasil kirim form |
| `Footer` | Copyright + link sosial |
| `Reveal` | Wrapper animasi muncul saat scroll |

## 8. Animasi & Interaksi

- Fade-up saat section masuk viewport (Framer Motion, `once: true`, durasi 0,5 dtk).
- Hover kartu: naik 4px + bayangan membesar.
- Tombol: transisi warna 150ms, efek tekan `active:scale-95`.
- Hormati `prefers-reduced-motion` (matikan animasi).
- Smooth scroll antar section (`scroll-behavior: smooth`).

## 9. Arsitektur Teknis

```
Browser ──▶ Next.js (Vercel)
              │  Server Components: fetch konten via GROQ (next-sanity)
              │  /studio              : Sanity Studio tertanam
              │  /api/contact         : validasi + kirim email (Resend)
              │  /api/revalidate      : menerima webhook Sanity
              │  /api/draft-mode/...  : preview draft (Rilis 2)
              ▼
          Sanity
            ├─ Content Lake (dokumen + dataset)
            ├─ Asset CDN (gambar, file CV)
            ├─ Studio (editor konten)
            └─ Webhook ──▶ /api/revalidate
```

Prinsip:
- Konten publik dibaca dari server (Server Components) memakai client `next-sanity`; `useCdn: true` untuk produksi.
- Halaman di-cache (ISR) dan di-revalidate lewat **webhook** saat konten dipublish, dengan `revalidate` berbasis waktu sebagai cadangan.
- Token baca (untuk draft) dan token tulis tidak pernah diekspos ke browser.
- Form kontak tidak menulis ke Sanity. Pesan diteruskan ke email lewat Resend dari Route Handler.
- Tambahkan domain situs dan `http://localhost:3000` ke **CORS origins** project Sanity (aktifkan *allow credentials* untuk Studio).

## 10. Struktur Folder

```
portfolio/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
│  ├─ projects/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ studio/[[...tool]]/page.tsx     # Sanity Studio tertanam
│  ├─ api/
│  │  ├─ contact/route.ts
│  │  ├─ revalidate/route.ts
│  │  └─ draft-mode/enable/route.ts   # Rilis 2
│  ├─ sitemap.ts
│  ├─ robots.ts
│  └─ not-found.tsx
├─ components/
│  ├─ layout/ (Navbar, Footer, ThemeToggle)
│  ├─ sections/ (Hero, About, Skills, Experience, Projects, Contact)
│  └─ ui/ (Button, SectionHeading, Reveal, Toast, SanityImage, RichText)
├─ sanity/
│  ├─ env.ts
│  ├─ structure.ts                    # profile sebagai singleton
│  ├─ schemaTypes/
│  │  ├─ index.ts
│  │  ├─ profile.ts
│  │  ├─ project.ts
│  │  ├─ skill.ts
│  │  ├─ experience.ts
│  │  └─ post.ts                      # Rilis 2
│  └─ lib/
│     ├─ client.ts
│     ├─ image.ts
│     └─ queries.ts
├─ sanity.config.ts
├─ sanity.cli.ts
├─ lib/
│  ├─ validations.ts
│  └─ utils.ts
├─ types/
├─ public/ (og-image, favicon)
├─ .env.local
├─ tailwind.config.ts
└─ package.json
```

## 11. Konfigurasi Tailwind (contoh)

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#06B6D4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

## 12. Variabel Lingkungan

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01

SANITY_API_READ_TOKEN=          # server only, untuk draft/preview (Rilis 2)
SANITY_REVALIDATE_SECRET=       # secret webhook, server only

RESEND_API_KEY=                 # server only
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Jangan beri awalan `NEXT_PUBLIC_` pada token atau secret.

## 13. Skema Konten Sanity

### 13.1 Setup awal

```bash
npm install next-sanity sanity @sanity/image-url @sanity/vision styled-components
```

```ts
// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "default",
  title: "Portofolio Hasan",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    // profile hanya boleh dibuat sekali (singleton)
    templates: (templates) =>
      templates.filter(({ schemaType }) => schemaType !== "profile"),
  },
});
```

```ts
// sanity/structure.ts
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Konten")
    .items([
      S.listItem()
        .title("Profil")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      S.documentTypeListItem("project").title("Proyek"),
      S.documentTypeListItem("skill").title("Skill"),
      S.documentTypeListItem("experience").title("Pengalaman"),
      S.documentTypeListItem("post").title("Blog"),
    ]);
```

### 13.2 Skema dokumen

```ts
// sanity/schemaTypes/profile.ts
import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profil",
  type: "document",
  fields: [
    defineField({ name: "fullName", title: "Nama lengkap", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headline", title: "Jabatan", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "avatar",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }],
    }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "location", title: "Lokasi", type: "string" }),
    defineField({ name: "cvFile", title: "File CV (PDF)", type: "file", options: { accept: "application/pdf" } }),
    defineField({ name: "githubUrl", type: "url" }),
    defineField({ name: "linkedinUrl", type: "url" }),
  ],
});
```

```ts
// sanity/schemaTypes/project.ts
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proyek",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", title: "Ringkasan", type: "text", rows: 3, validation: (r) => r.required().max(200) }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }],
    }),
    defineField({
      name: "gallery",
      title: "Galeri",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "techStack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: { list: ["Web", "Mobile", "Backend", "Infrastruktur", "Lainnya"] },
    }),
    defineField({ name: "demoUrl", title: "URL demo", type: "url" }),
    defineField({ name: "repoUrl", title: "URL repo", type: "url" }),
    defineField({ name: "featured", title: "Unggulan", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "thumbnail" } },
});
```

```ts
// sanity/schemaTypes/skill.ts
import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: { list: ["frontend", "backend", "database", "devops", "tools"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "level", title: "Level (1-5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "icon", title: "Nama ikon", type: "string" }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
});
```

```ts
// sanity/schemaTypes/experience.ts
import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Pengalaman",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Tipe",
      type: "string",
      options: { list: [{ title: "Kerja", value: "work" }, { title: "Pendidikan", value: "education" }] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "organization", title: "Institusi", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Posisi / Jurusan", type: "string", validation: (r) => r.required() }),
    defineField({ name: "startDate", type: "date", validation: (r) => r.required() }),
    defineField({ name: "endDate", title: "Selesai (kosong = sekarang)", type: "date" }),
    defineField({ name: "description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [
    { title: "Terbaru", name: "startDesc", by: [{ field: "startDate", direction: "desc" }] },
  ],
});
```

```ts
// sanity/schemaTypes/index.ts
import { profile } from "./profile";
import { project } from "./project";
import { skill } from "./skill";
import { experience } from "./experience";

export const schemaTypes = [profile, project, skill, experience];
```

### 13.3 Client, gambar, dan query

```ts
// sanity/lib/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
});
```

```ts
// sanity/lib/image.ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
```

```ts
// sanity/lib/queries.ts
import { defineQuery } from "next-sanity";

export const profileQuery = defineQuery(`
  *[_type == "profile"][0]{
    fullName, headline, tagline, bio, email, location,
    githubUrl, linkedinUrl,
    avatar{..., "alt": alt},
    "cvUrl": cvFile.asset->url
  }
`);

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc){
    _id, title, "slug": slug.current, summary,
    thumbnail, techStack, category, demoUrl, repoUrl
  }
`);

export const allProjectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc){
    _id, title, "slug": slug.current, summary,
    thumbnail, techStack, category, demoUrl, repoUrl
  }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, summary, description,
    thumbnail, gallery, techStack, category, demoUrl, repoUrl
  }
`);

export const projectSlugsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)].slug.current
`);

export const skillsQuery = defineQuery(`
  *[_type == "skill"] | order(category asc, order asc){
    _id, name, category, level, icon
  }
`);

export const experiencesQuery = defineQuery(`
  *[_type == "experience"] | order(startDate desc){
    _id, kind, organization, title, startDate, endDate, description
  }
`);
```

Contoh pemakaian di Server Component dengan cache dan tag:

```ts
const projects = await client.fetch(
  featuredProjectsQuery,
  {},
  { next: { revalidate: 3600, tags: ["project"] } }
);
```

### 13.4 Revalidate lewat webhook

Buat webhook di dashboard Sanity (manage → API → Webhooks):
- URL: `https://DOMAIN-ANDA/api/revalidate`
- Trigger: create, update, delete
- Projection: `{_type}`
- Secret: sama dengan `SANITY_REVALIDATE_SECRET`

Di Route Handler `/api/revalidate`, verifikasi signature dengan `parseBody` dari `next-sanity/webhook`, lalu panggil `revalidateTag` sesuai `_type` dokumen. Cek dokumentasi Next.js versi yang dipakai karena signature `revalidateTag` bisa berbeda antar versi.

### 13.5 Form kontak (tanpa menyimpan ke Sanity)

Alur `/api/contact`:
1. Terima JSON, validasi dengan Zod.
2. Tolak jika field honeypot terisi.
3. Terapkan rate limit per IP.
4. Kirim email ke `CONTACT_TO_EMAIL` lewat Resend.
5. Kembalikan `{ ok: true }` atau pesan error.

Alasan: dataset Sanity publik bisa dibaca siapa pun lewat API, sehingga pesan pribadi tidak boleh disimpan di sana.

### 13.6 Gambar

- Selalu isi **alt text** di Studio (field dibuat wajib pada thumbnail dan foto profil).
- Gunakan `urlFor(img).width(800).auto("format").url()` untuk ukuran dan format responsif.
- Tambahkan `cdn.sanity.io` ke `images.remotePatterns` di `next.config`.
- Gunakan hotspot/crop dari Studio agar potongan gambar tetap fokus.

## 14. SEO

- `generateMetadata` per halaman (title, description, Open Graph, Twitter card) dengan data dari Sanity.
- JSON-LD tipe `Person` di beranda.
- `sitemap.ts` dan `robots.ts` dinamis (termasuk slug proyek dari `projectSlugsQuery`).
- Gambar OG 1200×630.
- Heading terstruktur: satu `h1` per halaman.

## 15. Aksesibilitas

- Kontras teks minimal 4,5:1.
- Link "Skip to content" di awal halaman.
- `aria-label` pada tombol ikon, `aria-current` pada menu aktif.
- Semua gambar punya `alt`; form punya `label` dan pesan error yang terbaca screen reader.
- Fokus terlihat (`focus-visible:ring-2`).
