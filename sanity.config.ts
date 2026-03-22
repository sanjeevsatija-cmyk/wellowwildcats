"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  siteSettings,
  newsPost,
  result,
  program,
  sponsor,
  galleryAlbum,
  committeeMember,
} from "./sanity/schemas";

const structure = (S: any) =>
  S.list()
    .title("Wello Wildcats CMS")
    .items([
      S.listItem()
        .title("⚙️  Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("newsPost").title("📰  News & Reports"),
      S.documentTypeListItem("result").title("🏏  Match Results"),
      S.divider(),
      S.documentTypeListItem("program").title("🏆  Programs"),
      S.documentTypeListItem("sponsor").title("🤝  Sponsors"),
      S.documentTypeListItem("galleryAlbum").title("📸  Photo Gallery"),
      S.documentTypeListItem("committeeMember").title("👤  Committee"),
    ]);

export default defineConfig({
  name:     "wellowildcats",
  title:    "Wello Wildcats CMS",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool({ structure })],
  schema: {
    types: [
      siteSettings, newsPost, result, program, sponsor, galleryAlbum, committeeMember,
    ],
  },
});
