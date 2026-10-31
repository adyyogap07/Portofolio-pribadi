"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { projectId } from "@/sanity/env";

export default function Studio() {
  if (!projectId.trim()) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <section className="max-w-lg rounded-xl border bg-surface p-8 text-center">
          <h1 className="text-xl font-semibold">Sanity Studio belum dikonfigurasi</h1>
          <p className="mt-3 text-muted">
            Tambahkan project ID Sanity yang valid ke{" "}
            <code className="rounded bg-background px-1.5 py-0.5">
              NEXT_PUBLIC_SANITY_PROJECT_ID
            </code>{" "}
            di file <code>.env.local</code>, lalu restart server.
          </p>
        </section>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
