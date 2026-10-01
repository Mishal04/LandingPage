import React from "react";
import { MessageCircle, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { siteContent, resolveValue, isPlaceholder } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { StarRating } from "@/components/ui/StarRating";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { business, rating } = siteContent;
  const quoteLabel =
    resolveValue(business.ctaQuoteLabel, "Get a Free Quote") || "Get a Free Quote";

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[85vh] md:min-h-[88vh] flex items-center justify-center bg-charcoal-dark overflow-hidden scroll-mt-20"
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
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-dark via-charcoal/80 to-charcoal-dark/90" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
        {/* Local presence pill */}
        <Reveal delayMs={100}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-200/90 border border-charcoal-border text-xs md:text-sm text-offwhite/90 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-medium">
              Nishatabad, Faisalabad
            </span>
            <span className="text-charcoal-border">|</span>
            <span className="text-accent font-medium">Custom Fabrication</span>
          </div>
        </Reveal>

        {/* The page's single H1 */}
        <Reveal delayMs={200}>
          <h1
            id="hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-offwhite tracking-tight leading-[1.15] max-w-4xl"
          >
            Premium Aluminum & Glass Solutions for Modern Spaces
          </h1>
        </Reveal>

        {/* Supporting subtitle */}
        <Reveal delayMs={300}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-offwhite/80 max-w-2xl font-sans leading-relaxed">
            Professional fabrication and on-site installation of aluminum windows, heavy-duty doors, glass partitions, and commercial shopfronts in Faisalabad.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delayMs={400}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <Button
                href={whatsappLink()}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                {quoteLabel}
              </Button>
              {isPlaceholder(business.ctaQuoteLabel) && (
                <Placeholder
                  label="CTA LABEL APPROVAL PENDING"
                  variant="badge"
                  className="mt-1.5 text-[10px]"
                />
              )}
            </div>

            <Button
              href="#projects"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto min-w-[180px]"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Our Work
            </Button>
          </div>
        </Reveal>

        {/* Trust Line */}
        <Reveal delayMs={500}>
          <div className="mt-10 pt-8 border-t border-charcoal-border/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-offwhite/80">
            <div className="flex items-center gap-2">
              <StarRating rating={rating.value} size="sm" />
              <span className="font-bold text-offwhite">{rating.value}</span>
              <span className="text-warmgray-light">
                ({rating.count} Google Reviews)
              </span>
            </div>

            <span className="hidden sm:inline text-charcoal-border">•</span>

            <div className="flex items-center gap-1.5 text-offwhite/85">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Direct Workshop Measurements</span>
            </div>

            <span className="hidden sm:inline text-charcoal-border">•</span>

            <div className="flex items-center gap-1.5 text-offwhite/85">
              <span>Local Nishatabad Service</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
