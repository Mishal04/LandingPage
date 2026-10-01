import React from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { siteContent, isPlaceholder } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/contact";
import { Placeholder } from "@/components/ui/Placeholder";

export function TopBar() {
  const { business } = siteContent;

  return (
    <div className="bg-charcoal text-offwhite/90 border-b border-charcoal-border text-xs min-h-[36px] py-1.5 px-4 sm:px-6 lg:px-8 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile View: Quick Call and WhatsApp Action buttons only */}
        <div className="flex sm:hidden w-full items-center justify-between gap-3">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-charcoal-100 hover:bg-charcoal-50 text-offwhite transition-colors active:scale-95 font-medium"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>Call: {business.phoneDisplay}</span>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-accent/20 hover:bg-accent/30 text-accent font-semibold transition-colors active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Desktop View: Tagline on left, Contact Details on right */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-sans text-offwhite/80 font-normal">
            {business.tagline}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span>{business.phoneDisplay}</span>
          </a>

          <span className="text-charcoal-border">|</span>

          {isPlaceholder(business.email) ? (
            <span className="inline-flex items-center gap-1.5 text-warmgray-light">
              <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <Placeholder label={business.email.placeholder} variant="badge" />
            </span>
          ) : (
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>{business.email}</span>
            </a>
          )}

          <span className="text-charcoal-border">|</span>

          <span className="inline-flex items-center gap-1.5 text-offwhite/80">
            <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span>{business.shortLocation}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
