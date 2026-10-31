import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Pengalaman & Pendidikan",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Tipe",
      type: "string",
      options: { list: [{ title: "Kerja", value: "work" }, { title: "Pendidikan", value: "education" }] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "organization", title: "Institusi", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", title: "Posisi / Jurusan", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "startDate", title: "Mulai", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "endDate", title: "Selesai (kosong = sekarang)", type: "date" }),
    defineField({ name: "description", title: "Deskripsi", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Terbaru", name: "startDesc", by: [{ field: "startDate", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "organization" } },
});