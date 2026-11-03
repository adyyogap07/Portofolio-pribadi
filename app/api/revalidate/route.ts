import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import type { NextRequest } from "next/server";
import { sanityCacheTags } from "@/sanity/lib/cache-tags";

interface SanityWebhookPayload {
  _type?: string;
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    console.error("SANITY_REVALIDATE_SECRET is not configured");
    return Response.json(
      { error: "Webhook is not configured" },
      { status: 500 },
    );
  }

  let body: SanityWebhookPayload | null;
  let isValidSignature: boolean | null;
  try {
    const parsed = await parseBody<SanityWebhookPayload>(request, secret);
    body = parsed.body;
    isValidSignature = parsed.isValidSignature;
  } catch {
    return Response.json({ error: "Invalid webhook payload" }, { status: 400 });
  }

  if (isValidSignature !== true) {
    return Response.json({ error: "Invalid webhook signature" }, { status: 401 });
  }

  if (!body || body._type !== "project") {
    return Response.json(
      { error: "Expected a project document" },
      { status: 400 },
    );
  }

  revalidateTag(sanityCacheTags.projects, { expire: 0 });
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/projects/[slug]", "page");

  return Response.json({ revalidated: true, type: body._type });
}
