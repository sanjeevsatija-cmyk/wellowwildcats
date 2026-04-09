import { groq } from "next-sanity";

// ── Site Settings ─────────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    clubName, tagline, address, phone, email,
    registrationUrl, playhqUrl, seasonLabel,
    socialLinks { facebook, instagram, twitter }
  }
`;

// ── Homepage: latest 3 featured news posts ────────────────────────
export const HOME_NEWS_QUERY = groq`
  *[_type == "newsPost"] | order(publishedAt desc) [0...3] {
    _id, title, slug, publishedAt, category, featured, excerpt,
    featuredImage { asset, alt }
  }
`;

// ── Homepage: latest 4 results ────────────────────────────────────
export const HOME_RESULTS_QUERY = groq`
  *[_type == "result"] | order(matchDate desc) [0...4] {
    _id, grade, opponent, ourScore, theirScore, result, matchDate
  }
`;

// ── Programs (ordered) ────────────────────────────────────────────
export const PROGRAMS_QUERY = groq`
  *[_type == "program"] | order(order asc) {
    _id, name, slug, number, icon, ageGroup, shortDescription, featured,
    featuredImage { asset, alt }
  }
`;

// ── Sponsors (active, ordered) ────────────────────────────────────
export const SPONSORS_QUERY = groq`
  *[_type == "sponsor" && active == true] | order(order asc) {
    _id, name, website, icon, category,
    logo { asset, alt }
  }
`;

// ── Gallery albums ────────────────────────────────────────────────
export const GALLERY_QUERY = groq`
  *[_type == "galleryAlbum"] | order(order asc) {
    _id, title, season, category,
    coverImage { asset },
    images[] { asset, alt, caption }
  }
`;

// ── Homepage: first 5 gallery album covers for PhotoMosaic ────────
export const HOME_GALLERY_QUERY = groq`
  *[_type == "galleryAlbum"] | order(order asc) {
    _id, title, category,
    coverImage { asset },
    "photos": images[0...5] { asset, alt }
  }
`;

// ── Homepage: news ticker items ───────────────────────────────────
export const TICKER_QUERY = groq`
  *[_type == "tickerItem" && active == true] | order(order asc) {
    _id, text, emoji
  }
`;

// ── Single news post ──────────────────────────────────────────────
export const NEWS_POST_QUERY = groq`
  *[_type == "newsPost" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, category, excerpt, body,
    featuredImage { asset, alt }
  }
`;

// ── All news (paginated) ──────────────────────────────────────────
export const ALL_NEWS_QUERY = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, category, excerpt,
    featuredImage { asset, alt }
  }
`;

// ── All results ───────────────────────────────────────────────────
export const ALL_RESULTS_QUERY = groq`
  *[_type == "result"] | order(matchDate desc) {
    _id, grade, opponent, ourScore, theirScore, result, matchDate, competition, season, venue, notes
  }
`;

// ── Committee ─────────────────────────────────────────────────────
export const COMMITTEE_QUERY = groq`
  *[_type == "committeeMember"] | order(order asc) {
    _id, name, role, email, phone, bio,
    photo { asset, alt }
  }
`;

// ── Single program ────────────────────────────────────────────────
export const PROGRAM_QUERY = groq`
  *[_type == "program" && slug.current == $slug][0] {
    _id, name, slug, number, icon, ageGroup, shortDescription, body, registrationUrl,
    featuredImage { asset, alt }
  }
`;

// ── News slugs for static generation ─────────────────────────────
export const NEWS_SLUGS_QUERY = groq`
  *[_type == "newsPost" && defined(slug.current)] { "slug": slug.current }
`;

// ── Program slugs for static generation ──────────────────────────
export const PROGRAM_SLUGS_QUERY = groq`
  *[_type == "program" && defined(slug.current)] { "slug": slug.current }
`;
