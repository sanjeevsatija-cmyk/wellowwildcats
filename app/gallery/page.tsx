"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/Topbar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "@/lib/sanity.image";
import { GALLERY_QUERY } from "@/lib/sanity.queries";

const FILTERS = ["All", "Match Day", "Juniors", "Girls", "Events", "Training"];

interface SanityImage {
  asset: { _ref: string };
  alt?: string;
  caption?: string;
}

interface GalleryAlbum {
  _id: string;
  title: string;
  season?: string;
  category: string;
  coverImage?: { asset: { _ref: string } };
  images?: SanityImage[];
}

interface FlatPhoto {
  src: string;
  alt: string;
  cat: string;
}

export default function GalleryPage() {
  const [active, setActive]   = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [photos, setPhotos]   = useState<FlatPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch<GalleryAlbum[]>(GALLERY_QUERY)
      .then((albums) => {
        // Flatten all album images into a single list with category tag
        const flat: FlatPhoto[] = [];
        albums.forEach((album) => {
          const cat = album.category || "Match Day";
          // Include cover image first if present
          if (album.coverImage?.asset) {
            flat.push({
              src: urlForImage(album.coverImage).width(800).url(),
              alt: album.title,
              cat,
            });
          }
          // Then all images in the album
          (album.images || []).forEach((img) => {
            if (img.asset) {
              flat.push({
                src: urlForImage(img).width(800).url(),
                alt: img.alt || album.title,
                cat,
              });
            }
          });
        });
        setPhotos(flat);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = active === "All" ? photos : photos.filter((p) => p.cat === active);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      <Topbar />
      <Nav />
      <main>

        {/* Hero */}
        <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden">
          <Image src="/gallery_hero.jpg" alt="Wello Wildcats match day" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-green-deep/30 to-transparent" />
          <div className="absolute bottom-14 left-6 md:bottom-16 md:left-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-5 h-0.5 bg-gold" />
              <span className="font-condensed text-[10px] font-bold tracking-[0.18em] uppercase text-gold">Season 2025/26</span>
            </div>
            <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-black text-white leading-tight">Photo Gallery</h1>
          </div>
          <div className="absolute bottom-0 left-[-5%] w-[110%] h-[50px] bg-cream pointer-events-none" style={{ transform: "skewY(-2deg)" }} />
        </div>

        {/* Filter pills */}
        <section className="bg-cream px-4 md:px-12 pt-10 pb-2">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`font-condensed text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                    active === f
                      ? "bg-green-deep text-gold border-green-deep"
                      : "bg-white text-wello-grey border-grey-light hover:border-gold hover:text-green-dark"
                  }`}
                >
                  {f}
                </button>
              ))}
              <span className="font-condensed text-[11px] text-wello-grey ml-2">
                {loading ? "Loading..." : `${filtered.length} photos`}
              </span>
            </div>
          </div>
        </section>

        {/* Masonry grid */}
        <section className="bg-cream px-4 md:px-12 py-8">
          <div className="max-w-[1100px] mx-auto">

            {loading && (
              <div className="text-center py-20 text-wello-grey font-condensed text-[13px] tracking-[0.1em] uppercase">
                Loading photos...
              </div>
            )}

            {!loading && filtered.length === 0 && (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">📸</div>
                <p className="font-condensed text-[13px] text-wello-grey tracking-[0.1em] uppercase">
                  No photos yet — add some in Sanity Studio
                </p>
              </div>
            )}

            {!loading && filtered.length > 0 && (
              <div className="[column-count:2] md:[column-count:3]" style={{ columnGap: "12px" }}>
                {filtered.map((photo, i) => (
                  <div
                    key={`${photo.src}-${i}`}
                    className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-pointer group relative"
                    onClick={() => setLightbox(i)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ display: "block" }}
                    />
                    <div className="absolute inset-0 bg-green-deep/0 group-hover:bg-green-deep/40 transition-all duration-300 flex items-end p-3">
                      <span className={`font-condensed text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        photo.cat === "Girls"    ? "bg-blue-600 text-white"   :
                        photo.cat === "Events"   ? "bg-purple-600 text-white" :
                        photo.cat === "Training" ? "bg-amber-500 text-white"  :
                        photo.cat === "Juniors"  ? "bg-green-600 text-white"  :
                        "bg-gold text-green-deep"
                      }`}>
                        {photo.cat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Share CTA */}
        <section className="py-12 px-4 md:px-12 bg-white text-center">
          <div className="max-w-[560px] mx-auto">
            <div className="text-4xl mb-4">📸</div>
            <div className="section-label mb-2">Got Photos?</div>
            <h2 className="font-serif text-[clamp(20px,2.5vw,30px)] font-black text-green-dark mb-3">
              Share Your Match Day Photos
            </h2>
            <p className="text-[14px] text-wello-grey leading-[1.7] mb-6">
              Got great shots from a match or training session? Send them through and we&apos;ll add them to the gallery.
            </p>
            <a href="mailto:president@wellowildcats.com.au?subject=Photo Submission" className="btn-primary inline-flex items-center gap-2">
              Send Photos →
            </a>
          </div>
        </section>

      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-5 text-white/70 hover:text-white font-condensed text-[13px] font-bold tracking-[0.1em] uppercase z-10"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <div
            className="relative max-w-[90vw] max-h-[85vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto"
              style={{ maxWidth: "90vw" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-3">
              <span className="font-condensed text-[11px] font-bold tracking-[0.1em] uppercase text-gold">
                {filtered[lightbox].cat}
              </span>
              <p className="text-white text-[13px] mt-0.5">{filtered[lightbox].alt}</p>
            </div>
          </div>
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-condensed text-[11px] text-white/50 tracking-[0.1em]">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
