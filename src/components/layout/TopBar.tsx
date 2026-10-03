import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { siteContent } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/contact";

export function TopBar() {
  const { business } = siteContent;

  return (
    <div className="bg-gradient-to-r from-[#242321] to-[#2a2622] text-[#F5F1EA] border-b border-[#756F67] text-xs min-h-[36px] py-1.5 px-4 sm:px-6 lg:px-8 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile View: Quick Call and WhatsApp Action buttons only */}
        <div className="flex sm:hidden w-full items-center justify-between gap-3">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#2a2622] hover:bg-[#342f2a] text-[#F5F1EA] transition-colors active:scale-95 font-medium"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#B89B72]" />
            <span>Call: {business.phoneDisplay}</span>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#B89B72]/20 hover:bg-[#B89B72]/30 text-[#B89B72] font-semibold transition-colors active:scale-95 border border-[#B89B72]/50"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Desktop View: Tagline on left, Contact Details on right */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-sans text-[#F5F1EA]/80 font-normal">
            {business.tagline}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <a
            href={telLink()}
            className="inline-flex items-center gap-1.5 hover:text-[#B89B72] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#B89B72] flex-shrink-0" />
            <span>{business.phoneDisplay}</span>
          </a>

          <span className="text-[#756F67]">|</span>

          <span className="inline-flex items-center gap-1.5 text-[#F5F1EA]/80">
            <MapPin className="w-3.5 h-3.5 text-[#B89B72] flex-shrink-0" />
            <span>{business.shortLocation}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
