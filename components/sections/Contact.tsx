"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import type { SanityProfile } from "@/sanity/lib/data";

export function Contact({ profile }: { profile?: SanityProfile | null }) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  if (!profile) return null;

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Gagal mengirim pesan");
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan. Silakan coba lagi.";
      setErrorMessage(message);
    }
  };

  return (
    <section id="kontak" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Hubungi Saya"
          title="Mari Berdiskusi &amp; Berkolaborasi"
          description="Punya pertanyaan, proyek menarik, atau peluang kerja sama? Kirimkan pesan melalui form di bawah ini."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <h3 className="text-foreground text-xl font-bold">
                Informasi Kontak
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang baru, proyek
                inovatif, ataupun sekadar bertukar pikiran seputar teknologi.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 pt-2">
                {profile.email && (
                  <div className="border-border/70 bg-background flex items-start gap-3 rounded-xl border p-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-muted text-xs font-semibold tracking-wider uppercase">
                        Email
                      </span>
                      <p className="text-foreground text-sm font-medium">
                        {profile.email}
                      </p>
                    </div>
                  </div>
                )}

                {profile.location && (
                  <div className="border-border/70 bg-background flex items-start gap-3 rounded-xl border p-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-muted text-xs font-semibold tracking-wider uppercase">
                        Lokasi
                      </span>
                      <p className="text-foreground text-sm font-medium">
                        {profile.location}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="border-border/80 bg-background rounded-2xl border p-6 shadow-xs sm:p-8">
                {status === "success" && (
                  <div className="bg-success/10 border-success/30 text-success mb-6 flex items-center gap-3 rounded-xl border p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Terima kasih! Pesan Anda telah berhasil terkirim. Saya
                      akan segera merespons email Anda.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-danger/10 border-danger/30 text-danger mb-6 flex items-center gap-3 rounded-xl border p-4">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Honeypot field (hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Nama Anda"
                        {...register("name")}
                        className="border-border bg-surface/50 text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                      {errors.name && (
                        <p className="text-danger mt-1 text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        {...register("email")}
                        className="border-border bg-surface/50 text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-danger mt-1 text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase"
                    >
                      Subjek
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Judul atau topik pesan"
                      {...register("subject")}
                      className="border-border bg-surface/50 text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-2.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                    />
                    {errors.subject && (
                      <p className="text-danger mt-1 text-xs">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-muted mb-1.5 block text-xs font-semibold tracking-wider uppercase"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tuliskan pesan Anda di sini..."
                      {...register("message")}
                      className="border-border bg-surface/50 text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:ring-primary/20 w-full resize-y rounded-xl border px-4 py-2.5 text-sm transition-colors focus:ring-2 focus:outline-none"
                    />
                    {errors.message && (
                      <p className="text-danger mt-1 text-xs">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
