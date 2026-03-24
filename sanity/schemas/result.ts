import { defineType, defineField } from "sanity";

export const result = defineType({
  name: "result",
  title: "Match Results & Fixtures",
  type: "document",
  icon: () => "🏏",
  fields: [
    defineField({
      name: "isUpcoming",
      title: "Upcoming Fixture?",
      type: "boolean",
      description: "Tick this for scheduled fixtures that haven't been played yet. Leave unticked for completed match results.",
      initialValue: false,
    }),
    defineField({
      name: "competition",
      title: "Competition",
      type: "string",
      options: {
        list: [
          { title: "QSDCA", value: "QSDCA" },
          { title: "BEARS", value: "BEARS" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "grade",
      title: "Grade / Team",
      type: "string",
      options: {
        list: [
          // QSDCA
          { title: "1st Grade",  value: "1st Grade" },
          { title: "2nd Grade",  value: "2nd Grade" },
          { title: "3rd Grade",  value: "3rd Grade" },
          { title: "Masters XI", value: "Masters XI" },
          // BEARS
          { title: "BEARS U17",  value: "BEARS U17" },
          { title: "BEARS U16",  value: "BEARS U16" },
          { title: "BEARS U15",  value: "BEARS U15" },
          { title: "BEARS U14",  value: "BEARS U14" },
          { title: "BEARS U13",  value: "BEARS U13" },
          { title: "BEARS U12",  value: "BEARS U12" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "opponent",
      title: "Opponent",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "matchDate",
      title: "Match Date",
      type: "date",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),
    defineField({
      name: "round",
      title: "Round",
      type: "string",
      placeholder: "e.g. Round 5 or Semi Final",
    }),
    // Results fields — only relevant for completed matches
    defineField({
      name: "ourScore",
      title: "Our Score",
      type: "string",
      description: "Leave blank for upcoming fixtures",
      placeholder: "e.g. 167/6",
    }),
    defineField({
      name: "theirScore",
      title: "Their Score",
      type: "string",
      description: "Leave blank for upcoming fixtures",
      placeholder: "e.g. 144",
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: "Leave blank for upcoming fixtures",
      options: {
        list: [
          { title: "Win",       value: "W"  },
          { title: "Loss",      value: "L"  },
          { title: "Draw",      value: "D"  },
          { title: "No Result", value: "NR" },
          { title: "Abandoned", value: "A"  },
        ],
      },
    }),
    defineField({
      name: "season",
      title: "Season",
      type: "string",
      initialValue: "2025/26",
    }),
    defineField({
      name: "notes",
      title: "Match Notes",
      type: "text",
      rows: 2,
      description: "Optional — e.g. Player of the match, notable performance",
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "matchDateDesc",
      by: [{ field: "matchDate", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "matchDateAsc",
      by: [{ field: "matchDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      grade:      "grade",
      opponent:   "opponent",
      result:     "result",
      date:       "matchDate",
      isUpcoming: "isUpcoming",
      comp:       "competition",
    },
    prepare({ grade, opponent, result, date, isUpcoming, comp }) {
      const status = isUpcoming ? "📅 Upcoming" : `${result} ·`;
      return {
        title:    `${grade} vs ${opponent}`,
        subtitle: `${status} ${date} · ${comp}`,
      };
    },
  },
});
