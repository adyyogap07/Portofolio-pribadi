import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: { list: ["frontend", "backend", "database", "devops", "tools"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "level",
      title: "Level (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({ name: "icon", title: "Nama ikon", type: "string" }),
    defineField({ name: "order", title: "Urutan", type: "number" }),
  ],
  orderings: [{ title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});