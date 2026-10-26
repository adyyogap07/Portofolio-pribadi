# PRD — Web Portofolio Moh. Hasan Efendi

**Versi:** 1.1 (backend diganti dari Supabase ke Sanity)
**Tanggal:** 26 Oktober 2026
**Pemilik:** Moh. Hasan Efendi (IT Developer & Software Engineer)
**Referensi:** https://hasanefendi-portfolio-cv.web.app/

> Catatan: isi halaman referensi tidak bisa dibaca penuh (dirender via JavaScript). Dokumen ini disusun dari metadata situs dan praktik umum portofolio developer. Sesuaikan bagian "Fitur" setelah membandingkan dengan situs referensi.

---

## 1. Ringkasan

Website portofolio pribadi untuk menampilkan profil, keahlian, pengalaman, dan proyek sebagai software engineer / IT developer, sekaligus menjadi sarana kontak dan unduh CV bagi recruiter dan klien. Seluruh konten dikelola lewat **Sanity Studio** sehingga bisa diubah tanpa menyentuh kode.

## 2. Tujuan

| # | Tujuan | Indikator |
|---|--------|-----------|
| 1 | Menampilkan profesional branding yang kuat | Halaman terindeks Google dengan nama sendiri |
| 2 | Memudahkan recruiter/klien menghubungi | Form kontak berfungsi, pesan sampai ke email |
| 3 | Memamerkan proyek terbaik dengan detail | Minimal 4 proyek dengan halaman detail |
| 4 | Konten mudah diperbarui tanpa ubah kode | Proyek, skill, pengalaman, CV diedit lewat Sanity Studio |
| 5 | Performa dan SEO tinggi | Lighthouse ≥ 90 di semua kategori |

## 3. Target Pengguna

- **Recruiter / HRD**: ingin cepat melihat skill, pengalaman, dan CV.
- **Klien / freelance**: ingin melihat hasil kerja dan cara menghubungi.
- **Sesama developer**: melihat proyek, tech stack, link GitHub.
- **Pemilik situs (admin)**: mengelola konten lewat Sanity Studio.

## 4. Ruang Lingkup

### 4.1 MVP (Rilis 1)
1. Hero / landing: nama, jabatan, tagline, tombol CTA (Lihat Proyek, Unduh CV, Kontak).
2. Tentang saya: ringkasan profil dan foto.
3. Skill / tech stack (dikelompokkan: Frontend, Backend, Database, DevOps/Infrastruktur, Tools).
4. Pengalaman kerja & pendidikan (timeline).
5. Proyek: grid kartu + halaman detail per proyek.
6. Kontak: form (nama, email, subjek, pesan) + link sosial media.
7. Unduh CV (PDF dari Sanity).
8. **Sanity Studio** tertanam di `/studio` untuk mengelola semua konten.
9. Dark mode / light mode.
10. Responsif (mobile-first).
11. SEO dasar: metadata, Open Graph, sitemap, robots.
12. Update konten otomatis tampil di situs (webhook revalidate).

### 4.2 Pasca-MVP (Rilis 2)
- Blog / catatan teknis (dokumen `post` di Sanity, Portable Text).
- Preview draft langsung dari Studio (Draft Mode / Presentation tool).
- Multi bahasa (ID / EN).
- Analitik pengunjung (Vercel Analytics / Plausible).
- Testimoni.
- Penyimpanan pesan kontak di database terpisah (lihat catatan keamanan di bagian 8).

### 4.3 Di Luar Lingkup
- E-commerce, sistem pembayaran, komentar publik, registrasi pengunjung.

## 5. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|----|-----------|-----------|
| FR-01 | Halaman beranda menampilkan hero, ringkasan, dan navigasi ke semua section | Tinggi |
| FR-02 | Navbar sticky dengan smooth scroll dan penanda section aktif | Tinggi |
| FR-03 | Daftar proyek diambil dari Sanity dengan query GROQ | Tinggi |
| FR-04 | Halaman detail proyek `/projects/[slug]`: deskripsi (Portable Text), tech stack, gambar, link demo & repo | Tinggi |
| FR-05 | Filter proyek berdasarkan kategori/teknologi | Sedang |
| FR-06 | Skill ditampilkan dari dokumen `skill`, dikelompokkan per kategori | Tinggi |
| FR-07 | Timeline pengalaman & pendidikan dari dokumen `experience` | Tinggi |
| FR-08 | Form kontak mengirim pesan ke Route Handler dengan validasi, lalu diteruskan ke email lewat Resend | Tinggi |
| FR-09 | Proteksi spam form kontak (honeypot + rate limit; opsional Turnstile) | Tinggi |
| FR-10 | Unduh CV dari file asset Sanity | Tinggi |
| FR-11 | Toggle dark/light mode, mengikuti preferensi sistem | Sedang |
| FR-12 | Sanity Studio di `/studio` untuk CRUD seluruh konten (login Sanity) | Tinggi |
| FR-13 | Webhook Sanity memicu revalidate halaman saat konten dipublish | Tinggi |
| FR-14 | Gambar dilayani lewat CDN Sanity dengan crop/hotspot dan ukuran responsif | Tinggi |
| FR-15 | Halaman 404 kustom | Rendah |

## 6. Kebutuhan Non-Fungsional

- **Performa:** LCP < 2,5 dtk, CLS < 0,1, gambar dioptimasi (CDN Sanity + `next/image`, format WebP/AVIF).
- **SEO:** metadata dinamis per halaman, JSON-LD `Person`, sitemap.xml, robots.txt.
- **Aksesibilitas:** kontras WCAG AA, navigasi keyboard, alt text (wajib diisi di field gambar Sanity), label form.
- **Keamanan:** token Sanity hanya di sisi server, validasi input di client dan server, header keamanan, CORS origin Sanity dibatasi ke domain sendiri.
- **Kompatibilitas:** Chrome, Firefox, Safari, Edge versi terbaru; mobile 360px ke atas.
- **Maintainability:** TypeScript, tipe otomatis dari skema Sanity (TypeGen), ESLint + Prettier.
- **Biaya:** target Rp0 (free plan Sanity + Vercel Hobby). Cek batas kuota di halaman harga Sanity sebelum rilis.

## 7. Tech Stack

| Lapisan | Pilihan |
|---------|---------|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animasi | Framer Motion |
| Ikon | Lucide React / React Icons |
| Form | React Hook Form + Zod |
| CMS / Backend konten | **Sanity** (Content Lake, Studio, GROQ, CDN gambar) |
| Integrasi | `next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision` |
| Konten kaya | Portable Text (`@portabletext/react` / export dari `next-sanity`) |
| Email | Resend (via Route Handler) |
| Hosting | Vercel (Studio ikut tertanam di aplikasi yang sama) |
| Analitik | Vercel Analytics / Plausible |
| Version control | Git + GitHub |

## 8. Model Data (ringkas)

Dokumen Sanity:
- `profile` (singleton) — nama, jabatan, tagline, bio, foto, email, lokasi, file CV, link sosial.
- `project` — judul, slug, ringkasan, deskripsi (Portable Text), thumbnail, galeri, tech stack, kategori, demo_url, repo_url, featured, urutan.
- `skill` — nama, kategori, level, ikon, urutan.
- `experience` — tipe (kerja/pendidikan), institusi, posisi, tanggal mulai/selesai, deskripsi, urutan.
- `post` (Rilis 2) — judul, slug, tanggal, cover, isi, tag.

Skema kode dan query GROQ lengkap ada di `DESAIN.md`.

**Catatan keamanan pesan kontak:** pada dataset Sanity yang bersifat publik, semua dokumen bisa dibaca lewat API oleh siapa pun yang tahu project ID. Karena itu pesan kontak **tidak disimpan sebagai dokumen di dataset publik**. Pesan diteruskan ke email lewat Resend. Jika ingin menyimpan pesan, gunakan dataset privat atau penyimpanan lain.

## 9. Alur Pengguna Utama

1. Pengunjung membuka beranda → melihat hero dan ringkasan.
2. Scroll / klik menu → melihat Tentang, Skill, Pengalaman, Proyek.
3. Klik kartu proyek → halaman detail → buka demo/repo.
4. Klik "Unduh CV" → file PDF terunduh.
5. Isi form kontak → validasi → terkirim ke email → notifikasi sukses.

Alur admin: buka `/studio` → login → edit konten → Publish → webhook → situs diperbarui.

## 10. Metrik Keberhasilan

- Lighthouse Performance, Accessibility, Best Practices, SEO ≥ 90.
- Form kontak sukses terkirim ≥ 99% percobaan.
- Waktu muat halaman pertama < 2 detik pada koneksi 4G.
- Konten yang dipublish di Studio tampil di situs dalam hitungan detik–menit.
- Situs muncul di hasil pencarian nama sendiri dalam 1–2 bulan.

## 11. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Spam di form kontak | Inbox penuh | Honeypot, rate limit, captcha |
| Kuota free plan Sanity terlampaui | Konten gagal dimuat / dibatasi | Gunakan ISR + cache, `useCdn`, pantau penggunaan |
| Webhook revalidate gagal | Konten lama tampil | Gunakan `revalidate` berbasis waktu sebagai cadangan |
| Konten belum siap (foto, proyek, CV) | Jadwal mundur | Siapkan konten sejak Fase 0 |
| Kebocoran token Sanity | Konten dirusak / draft bocor | Token hanya di env server, jangan awali `NEXT_PUBLIC`, cabut dan buat ulang jika bocor |
| Pesan kontak terbaca publik jika disimpan di dataset publik | Privasi pengirim | Kirim lewat email saja, atau pakai dataset privat |
| Skema berubah setelah ada konten | Data lama tidak cocok | Rencanakan skema dari awal, gunakan migrasi Sanity bila perlu |

## 12. Jadwal Perkiraan

| Fase | Isi | Estimasi |
|------|-----|----------|
| 0 | Persiapan konten & setup akun | 2–3 hari |
| 1 | Setup Next.js + Tailwind + Sanity Studio | 1–2 hari |
| 2 | Desain UI & komponen dasar | 3–4 hari |
| 3 | Skema Sanity, query GROQ, integrasi halaman | 3–4 hari |
| 4 | Form kontak, SEO, optimasi | 2–3 hari |
| 5 | Testing, deploy, webhook, domain | 2 hari |
| 6 | (Opsional) Blog, preview draft, multi bahasa | 4–6 hari |

## 13. Pertanyaan Terbuka

- Apakah memakai domain kustom (mis. hasanefendi.dev)?
- Bahasa utama: Indonesia, Inggris, atau keduanya?
- Studio ditanam di `/studio` (disarankan) atau di-host terpisah lewat `sanity deploy`?
- Apakah pesan kontak perlu diarsipkan selain dikirim ke email?
- Elemen desain apa dari situs referensi yang wajib ditiru?
