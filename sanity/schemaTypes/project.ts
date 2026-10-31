import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proyek",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Ringkasan",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        },
      ],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.required() }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galeri",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.required() }),
          ],
        },
      ],
    }),
    defineField({
      name: "techStack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "highlights",
      title: "Pencapaian utama",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: { list: ["Web", "Mobile", "Backend", "Infrastruktur", "Lainnya"] },
    }),
    defineField({ name: "demoUrl", title: "URL demo", type: "url" }),
    defineField({ name: "repoUrl", title: "URL repo", type: "url" }),
    defineField({ name: "featured", title: "Unggulan", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "thumbnail" } },
});