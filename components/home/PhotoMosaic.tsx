import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/lib/sanity.image";
import { HOME_GALLERY_QUERY } from "@/lib/sanity.queries";

// ─── Fallback images (used only when Sanity has no images at all) ─────────────
const FALLBACK_MOSAIC = [
  { src: "/Team1.jpg",          alt: "Match Day",     label: "Match Day",    sticker: "🔥 Live", span: true  },
  { src: "/young_programs.jpg", alt: "Training",      label: "Training",     sticker: null,      span: false },
  { src: "/Girl_Power.jpg",     alt: "Girls Cricket", label: "Girls Cricket",sticker: null,      span: false },
  { src: "/Junior.jpg",         alt: "Juniors",       label: "Juniors",      sticker: null,      span: false },
  { src: "/Events.jpg",         alt: "Events",        label: "Events",       sticker: null,      span: false },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface SanityImageRef {
  asset: { _ref: string };
  alt?: string;
}

interface GalleryAlbum {
  _id: string;
  title: string;
  category?: string;
  coverImage?: SanityImageRef;
  photos?: SanityImageRef[];
}

interface MosaicTile {
  src: string;
  alt: string;
  label: string;
  sticker: string | null;
  span: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default async function PhotoMosaic() {
  let albums: GalleryAlbum[] = [];

  try {
    albums = await client.fetch(HOME_GALLERY_QUERY);
  } catch (err) {
    console.error("[PhotoMosaic] Sanity fetch failed:", err);
  }

  // Build a flat list of up to 5 tiles from across all albums.
  // For each album: use coverImage first if set, then each image in photos[].
  // This handles both "many albums, one image each" and
  // "one album with many images" correctly.
  const tiles: MosaicTile[] = [];

  for (const album of albums) {
    if (tiles.length >= 5) break;

    const label = album.category ?? album.title;

    // If coverImage is set, use it as this album's representative tile
    if (album.coverImage?.asset) {
      tiles.push({
        src: urlForImage(album.coverImage).width(900).height(600).url(),
        alt: album.title,
        label,
        sticker: null,
        span: false,
      });
      if (tiles.length >= 5) break;
    }

    // Then draw from the photos[] array to fill remaining slots
    for (const photo of album.photos ?? []) {
      if (tiles.length >= 5) break;
      if (!photo?.asset) continue;

      tiles.push({
        src: urlForImage(photo).width(900).height(600).url(),
        alt: photo.alt ?? album.title,
        label,
        sticker: null,
        span: false,
      });
    }
  }

  // First tile always spans 2 rows and gets the live sticker
  if (tiles.length > 0) {
    tiles[0].span = true;
    tiles[0].sticker = "🔥 Live";
  }

  const mosaic = tiles.length >= 5 ? tiles : FALLBACK_MOSAIC;

  return (
    <section className="relative overflow-hidden" style={{ background: "#142E14", padding: "100px 52px" }}>

      {/* Skewed cream cuts top and bottom */}
      <div className="absolute pointer-events-none" style={{ top: -60, left: "-5%", width: "110%", height: 100, background: "#F7F4EE", transform: "skewY(-3deg)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: -60, left: "-5%", width: "110%", height: 100, background: "#F7F4EE", transform: "skewY(-3deg)" }} />

      <div className="relative max-w-[1240px] mx-auto" style={{ zIndex: 2 }}>

        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-2"
              style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A030" }}
            >
              <span style={{ display: "block", width: 24, height: 2, background: "#C9A030" }} />
              Club life
            </div>
            <h2 className="font-serif text-white leading-tight" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
              More Than <em className="not-italic text-gold">Just Cricket</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="no-underline"
            style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9A030", borderBottom: "1px solid rgba(201,160,48,0.4)", paddingBottom: 2 }}
          >
            View Full Gallery →
          </Link>
        </div>

        {/* Mosaic grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "240px 240px",
            gap: 10,
          }}
        >
          {mosaic.map((item, i) => (
            <Link
              key={i}
              href="/gallery"
              className="relative overflow-hidden group cursor-pointer no-underline"
              style={{ borderRadius: 8, gridRow: item.span ? "span 2" : undefined }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top,rgba(20,46,20,0.8) 0%,transparent 60%)" }}
              />
              {/* Label */}
              <div
                className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F0C040" }}
              >
                {item.label}
              </div>
              {/* Sticker */}
              {item.sticker && (
                <div
                  className="absolute top-3 right-3"
                  style={{ background: "#C9A030", color: "#142E14", fontFamily: "'Raleway',sans-serif", fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 8px", transform: "rotate(2deg)" }}
                >
                  {item.sticker}
                </div>
              )}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
