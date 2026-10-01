import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/contact";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-charcoal text-offwhite">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-accent/20 text-accent mb-4">
          404 Error
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-offwhite/75 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Return to our homepage or contact us directly on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <Button href="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Back to Home
          </Button>
          <Button
            href={whatsappLink()}
            variant="secondary"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 text-accent" />}
          >
            Contact on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
