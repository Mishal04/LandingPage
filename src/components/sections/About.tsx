import React from "react";
import { CheckCircle2, MapPin, Building2, UserCheck } from "lucide-react";
import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageOrPlaceholder } from "@/components/ui/ImageOrPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { about, business } = siteContent;
  const introText = about.introduction;
  const approachText = about.approach;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 bg-[#BCB9B0] text-[#242321] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-heading"
            theme="light"
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
              <div className="relative rounded-xl overflow-hidden border border-[#E8DED0] shadow-lg bg-white">
                <ImageOrPlaceholder
                  src={about.workshopPhotoSrc}
                  alt="Mashallah Aluminum & Glass House workshop in Nishatabad, Faisalabad"
                  placeholderLabel="WORKSHOP / OWNER PHOTO REQUIRED"
                  placeholderNote="Authentic photo of workshop fabrication area or master craftsman."
                  aspectRatio="square"
                  className="w-full object-cover"
                />

                {/* Information Badge */}
                <div className="p-4 bg-[#E8DED0] text-[#242321] border-t border-[#D4C4B0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B89B72] flex-shrink-0" />
                    <span className="text-xs font-medium">Nishatabad, Faisalabad</span>
                  </div>
                  <span className="text-xs font-mono text-[#B89B72] font-bold">
                    {about.yearsOfExperience}+ Years Exp
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Introduction, Workmanship Philosophy & Commitments */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delayMs={150}>
              <div className="space-y-4 text-base text-[#756F67] leading-relaxed font-sans">
                <p className="text-[#242321] font-medium">
                  {introText}
                </p>

                <p className="text-[#242321] font-medium">
                  {approachText}
                </p>
              </div>
            </Reveal>

            {/* Honest Values Grid */}
            <Reveal delayMs={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DED0]">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#E8DED0] hover:border-[#B89B72] transition-all">
                  <Building2 className="w-5 h-5 text-[#B89B72] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#242321]">
                      Local Workshop Fabrication
                    </h4>
                    <p className="text-xs text-[#756F67] mt-0.5">
                      Direct site measurements and custom sizing in Nishatabad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#E8DED0] hover:border-[#B89B72] transition-all">
                  <UserCheck className="w-5 h-5 text-[#B89B72] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#242321]">
                      Direct Communication
                    </h4>
                    <p className="text-xs text-[#756F67] mt-0.5">
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
