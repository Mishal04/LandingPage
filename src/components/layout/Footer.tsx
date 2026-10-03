import React from "react";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { siteContent } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/contact";

export function Footer() {
  const { business } = siteContent;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects & Gallery", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Contact & Location", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#242321] to-[#1f1c1a] text-[#E8DED0] border-t border-[#756F67] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#756F67]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl tracking-tight text-[#F5F1EA]">
                  MASHALLAH
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#B89B72]/20 text-[#B89B72] font-semibold border border-[#B89B72]/50">
                  ALUMINUM
                </span>
              </div>
              <p className="text-xs text-[#A8A39B] mt-0.5 font-medium">
                & Glass House • Faisalabad
              </p>
            </div>

            <p className="text-sm text-[#E8DED0] leading-relaxed max-w-sm">
              Specialized fabrication and on-site fitting of durable aluminum windows, robust doors, office glass partitions, and shopfront glazing in Nishatabad, Faisalabad.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#B89B72] text-white hover:bg-[#A88561] transition-colors text-xs font-semibold border border-[#B89B72] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={telLink()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#2a2622] text-[#E8DED0] hover:bg-[#342f2a] transition-colors text-xs font-medium border border-[#756F67]"
              >
                <Phone className="w-4 h-4 text-[#B89B72]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#F5F1EA]">
              Quick Navigation
            </h3>
            <div className="w-8 h-0.5 bg-[#B89B72] mb-2" />
            <ul className="flex flex-col gap-2.5 text-sm text-[#A8A39B]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#B89B72] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#F5F1EA]">
              Contact & Location
            </h3>
            <div className="w-8 h-0.5 bg-[#B89B72] mb-2" />
            <ul className="flex flex-col gap-3 text-sm text-[#E8DED0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89B72] flex-shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89B72] flex-shrink-0" />
                <a
                  href={telLink()}
                  className="hover:text-[#B89B72] transition-colors font-medium"
                >
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A39B]">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">Nishatabad, Faisalabad, Punjab, PK</span>
            <Link
              href="#home"
              aria-label="Back to top"
              className="p-2 rounded bg-[#2a2622] hover:bg-[#342f2a] text-[#A8A39B] hover:text-[#B89B72] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
