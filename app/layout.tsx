import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ady Yoga Pratama | IT Developer & Software Engineer",
  description:
    "Website portofolio profesional Ady Yoga Pratama - IT Developer & Software Engineer. Menampilkan keahlian, proyek unggulan, dan riwayat pengalaman.",
  keywords: [
    "Ady Yoga Pratama",
    "Ady Yoga",
    "IT Developer",
    "Software Engineer",
    "Portofolio",
    "Fullstack Developer",
  ],
  authors: [{ name: "Ady Yoga Pratama" }],
  creator: "Ady Yoga Pratama",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://adyyoga.dev/",
    title: "Ady Yoga Pratama | IT Developer & Software Engineer",
    description:
      "Website portofolio profesional Ady Yoga Pratama - IT Developer & Software Engineer.",
    siteName: "Portofolio Ady Yoga Pratama",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
