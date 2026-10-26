"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
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
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h3 className="text-xl font-bold text-foreground">
                Informasi Kontak
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang baru, proyek inovatif,
                ataupun sekadar bertukar pikiran seputar teknologi.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Email
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      contact@adyyoga.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Lokasi
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      Indonesia (Remote / Hybrid)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border/80 bg-background p-6 sm:p-8 shadow-xs">
                {status === "success" && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-success/10 border border-success/30 p-4 text-success">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Terima kasih! Pesan Anda telah berhasil terkirim. Saya akan segera merespons email Anda.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-danger/10 border border-danger/30 p-4 text-danger">
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
                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Nama Anda"
                        {...register("name")}
                        className="w-full rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-danger">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="nama@email.com"
                        {...register("email")}
                        className="w-full rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-danger">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
                    >
                      Subjek
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Judul atau topik pesan"
                      {...register("subject")}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-danger">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tuliskan pesan Anda di sini..."
                      {...register("message")}
                      className="w-full rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-danger">
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
