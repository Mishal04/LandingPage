import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteContent } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/contact";

export function TopBar() {
  const { business } = siteContent;

  return (
    <div className="bg-gradient-to-r from-[#292E25] to-[#363530] text-[#F3EFE6] border-b border-[#766F63] text-xs min-h-[36px] py-1.5 px-4 sm:px-6 lg:px-8 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile View: Quick Call and WhatsApp Action buttons only */}
        <div className="flex sm:hidden w-full items-center justify-between gap-3">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#363530] hover:bg-[#3E3A33] text-[#F3EFE6] transition-colors active:scale-95 font-medium"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#A4865A]" />
            <span>Call: {business.phoneDisplay}</span>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#A4865A]/20 hover:bg-[#A4865A]/30 text-[#A4865A] font-semibold transition-colors active:scale-95 border border-[#A4865A]/50"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Desktop View: Tagline on left, Contact Details on right */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-sans text-[#F3EFE6]/80 font-normal">
            {business.tagline}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 hover:text-[#A4865A] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#A4865A] flex-shrink-0" />
            <span>{business.phoneDisplay}</span>
          </a>

          <span className="text-[#766F63]">|</span>

          <span className="inline-flex items-center gap-1.5 text-[#F3EFE6]/80">
            <MapPin className="w-3.5 h-3.5 text-[#A4865A] flex-shrink-0" />
            <span>{business.shortLocation}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
