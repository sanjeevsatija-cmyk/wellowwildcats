"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Photos available — replace/add as more come in from gallery
const ALL_PHOTOS = [
  { src: "/Ground1.jpg",  alt: "Mooroondu Oval" },
  { src: "/Team1.jpg",    alt: "Wello Wildcats team" },
  { src: "/Pitch1.jpg",   alt: "Pitch preparation" },
  { src: "/Ground1.jpg",  alt: "Game day at Thorneside" },
  { src: "/Team1.jpg",    alt: "Junior cricketers" },
  { src: "/Pitch1.jpg",   alt: "Ready to play" },
];

const GRID_SIZE = 6; // number of cells in the mosaic

export default function PhotoMosaic() {
  const [visible, setVisible] = useState<boolean[]>(Array(GRID_SIZE).fill(true));
  const [photos, setPhotos] = useState(
    ALL_PHOTOS.slice(0, GRID_SIZE)
  );

  useEffect(() => {
    // Every 2.5s, pick a random cell, fade it out, swap photo, fade back in
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * GRID_SIZE);
      // Fade out
      setVisible((v) => v.map((val, i) => (i === idx ? false : val)));

      setTimeout(() => {
        // Swap photo
        setPhotos((p) => {
          const next = [...p];
          const available = ALL_PHOTOS.filter((ph) => ph.src !== p[idx].src);
          next[idx] = available[Math.floor(Math.random() * available.length)];
          return next;
        });
        // Fade back in
        setVisible((v) => v.map((val, i) => (i === idx ? true : val)));
      }, 600);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-14 px-4 md:px-12 bg-cream">
      <div className="max-w-[1240px] mx-auto">
        <div className="section-label mb-3">Life at Wello</div>
        <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-black text-green-dark mb-6">
          Cricket, community &amp; good times
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg transition-opacity duration-500 ${
                i === 0 ? "row-span-2 col-span-1" : ""
              }`}
              style={{
                height: i === 0 ? undefined : "160px",
                minHeight: i === 0 ? "324px" : undefined,
                opacity: visible[i] ? 1 : 0,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        <p className="text-center font-condensed text-[11px] tracking-[0.1em] uppercase text-wello-grey mt-4">
          📸 More photos in our{" "}
          <a href="/gallery" className="text-green-dark font-bold hover:text-gold transition-colors no-underline">
            Gallery →
          </a>
        </p>
      </div>
    </section>
  );
}
