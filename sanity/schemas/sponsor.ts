import { defineType, defineField } from "sanity";

export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsors",
  type: "document",
  icon: () => "🤝",
  fields: [
    defineField({ name: "name",    title: "Business Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "website", title: "Website URL",   type: "url" }),
    defineField({ name: "logo",    title: "Logo",          type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({ name: "icon",    title: "Fallback Icon (emoji)", type: "string" }),
    defineField({
      name: "category", title: "Sponsorship Level", type: "string",
      options: {
        list: [
          { title: "Principal Sponsor", value: "principal" },
          { title: "Gold Sponsor",      value: "gold" },
          { title: "Standard Sponsor",  value: "standard" },
          { title: "Equipment Partner", value: "equipment" },
          { title: "Community Sponsor", value: "community" },
        ],
      },
      initialValue: "standard",
    }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
    defineField({ name: "active", title: "Active Sponsor?", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", media: "logo", subtitle: "category" },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: subtitle || "standard" };
    },
  },
});
