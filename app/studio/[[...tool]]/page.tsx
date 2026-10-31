import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata, Viewport } from "next";
import Studio from "./studio";

export const metadata: Metadata = {
  referrer: "same-origin",
  robots: "noindex",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function generateStaticParams() {
  return [{ tool: [""] }];
}

export default function StudioPage() {
  return (
    <>
      <Studio />
      <Suspense fallback={null}>
        <StudioRequestBoundary />
      </Suspense>
    </>
  );
}

async function StudioRequestBoundary() {
  await connection();
  return null;
}