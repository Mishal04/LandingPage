"use client";

import React, { useState } from "react";
import { ZoomIn, Filter } from "lucide-react";
import { siteContent, GalleryItem } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const { gallery } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

  const filteredItems =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-28 bg-white text-[#292E25] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            theme="light"
            tagline="Portfolio of Work"
            title="Featured Projects & Workmanship"
            description="A curated look at our fabricated aluminum frames, glass partitions, storefront installations, and custom fixtures."
          />
        </Reveal>

        {/* Category Filters */}
        {categories.length > 2 && (
          <Reveal delayMs={100}>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
              <span className="sr-only">Filter by project category</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4865A] ${
                    selectedCategory === cat
                      ? "bg-[#A4865A] text-white shadow-lg shadow-[#A4865A]/50"
                      : "bg-[#EBE7DE] text-[#292E25] hover:bg-[#DDD8CE] hover:text-[#A4865A] border border-[#DDD8CE]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Architectural Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedItems.map((item: GalleryItem, index: number) => {
            return (
              <Reveal
                key={item.id}
                delayMs={index * 50}
              >
                <div
                  onClick={() => {
                    const originalIndex = gallery.findIndex((g) => g.id === item.id);
                    setLightboxIndex(originalIndex);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      const originalIndex = gallery.findIndex((g) => g.id === item.id);
                      setLightboxIndex(originalIndex);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View enlarged photo for ${item.title}`}
                  className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-white border border-[#EBE7DE] hover:border-[#A4865A] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#A4865A]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4865A]"
                >
                  <div className="relative overflow-hidden w-full aspect-[4/3] bg-[#F3EFE6]">
                    <ImageOrPlaceholder
                      src={item.imageSrc}
                      alt={item.alt}
                      placeholderLabel={`PROJECT PHOTO REQUIRED: ${item.title}`}
                      placeholderNote="Client photography placeholder. Click to preview full modal."
                      aspectRatio="landscape"
                      className="w-full transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-[#292E25]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-[#A4865A] text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="flex-grow p-4 bg-gradient-to-r from-[#EBE7DE] to-[#DDD8CE] border-t border-[#D0CAC0] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#A4865A] tracking-wider font-semibold">
                        {item.category}
                      </span>
                      <h3 className="text-sm font-bold text-[#292E25] mt-0.5 group-hover:text-[#A4865A] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#766F63] group-hover:text-[#A4865A] transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Show More Button on Mobile/Tablet if more items exist */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-[#A4865A] hover:bg-[#9C8A52] text-white"
            >
              Show More Projects ({filteredItems.length - visibleCount} remaining)
            </Button>
          </div>
        )}

        {/* Lightweight Lightbox Modal */}
        <Lightbox
          items={gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      </div>
    </section>
  );
}
