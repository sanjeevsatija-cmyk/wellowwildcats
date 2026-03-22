import { defineType, defineField } from "sanity";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Photo Gallery",
  type: "document",
  icon: () => "📸",
  fields: [
    defineField({ name: "title",  title: "Album Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "season", title: "Season",      type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "images", title: "Photos", type: "array",
      of: [{
        type: "image",
        options: { hotspot: true },
        fields: [
          defineField({ name: "alt",     title: "Alt Text",   type: "string" }),
          defineField({ name: "caption", title: "Caption",    type: "string" }),
        ],
      }],
    }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "season" },
  },
});
