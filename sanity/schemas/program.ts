import { defineType, defineField } from "sanity";

export const program = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  icon: () => "🏆",
  fields: [
    defineField({ name: "name",  title: "Program Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug",  title: "URL Slug", type: "slug", options: { source: "name" }, validation: (R) => R.required() }),
    defineField({ name: "number", title: "Display Number (01, 02…)", type: "string" }),
    defineField({ name: "icon",   title: "Icon (emoji)", type: "string" }),
    defineField({ name: "ageGroup", title: "Age Group (e.g. Ages 5–7)", type: "string" }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "body", title: "Full Details", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "featuredImage", title: "Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({ name: "featured", title: "Featured Card (darker style)?", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
    defineField({ name: "registrationUrl", title: "Registration URL", type: "url" }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "ageGroup", media: "featuredImage" },
  },
});
