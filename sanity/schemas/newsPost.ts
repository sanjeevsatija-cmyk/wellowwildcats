import { defineType, defineField } from "sanity";

export const newsPost = defineType({
  name: "newsPost",
  title: "News & Match Reports",
  type: "document",
  icon: () => "📰",
  fields: [
    defineField({ name: "title", title: "Headline", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (R) => R.required() }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: {
        list: [
          { title: "Match Report", value: "matchReport" },
          { title: "Club News",    value: "clubNews" },
          { title: "Event",        value: "event" },
          { title: "Junior News",  value: "juniorNews" },
          { title: "Registration", value: "registration" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "featured", title: "Feature on Homepage?", type: "boolean", initialValue: false }),
    defineField({ name: "featuredImage", title: "Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({ name: "excerpt", title: "Excerpt (short summary)", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Full Article", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
  orderings: [{ title: "Newest First", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", media: "featuredImage", subtitle: "category" },
    prepare({ title, media, subtitle }) {
      const cats: Record<string, string> = { matchReport: "Match Report", clubNews: "Club News", event: "Event", juniorNews: "Junior News", registration: "Registration" };
      return { title, media, subtitle: cats[subtitle] || subtitle };
    },
  },
});
