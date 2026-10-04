import React from "react";
import { MessageCircle, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { siteContent } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { business, rating } = siteContent;
  const quoteLabel = business.ctaQuoteLabel || "Get a Quote";

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[85vh] md:min-h-[88vh] flex items-center justify-center bg-[#292E25] overflow-hidden scroll-mt-20"
    >
      {/* Background Hero Image / Architectural Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ImageOrPlaceholder
          src={business.heroPhotoSrc}
          alt="Premium Aluminum & Glass architectural work in Faisalabad"
          placeholderLabel="HERO PHOTO REQUIRED (High-resolution completed window/glass installation)"
          placeholderNote="Reserved full-width hero background slot for verified client photography."
          aspectRatio="hero"
          priority={true}
          className="w-full h-full min-h-full object-cover"
        />
      </div>

      {/* Subtle architectural gradient overlay for high contrast text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#292E25] via-[#292E25]/30 to-[#292E25]/40" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
        {/* Local presence pill */}
        <Reveal delayMs={100}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292E25]/90 border border-[#9C9A91] text-xs md:text-sm text-[#F3EFE6]/90 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#A4865A] animate-pulse" />
            <span className="font-medium">
              Nishatabad, Faisalabad
            </span>
            <span className="text-[#9C9A91]">|</span>
            <span className="text-[#A4865A] font-medium">Custom Fabrication</span>
          </div>
        </Reveal>

        {/* The page's single H1 */}
        <Reveal delayMs={200}>
          <h1
            id="hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#F3EFE6] tracking-tight leading-[1.15] max-w-4xl"
          >
            Premium Aluminum & Glass Solutions for Modern Spaces
          </h1>
        </Reveal>

        {/* Supporting subtitle */}
        <Reveal delayMs={300}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#F3EFE6]/80 max-w-2xl font-sans leading-relaxed">
            Professional fabrication and on-site installation of aluminum windows, heavy-duty doors, glass partitions, and commercial shopfronts in Faisalabad.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delayMs={400}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              href={whatsappLink()}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] bg-[#A4865A] hover:bg-[#8F7450] text-white font-bold"
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              {quoteLabel}
            </Button>

            <Button
              href="#projects"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] border-[#A4865A] text-[#A4865A] hover:bg-[#A4865A]/10"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Our Work
            </Button>
          </div>
        </Reveal>

        {/* Trust Line */}
        <Reveal delayMs={500}>
          <div className="mt-10 pt-8 border-t border-[#9C9A91]/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#F3EFE6]/80">
            <div className="flex items-center gap-2">
              <StarRating rating={rating.value} size="sm" />
              <span className="font-bold text-[#F3EFE6]">{rating.value}</span>
              <span className="text-[#9C9A91]">
                ({rating.count} Google Reviews)
              </span>
            </div>

            <span className="hidden sm:inline text-[#9C9A91]">•</span>

            <div className="flex items-center gap-1.5 text-[#F3EFE6]/85">
              <ShieldCheck className="w-4 h-4 text-[#A4865A]" />
              <span>Direct Workshop Measurements</span>
            </div>

            <span className="hidden sm:inline text-[#9C9A91]">•</span>

            <div className="flex items-center gap-1.5 text-[#F3EFE6]/85">
              <span>Local Nishatabad Service</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
