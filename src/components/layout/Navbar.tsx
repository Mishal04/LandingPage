"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { siteContent } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = ["home", "services", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quoteLabel = siteContent.business.ctaQuoteLabel || "Get a Quote";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-gradient-to-r from-[#242321]/95 to-[#2a2622]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#756F67]"
            : "bg-gradient-to-r from-[#242321] to-[#2a2622] py-4 border-b border-[#756F67]/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark / Logo */}
          <Link
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89B72] rounded-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-base md:text-lg tracking-tight text-[#F5F1EA] group-hover:text-[#B89B72] transition-colors">
                MASHALLAH
              </span>
              <span className="font-display font-black text-base md:text-lg tracking-tight text-[#F5F1EA] group-hover:text-[#B89B72] transition-colors">
                ALUMINUM
              </span>
              <span className="font-display font-black text-base md:text-lg tracking-tight text-[#F5F1EA] group-hover:text-[#B89B72] transition-colors">
                & GLASS HOUSE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-xs lg:text-sm font-medium rounded-md transition-colors relative",
                    isActive
                      ? "text-[#B89B72] font-semibold"
                      : "text-[#F5F1EA]/70 hover:text-[#F5F1EA] hover:bg-[#2a2622]/50"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B89B72] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href={whatsappLink()}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex bg-[#B89B72] hover:bg-[#A88561] text-white"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              {quoteLabel}
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Open main menu"
              className="md:hidden p-2 rounded-md bg-[#2a2622] text-[#F5F1EA] hover:bg-[#342f2a] hover:text-[#B89B72] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89B72]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
