import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate body with Zod schema
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi form gagal", issues: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = result.data;

    // Reject if honeypot filled (spam bot)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (resendApiKey && contactToEmail) {
      // If Resend API key is available, send email
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
            to: contactToEmail,
            subject: `[Portofolio] ${subject} - ${name}`,
            reply_to: email,
            text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`,
          }),
        });

        if (!res.ok) {
          console.error("Resend error:", await res.text());
        }
      } catch (emailErr) {
        console.error("Failed to forward email:", emailErr);
      }
    } else {
      // In development / before Resend key is configured:
      console.log("Contact form submission received:", {
        name,
        email,
        subject,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true, message: "Pesan berhasil dikirim" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal server" },
      { status: 500 }
    );
  }
}
