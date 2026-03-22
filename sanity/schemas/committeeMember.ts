import { defineType, defineField } from "sanity";

export const committeeMember = defineType({
  name: "committeeMember",
  title: "Committee Members",
  type: "document",
  icon: () => "👤",
  fields: [
    defineField({ name: "name",   title: "Name",            type: "string", validation: (R) => R.required() }),
    defineField({ name: "role",   title: "Role / Position", type: "string", validation: (R) => R.required() }),
    defineField({ name: "email",  title: "Email",           type: "string" }),
    defineField({ name: "phone",  title: "Phone",           type: "string" }),
    defineField({ name: "photo",  title: "Photo",           type: "image", options: { hotspot: true } }),
    defineField({ name: "bio",    title: "Short Bio",       type: "text", rows: 3 }),
    defineField({ name: "order",  title: "Sort Order",      type: "number" }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
