import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SanityProfile } from "@/sanity/lib/data";

export function About({ profile }: { profile?: SanityProfile | null }) {
  if (!profile?.bio) return null;

  return (
    <section id="tentang" className="bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tentang Saya"
          title="Menghubungkan Ide dengan Solusi Digital yang Elegan"
          description="Sekilas latar belakang, pendekatan kerja, dan dedikasi saya dalam dunia software engineering."
        />

        <div className="text-muted mx-auto max-w-3xl leading-relaxed">
          <Reveal>
            <p>{profile.bio}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
