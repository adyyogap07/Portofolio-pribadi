import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Konten")
    .items([
      S.listItem()
        .title("Profil")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      S.documentTypeListItem("project").title("Proyek"),
      S.documentTypeListItem("skill").title("Skill"),
      S.documentTypeListItem("experience").title("Pengalaman"),
    ]);