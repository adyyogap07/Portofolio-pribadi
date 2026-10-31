import { defineField, defineType } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profil",
  type: "document",
  fields: [
    defineField({ name: "fullName", title: "Nama lengkap", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "headline", title: "Jabatan", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "avatar",
      title: "Foto profil",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.required() }),
      ],
    }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "location", title: "Lokasi", type: "string" }),
    defineField({
      name: "cvFile",
      title: "File CV (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({ name: "githubUrl", title: "URL GitHub", type: "url" }),
    defineField({ name: "linkedinUrl", title: "URL LinkedIn", type: "url" }),
  ],
  preview: { select: { title: "fullName", subtitle: "headline", media: "avatar" } },
});