import { defineField, defineType } from "sanity";

export const tickerItem = defineType({
  name: "tickerItem",
  title: "News Ticker",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Ticker Text",
      type: "string",
      description: "The message that scrolls across the homepage ticker. Keep it under 80 characters.",
      validation: (R) => R.required().max(120),
    }),
    defineField({
      name: "emoji",
      title: "Emoji (optional)",
      type: "string",
      description: "A single emoji shown before the text. E.g. 🏏 ⭐ 🦁 🏆",
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this item without deleting it.",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower number = appears first in the ticker.",
      initialValue: 10,
    }),
  ],
  preview: {
    select: { title: "text", emoji: "emoji", active: "active" },
    prepare({ title, emoji, active }) {
      return {
        title: emoji ? `${emoji} ${title}` : title,
        subtitle: active ? "Active" : "Hidden",
      };
    },
  },
});
