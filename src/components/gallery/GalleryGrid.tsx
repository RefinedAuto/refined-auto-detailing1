"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  tag: string;
}

const tags = ["All", "Interior", "Exterior", "Full Detail", "Ceramic Coating"];

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? items : items.filter((item) => item.tag === activeTag);

  return (
    <>
      <div role="group" aria-label="Filter photos by service" className="flex flex-wrap justify-center gap-3 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={tag === activeTag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              tag === activeTag ? "bg-gold-500 text-black" : "glass text-white/60 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {activeTag === "All" ? "" : activeTag} photos
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-300"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
              <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-1 block">{item.tag}</span>
              <p className="text-white font-semibold text-base">{item.label}</p>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-center text-white/60 py-16">No photos in this category yet — check back soon.</p>
      )}
    </>
  );
}
