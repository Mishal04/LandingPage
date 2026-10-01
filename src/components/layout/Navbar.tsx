"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { siteContent, resolveValue } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
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

  const quoteLabel =
    resolveValue(siteContent.business.ctaQuoteLabel, "Get a Quote") || "Get a Quote";

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-md py-2.5 border-b border-charcoal-border"
            : "bg-charcoal py-4 border-b border-charcoal-border/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark / Logo */}
          <Link
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-offwhite group-hover:text-accent-light transition-colors">
                MASHALLAH
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-accent/20 text-accent font-semibold">
                ALUMINUM
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-sans font-medium text-warmgray-light tracking-wide">
                & Glass House • Faisalabad
              </span>
              <Placeholder
                label="OFFICIAL LOGO REQUIRED"
                variant="badge"
                className="hidden xl:inline-flex py-0 px-1 text-[9px]"
              />
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
                      ? "text-accent font-semibold"
                      : "text-offwhite/80 hover:text-offwhite hover:bg-charcoal-100"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-accent rounded-full animate-fade-in" />
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
              className="hidden sm:inline-flex"
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
              className="md:hidden p-2 rounded-md bg-charcoal-100 text-offwhite hover:bg-charcoal-50 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
