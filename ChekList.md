# CHECKLIST — Web Portofolio Moh. Hasan Efendi

**Stack:** Next.js + Tailwind CSS + Sanity
Centang `[x]` setiap item yang sudah selesai.

---

## Fase 0 — Persiapan Konten & Akun

- [x] Kumpulkan foto profil (rasio 1:1, min. 800px)
- [x] Siapkan CV terbaru dalam format PDF
- [x] Tulis bio singkat (2–3 paragraf) dan tagline 1 kalimat
- [x] Daftar skill dan kelompokkan per kategori
- [x] Daftar pengalaman kerja dan pendidikan (posisi, periode, pencapaian)
- [x] Pilih 4–6 proyek terbaik: judul, ringkasan, deskripsi, teknologi, screenshot, link demo/repo
- [x] Siapkan alt text untuk setiap gambar
- [x] Kumpulkan link sosial (GitHub, LinkedIn, email)
- [x] Buat repo GitHub (private/public)
- [x] Buat akun Sanity (sanity.io)
- [x] Buat akun Vercel (atau hosting lain)
- [x] Buat akun Resend untuk email form kontak
- [x] (Opsional) Beli domain kustom

## Fase 1 — Setup Proyek Next.js

- [x] Install Node.js LTS dan Git
- [x] `npx create-next-app@latest` (TypeScript, Tailwind, App Router, ESLint)
- [x] Install dependensi UI: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `next-themes`
- [x] Konfigurasi `tailwind.config.ts` (warna, font, dark mode class)
- [x] Atur font dengan `next/font`
- [x] Atur ESLint + Prettier
- [x] Buat struktur folder sesuai `DESAIN.md`
- [x] Buat `.env.local` dan pastikan ada di `.gitignore`
- [ ] Commit pertama dan push ke GitHub

## Fase 2 — Setup Sanity

- [ ] Install: `next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`, `styled-components`
- [ ] Buat project Sanity (dashboard atau `npx sanity@latest init`) dan catat Project ID
- [ ] Buat dataset `production`
- [ ] Isi env: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] Buat `sanity.config.ts` dan `sanity.cli.ts`
- [ ] Buat folder `sanity/` (env, structure, schemaTypes, lib)
- [ ] Buat skema `profile` (singleton)
- [ ] Buat skema `project`
- [ ] Buat skema `skill`
- [ ] Buat skema `experience`
- [ ] Daftarkan semua skema di `schemaTypes/index.ts`
- [ ] Buat route Studio `app/studio/[[...tool]]/page.tsx`
- [ ] Tambah `http://localhost:3000` ke CORS origins (aktifkan credentials) di dashboard Sanity
- [ ] Buka `/studio` dan pastikan bisa login
- [ ] Buat client `sanity/lib/client.ts`
- [ ] Buat helper gambar `sanity/lib/image.ts`
- [ ] Tulis query GROQ di `sanity/lib/queries.ts`
- [ ] (Opsional) Jalankan `sanity typegen` untuk tipe otomatis
- [ ] Tambah `cdn.sanity.io` ke `images.remotePatterns` di `next.config`

## Fase 3 — Isi Konten di Studio

- [ ] Isi dokumen Profil (nama, jabatan, tagline, bio, foto + alt, email, lokasi, link sosial)
- [ ] Upload file CV (PDF)
- [ ] Input semua skill
- [ ] Input pengalaman dan pendidikan
- [ ] Input proyek (thumbnail + alt, deskripsi, tech stack, link, centang unggulan, urutan)
- [ ] Publish semua dokumen
- [ ] Uji query di Vision tool (`/studio` → Vision)

## Fase 4 — Komponen & Layout

- [ ] Layout root (`layout.tsx`): font, metadata, ThemeProvider
- [ ] Komponen `Button`
- [ ] Komponen `SectionHeading`
- [ ] Komponen `Reveal` (animasi scroll)
- [ ] Komponen `SanityImage`
- [ ] Komponen `RichText` (Portable Text)
- [ ] `Navbar` (sticky, hamburger mobile, penanda section aktif)
- [ ] `ThemeToggle` (light/dark)
- [ ] `Footer`

## Fase 5 — Section Beranda

- [ ] Hero (nama, jabatan, tagline, CTA, link sosial, foto)
- [ ] Tentang
- [ ] Skill (data dari Sanity, dikelompokkan)
- [ ] Pengalaman & pendidikan (timeline)
- [ ] Proyek unggulan (grid kartu, data dari Sanity)
- [ ] Kontak (form + info kontak)
- [ ] Tombol Unduh CV berfungsi (URL dari asset Sanity)

## Fase 6 — Halaman Proyek

- [ ] Halaman `/projects` dengan daftar lengkap
- [ ] Filter kategori/teknologi
- [ ] Halaman detail `/projects/[slug]` (`generateStaticParams` dari `projectSlugsQuery`)
- [ ] Render deskripsi dengan Portable Text
- [ ] Galeri gambar proyek
- [ ] Tombol link demo dan repo
- [ ] Navigasi kembali / proyek berikutnya
- [ ] Tangani slug tidak ditemukan (`notFound()`)

## Fase 7 — Form Kontak (Resend)

- [ ] Skema validasi Zod (nama, email, subjek, pesan)
- [ ] Form dengan React Hook Form + pesan error
- [ ] Route Handler `/api/contact` (validasi ulang di server)
- [ ] Integrasi Resend, kirim email ke `CONTACT_TO_EMAIL`
- [ ] Verifikasi domain/pengirim di Resend
- [ ] Honeypot field anti-spam
- [ ] Rate limit sederhana (per IP)
- [ ] Status loading, sukses, dan error (toast)
- [ ] (Opsional) Captcha Cloudflare Turnstile
- [ ] Tes kirim pesan end-to-end

## Fase 8 — Cache & Revalidate

- [ ] Tambahkan `revalidate` dan `tags` pada setiap `client.fetch`
- [ ] Buat Route Handler `/api/revalidate` dengan verifikasi signature webhook
- [ ] Isi `SANITY_REVALIDATE_SECRET` di env
- [ ] Buat webhook di dashboard Sanity (trigger: create, update, delete; projection `{_type}`)
- [ ] Tes: ubah konten di Studio, publish, cek situs ikut berubah

## Fase 9 — SEO & Performa

- [ ] `generateMetadata` di setiap halaman
- [ ] Open Graph + Twitter card + gambar OG
- [ ] JSON-LD `Person`
- [ ] `sitemap.ts` dan `robots.ts`
- [ ] Favicon dan manifest
- [ ] Semua gambar pakai `next/image` dengan ukuran tepat
- [ ] Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Cek Core Web Vitals (LCP, CLS, INP)

## Fase 10 — Aksesibilitas & Responsif

- [ ] Tes di lebar 360px, 768px, 1024px, 1440px
- [ ] Tes di Chrome, Firefox, Safari, Edge
- [ ] Tes di HP asli (Android/iOS)
- [ ] Kontras warna memenuhi AA (light dan dark)
- [ ] Navigasi keyboard berfungsi penuh
- [ ] Semua gambar punya `alt`
- [ ] Hormati `prefers-reduced-motion`
- [ ] Halaman 404 kustom

## Fase 11 — Keamanan

- [ ] Tidak ada token/secret berawalan `NEXT_PUBLIC` selain Project ID, dataset, dan API version
- [ ] Token Sanity (jika ada) hanya dipakai di kode server
- [ ] CORS origins Sanity hanya berisi domain sendiri dan localhost
- [ ] Pesan kontak tidak disimpan di dataset publik
- [ ] Tidak ada secret yang ter-commit (cek riwayat Git)
- [ ] Sanitasi input form
- [ ] Tambahkan security headers di `next.config`
- [ ] Batasi akses Studio: hanya undang email yang dipercaya di dashboard Sanity

## Fase 12 — Deploy

- [ ] Import repo ke Vercel
- [ ] Isi semua environment variables di Vercel
- [ ] Tambah domain produksi ke CORS origins Sanity
- [ ] Deploy preview dan cek semua halaman
- [ ] Deploy production
- [ ] Perbarui URL webhook Sanity ke domain produksi
- [ ] (Opsional) Hubungkan domain kustom + HTTPS
- [ ] Daftarkan situs ke Google Search Console
- [ ] Kirim sitemap
- [ ] Tes `/studio` di production
- [ ] Tes form kontak di production
- [ ] Tes unduh CV di production
- [ ] Update link portofolio di LinkedIn, GitHub, dan CV

## Fase 13 — Rilis 2 (Opsional)

- [ ] Skema `post` dan halaman blog `/blog`
- [ ] Draft Mode + preview dari Studio (token baca, route `/api/draft-mode/enable`)
- [ ] Presentation tool / visual editing
- [ ] Multi bahasa (ID / EN)
- [ ] Analitik (Vercel Analytics / Plausible)
- [ ] Seksi testimoni
- [ ] Arsip pesan kontak (dataset privat atau penyimpanan lain)

## Pemeliharaan Berkala

- [ ] Perbarui proyek dan CV setiap ada pencapaian baru
- [ ] Cek dan perbarui dependensi (`next`, `next-sanity`, `sanity`) tiap 1–2 bulan
- [ ] Pantau penggunaan kuota di dashboard Sanity
- [ ] Cek inbox email form kontak dan bersihkan spam
