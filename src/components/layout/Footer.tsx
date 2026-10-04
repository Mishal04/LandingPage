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
    <footer className="bg-gradient-to-br from-[#292E25] to-[#1f1c1a] text-[#EBE7DE] border-t border-[#766F63] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#766F63]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl tracking-tight text-[#F3EFE6]">
                  MASHALLAH
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#A4865A]/20 text-[#A4865A] font-semibold border border-[#A4865A]/50">
                  ALUMINUM
                </span>
              </div>
              <p className="text-xs text-[#9C9A91] mt-0.5 font-medium">
                & Glass House • Faisalabad
              </p>
            </div>

            <p className="text-sm text-[#EBE7DE] leading-relaxed max-w-sm">
              Specialized fabrication and on-site fitting of durable aluminum windows, robust doors, office glass partitions, and shopfront glazing in Nishatabad, Faisalabad.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#A4865A] text-white hover:bg-[#9C8A52] transition-colors text-xs font-semibold border border-[#A4865A] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={telLink()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#363530] text-[#EBE7DE] hover:bg-[#3E3A33] transition-colors text-xs font-medium border border-[#766F63]"
              >
                <Phone className="w-4 h-4 text-[#A4865A]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#F3EFE6]">
              Quick Navigation
            </h3>
            <div className="w-8 h-0.5 bg-[#A4865A] mb-2" />
            <ul className="flex flex-col gap-2.5 text-sm text-[#9C9A91]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A4865A] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#F3EFE6]">
              Contact & Location
            </h3>
            <div className="w-8 h-0.5 bg-[#A4865A] mb-2" />
            <ul className="flex flex-col gap-3 text-sm text-[#EBE7DE]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A4865A] flex-shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A4865A] flex-shrink-0" />
                <a
                  href={telLink()}
                  className="hover:text-[#A4865A] transition-colors font-medium"
                >
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C9A91]">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono">Nishatabad, Faisalabad, Punjab, PK</span>
            <Link
              href="#home"
              aria-label="Back to top"
              className="p-2 rounded bg-[#363530] hover:bg-[#3E3A33] text-[#9C9A91] hover:text-[#A4865A] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
