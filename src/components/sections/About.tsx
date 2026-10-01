import React from "react";
import { CheckCircle2, MapPin, Building2, UserCheck } from "lucide-react";
import { siteContent, resolveValue, isPlaceholder } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about, business } = siteContent;
  const introText = resolveValue(about.introduction);
  const approachText = resolveValue(about.approach);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 bg-offwhite text-charcoal scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-heading"
            tagline="Our Workshop & Approach"
            title="About Mashallah Aluminum & Glass House"
            align="left"
            className="mb-8"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workshop / Owner Photography Placeholder Block */}
          <div className="lg:col-span-5">
            <Reveal delayMs={100}>
              <div className="relative rounded-lg overflow-hidden border border-offwhite-border shadow-md bg-charcoal">
                <ImageOrPlaceholder
                  src={about.workshopPhotoSrc}
                  alt="Mashallah Aluminum & Glass House workshop in Nishatabad, Faisalabad"
                  placeholderLabel="WORKSHOP / OWNER PHOTO REQUIRED"
                  placeholderNote="Authentic photo of workshop fabrication area or master craftsman."
                  aspectRatio="square"
                  className="w-full object-cover"
                />

                {/* Information Badge */}
                <div className="p-4 bg-charcoal-200 text-offwhite border-t border-charcoal-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs font-medium">Nishatabad, Faisalabad</span>
                  </div>
                  {isPlaceholder(about.yearsOfExperience) ? (
                    <Placeholder
                      label="YEARS OF EXP PENDING"
                      variant="badge"
                      className="text-[10px]"
                    />
                  ) : (
                    <span className="text-xs font-mono text-accent font-bold">
                      {about.yearsOfExperience} Years Exp
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Introduction, Workmanship Philosophy & Commitments */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delayMs={150}>
              <div className="space-y-4 text-base text-warmgray-dark leading-relaxed font-sans">
                {isPlaceholder(about.introduction) && (
                  <div className="mb-2">
                    <Placeholder
                      label="BUSINESS INTRODUCTION REQUIRED"
                      variant="badge"
                      note="Client to provide official founding story and introduction."
                    />
                  </div>
                )}
                <p className="text-charcoal font-medium">
                  {introText}
                </p>

                {isPlaceholder(about.approach) && (
                  <div className="my-2">
                    <Placeholder
                      label="WORKMANSHIP STATEMENT REQUIRED"
                      variant="badge"
                    />
                  </div>
                )}
                <p>
                  {approachText}
                </p>
              </div>
            </Reveal>

            {/* Honest Values Grid */}
            <Reveal delayMs={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-offwhite-border">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-offwhite-card border border-offwhite-border">
                  <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">
                      Local Workshop Fabrication
                    </h4>
                    <p className="text-xs text-warmgray-dark mt-0.5">
                      Direct site measurements and custom sizing in Nishatabad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-offwhite-card border border-offwhite-border">
                  <UserCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-charcoal">
                      Direct Communication
                    </h4>
                    <p className="text-xs text-warmgray-dark mt-0.5">
                      Transparent quotes via WhatsApp and direct phone consultation.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
