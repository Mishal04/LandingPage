"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { siteContent, isPlaceholder, resolveValue } from "@/content/site";
import { telLink, whatsappLink, directionsLink } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { business } = siteContent;
  const [mapLoaded, setMapLoaded] = useState(true);

  const hoursText = resolveValue(
    business.hours,
    "Mon – Sat: 9:00 AM – 8:00 PM (Subject to confirmation)"
  );
  const dirUrl = directionsLink();
  const isEmbedAvailable =
    !isPlaceholder(business.mapEmbedUrl) && business.mapEmbedUrl.length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-charcoal text-offwhite scroll-mt-16 border-t border-charcoal-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            theme="dark"
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
              <div className="p-6 md:p-8 rounded-xl bg-charcoal-200 border border-charcoal-border space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-display text-offwhite mb-1">
                    {business.name}
                  </h3>
                  <p className="text-xs text-warmgray-light">
                    {business.tagline}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-charcoal-border">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-charcoal-100 border border-charcoal-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-warmgray uppercase tracking-wider block font-mono">
                        Location
                      </span>
                      <span className="text-sm text-offwhite font-medium">
                        {business.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-charcoal-100 border border-charcoal-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-warmgray uppercase tracking-wider block font-mono">
                        Direct Phone / WhatsApp
                      </span>
                      <a
                        href={telLink()}
                        className="text-sm text-offwhite hover:text-accent font-semibold transition-colors"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-charcoal-100 border border-charcoal-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-warmgray uppercase tracking-wider block font-mono">
                        Email
                      </span>
                      {isPlaceholder(business.email) ? (
                        <Placeholder
                          label={business.email.placeholder}
                          variant="badge"
                        />
                      ) : (
                        <a
                          href={`mailto:${business.email}`}
                          className="text-sm text-offwhite hover:text-accent transition-colors"
                        >
                          {business.email}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-charcoal-100 border border-charcoal-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-warmgray uppercase tracking-wider block font-mono">
                        Business Hours
                      </span>
                      <span className="text-sm text-offwhite">
                        {hoursText}
                      </span>
                      {isPlaceholder(business.hours) && (
                        <div className="mt-1">
                          <Placeholder
                            label="CONFIRM OPERATING HOURS"
                            variant="badge"
                            className="text-[9px] py-0 px-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Google Maps Interactive Facade or Embed */}
          <div className="lg:col-span-6 flex flex-col gap-4 order-2">
            <Reveal delayMs={150}>
              <div className="rounded-xl overflow-hidden border border-charcoal-border bg-charcoal-200 shadow-md">
                {isEmbedAvailable ? (
                  <div className="relative aspect-[4/3] w-full bg-charcoal-dark">
                    {!mapLoaded && (
                      <button
                        onClick={() => setMapLoaded(true)}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-charcoal-200 hover:bg-charcoal-100 text-offwhite transition-colors p-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label="Load interactive Google Map"
                      >
                        <MapPin className="w-8 h-8 text-accent mb-2" />
                        <span className="font-bold text-sm">Load Google Map</span>
                        <span className="text-xs text-warmgray-light mt-1">
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
                  <div className="p-4">
                    <Placeholder
                      label="EXACT GOOGLE MAPS EMBED REQUIRED"
                      variant="block"
                      note="Place client's verified Google Maps embed URL here for an interactive on-page map."
                      aspectRatio="landscape"
                      className="min-h-[280px]"
                    />
                  </div>
                )}

                {/* Map Footer Strip with Fallback Link */}
                <div className="p-4 bg-charcoal-100 border-t border-charcoal-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-offwhite/80">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>Near Total Pump, Nishatabad</span>
                  </div>

                  <a
                    href={dirUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
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
