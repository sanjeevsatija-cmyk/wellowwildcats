import { defineType, defineField } from "sanity";

export const result = defineType({
  name: "result",
  title: "Match Results",
  type: "document",
  icon: () => "🏏",
  fields: [
    defineField({
      name: "grade", title: "Grade / Team", type: "string",
      options: {
        list: ["1st Grade","2nd Grade","3rd Grade","4th Grade","Masters","RCI U17","RCI U14","RCI U12","RCI U10","BEARS U17","BEARS U14","BEARS U12","Cricket Blast"].map(v => ({ title: v, value: v })),
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "opponent", title: "Opponent", type: "string", validation: (R) => R.required() }),
    defineField({ name: "ourScore",   title: "Our Score",      type: "string", placeholder: "e.g. 167/6" }),
    defineField({ name: "theirScore", title: "Their Score",    type: "string", placeholder: "e.g. 144" }),
    defineField({
      name: "result", title: "Result", type: "string",
      options: { list: [{ title: "Win", value: "W" }, { title: "Loss", value: "L" }, { title: "Draw", value: "D" }, { title: "No Result", value: "NR" }] },
      validation: (R) => R.required(),
    }),
    defineField({ name: "matchDate",   title: "Match Date",   type: "date", validation: (R) => R.required() }),
    defineField({ name: "competition", title: "Competition",  type: "string", initialValue: "QSDCA" }),
    defineField({ name: "season",      title: "Season",       type: "string", initialValue: "2024/25" }),
    defineField({ name: "venue",       title: "Venue",        type: "string" }),
    defineField({ name: "notes",       title: "Match Notes",  type: "text", rows: 2 }),
  ],
  orderings: [{ title: "Newest First", name: "matchDateDesc", by: [{ field: "matchDate", direction: "desc" }] }],
  preview: {
    select: { grade: "grade", opponent: "opponent", result: "result", date: "matchDate" },
    prepare({ grade, opponent, result, date }) {
      return { title: `${grade} vs ${opponent}`, subtitle: `${result} · ${date}` };
    },
  },
});
