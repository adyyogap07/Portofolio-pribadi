import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-20">
        <div className="mx-auto max-w-md px-4 text-center">
          <span className="text-6xl font-black text-primary/40">404</span>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="mt-2 text-sm text-muted">
            Maaf, tautan atau halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button size="md" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Ke Beranda</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
