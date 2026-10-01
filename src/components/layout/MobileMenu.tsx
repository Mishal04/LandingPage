"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, MessageCircle } from "lucide-react";
import { siteContent, resolveValue } from "@/content/site";
import { telLink, whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  activeSection,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        } else if (e.key === "Tab" && menuRef.current) {
          const focusable = menuRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quoteLabel =
    resolveValue(siteContent.business.ctaQuoteLabel, "Get a Quote") || "Get a Quote";

  return (
    <div
      id="mobile-menu-drawer"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-charcoal-dark/95 backdrop-blur-md flex flex-col justify-between p-6 sm:hidden animate-fade-in text-offwhite"
    >
      {/* Top Header in Menu */}
      <div className="flex items-center justify-between border-b border-charcoal-border pb-4">
        <div>
          <span className="font-display font-bold text-lg text-offwhite tracking-tight">
            Mashallah Aluminum
          </span>
          <p className="text-[11px] text-warmgray tracking-wide uppercase">
            & Glass House • Faisalabad
          </p>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-full bg-charcoal-100 text-offwhite hover:bg-accent hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 my-auto py-6">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`py-3 px-4 rounded-md text-lg font-medium transition-colors ${
                isActive
                  ? "bg-accent/15 text-accent font-semibold"
                  : "text-offwhite/90 hover:bg-charcoal-100 hover:text-offwhite"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Action Conversion CTAs */}
      <div className="flex flex-col gap-3 pt-4 border-t border-charcoal-border">
        <Button
          href={whatsappLink()}
          variant="primary"
          size="lg"
          className="w-full"
          leftIcon={<MessageCircle className="w-5 h-5" />}
        >
          {quoteLabel}
        </Button>

        <Button
          href={telLink()}
          variant="secondary"
          size="md"
          className="w-full"
          leftIcon={<Phone className="w-4 h-4 text-accent" />}
        >
          Call: {siteContent.business.phoneDisplay}
        </Button>
      </div>
    </div>
  );
}
