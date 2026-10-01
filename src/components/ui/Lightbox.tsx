"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/content/site";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/contact";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const item = isOpen ? items[currentIndex] : null;
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation and focus trap
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          handleNext();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrev();
        } else if (e.key === "Tab" && containerRef.current) {
          const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Focus the container
      const closeBtn = containerRef.current?.querySelector<HTMLButtonElement>("button");
      closeBtn?.focus();

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !item) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Project Preview: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
        <span className="text-xs font-mono text-offwhite/60 tracking-wider">
          {currentIndex! + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="p-2.5 rounded-full bg-charcoal/80 text-offwhite hover:bg-accent hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Previous */}
      <button
        onClick={handlePrev}
        aria-label="Previous project photo"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/70 text-offwhite hover:bg-accent hover:text-charcoal transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent z-40 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Next */}
      <button
        onClick={handleNext}
        aria-label="Next project photo"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/70 text-offwhite hover:bg-accent hover:text-charcoal transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent z-40 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Preview Container */}
      <div className="relative max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
        <div className="w-full relative rounded-lg overflow-hidden border border-charcoal-border/80 shadow-2xl bg-charcoal-dark">
          <ImageOrPlaceholder
            src={item.imageSrc}
            alt={item.alt}
            placeholderLabel={`GALLERY PHOTO REQUIRED: ${item.title}`}
            placeholderNote="High-resolution completed work photo will appear here when provided by client."
            aspectRatio={item.aspectRatio === "portrait" ? "portrait" : "landscape"}
            className="w-full max-h-[65vh] object-contain"
          />
        </div>

        {/* Caption & Actions */}
        <div className="w-full mt-4 bg-charcoal-200/90 border border-charcoal-border p-4 md:p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-accent/20 text-accent font-semibold">
                {item.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-offwhite">
                {item.title}
              </h3>
            </div>
            {item.caption && (
              <p className="text-xs md:text-sm text-warmgray-light">
                {item.caption}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              href={whatsappLink(
                `Assalam-o-Alaikum, I am interested in a design similar to your project: "${item.title}". Can you provide a quote?`
              )}
              variant="primary"
              size="sm"
            >
              Inquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
