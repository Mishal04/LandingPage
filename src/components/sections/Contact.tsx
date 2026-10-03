"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { siteContent } from "@/content/site";
import { telLink, whatsappLink, directionsLink } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { business } = siteContent;
  const [mapLoaded, setMapLoaded] = useState(true);

  const hoursText = business.hours;
  const dirUrl = directionsLink();
  const isEmbedAvailable =
    business.mapEmbedUrl && business.mapEmbedUrl.length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-[#E8DED0] text-[#242321] scroll-mt-16 border-t border-[#D4C4B0]"
      style={{ paddingBottom: "8rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            theme="light"
            tagline="Get In Touch"
            title="Contact & Workshop Location"
            description="Call directly, chat with us on WhatsApp for fast estimates, or visit our Nishatabad workshop."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Desktop) / Primary Conversion Stack (Mobile) */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1">
            {/* Direct Action Buttons - Top prominence on mobile & desktop */}
            <Reveal delayMs={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  href={telLink()}
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  leftIcon={<Phone className="w-4 h-4" />}
                >
                  Call Now
                </Button>

                <Button
                  href={whatsappLink()}
                  variant="primary"
                  size="md"
                  className="w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white border-transparent"
                  leftIcon={<MessageCircle className="w-4 h-4" />}
                >
                  WhatsApp
                </Button>

                <Button
                  href={dirUrl}
                  variant="secondary"
                  size="md"
                  isExternal={true}
                  className="w-full text-center"
                  leftIcon={<Navigation className="w-4 h-4 text-accent" />}
                >
                  Directions
                </Button>
              </div>
            </Reveal>

            {/* Business Contact & Location Cards */}
            <Reveal delayMs={200}>
              <div className="p-6 md:p-8 rounded-xl bg-white border border-[#E8DED0] space-y-5 shadow-lg">
                <div>
                  <h3 className="text-xl font-bold font-display text-[#242321] mb-1">
                    {business.name}
                  </h3>
                  <p className="text-xs text-[#756F67]">
                    {business.tagline}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#E8DED0]">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#B89B72]/20 to-[#A8A39B]/20 border border-[#B89B72]/50 flex items-center justify-center text-[#B89B72] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B89B72] uppercase tracking-wider block font-mono">
                        Location
                      </span>
                      <span className="text-sm text-[#242321] font-medium">
                        {business.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#B89B72]/20 to-[#A8A39B]/20 border border-[#B89B72]/50 flex items-center justify-center text-[#B89B72] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B89B72] uppercase tracking-wider block font-mono">
                        Direct Phone / WhatsApp
                      </span>
                      <a
                        href={telLink()}
                        className="text-sm text-[#242321] hover:text-[#B89B72] font-semibold transition-colors"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#B89B72]/20 to-[#A8A39B]/20 border border-[#B89B72]/50 flex items-center justify-center text-[#B89B72] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#B89B72] uppercase tracking-wider block font-mono">
                        Business Hours
                      </span>
                      <span className="text-sm text-[#242321]">
                        {hoursText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Google Maps Interactive Facade or Embed */}
          <div className="lg:col-span-6 flex flex-col gap-4 order-2">
            <Reveal delayMs={150}>
              <div className="rounded-xl overflow-hidden border border-[#E8DED0] bg-white shadow-lg">
                {isEmbedAvailable ? (
                  <div className="relative aspect-[4/3] w-full bg-[#F5F1EA]">
                    {!mapLoaded && (
                      <button
                        onClick={() => setMapLoaded(true)}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#E8DED0] hover:bg-[#D4C4B0] text-[#242321] transition-colors p-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89B72]"
                        aria-label="Load interactive Google Map"
                      >
                        <MapPin className="w-8 h-8 text-[#B89B72] mb-2" />
                        <span className="font-bold text-sm">Load Google Map</span>
                        <span className="text-xs text-[#756F67] mt-1">
                          Click to view interactive map for Nishatabad workshop
                        </span>
                      </button>
                    )}
                    {mapLoaded && (
                      <iframe
                        src={business.mapEmbedUrl as string}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mashallah Aluminum & Glass House Location"
                        className="w-full h-full min-h-[340px]"
                      />
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-[#E8DED0] text-center">
                    <div className="text-[#756F67]">
                      <MapPin className="w-6 h-6 text-[#B89B72] mx-auto mb-2" />
                      <p className="font-medium">Location Map</p>
                      <p className="text-xs text-[#756F67] mt-1">Near Total Pump, Nishatabad, Faisalabad</p>
                    </div>
                  </div>
                )}

                {/* Map Footer Strip with Fallback Link */}
                <div className="p-4 bg-[#E8DED0] border-t border-[#D4C4B0] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#242321]">
                    <MapPin className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span>Near Total Pump, Nishatabad</span>
                  </div>

                  <a
                    href={dirUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B89B72] hover:text-[#A8A39B] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
