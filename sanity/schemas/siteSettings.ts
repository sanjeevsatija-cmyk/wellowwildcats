import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({ name: "clubName", title: "Club Name", type: "string", initialValue: "Wellington Point Cricket Club" }),
    defineField({ name: "tagline", title: "Tagline", type: "string", initialValue: "Home of the Wildcats — Est. 1895" }),
    defineField({ name: "address", title: "Street Address", type: "string", initialValue: "210 Mooroondu Road, Thorneside QLD 4158" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Secretary Email", type: "string", initialValue: "secretary@wellowildcats.com.au" }),
    defineField({ name: "registrationUrl", title: "Registration URL (PlayHQ)", type: "url", initialValue: "https://play.cricket.com.au/club-finder/club-details?Id=5499" }),
    defineField({ name: "playhqUrl", title: "PlayHQ Club Page", type: "url" }),
    defineField({
      name: "socialLinks", title: "Social Media", type: "object",
      fields: [
        defineField({ name: "facebook",  title: "Facebook URL",  type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "twitter",   title: "Twitter/X URL", type: "url" }),
      ],
    }),
    defineField({ name: "seasonLabel", title: "Current Season Label (e.g. 2024/25)", type: "string", initialValue: "2024/25" }),
  ],
  preview: { select: { title: "clubName" } },
});
