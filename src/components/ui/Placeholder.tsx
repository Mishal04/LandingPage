"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface PlaceholderProps {
  label: string;
  note?: string;
  variant?: "badge" | "block" | "inline";
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide" | "hero";
  children?: React.ReactNode;
}

export function Placeholder({
  label,
  note,
  variant = "badge",
  className,
  aspectRatio = "landscape",
  children,
}: PlaceholderProps) {
  const showInDev = process.env.NODE_ENV !== "production";
  const showForced = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";
  const isVisible = showInDev || showForced;

  if (variant === "badge" || variant === "inline") {
    if (!isVisible && children) {
      return <>{children}</>;
    }
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded border",
          "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
          "select-none transition-colors",
          className
        )}
        title={note || `Pending client supply: ${label}`}
      >
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
        <span>[{label}]</span>
      </span>
    );
  }

  // Block variant (for missing images, maps, etc.)
  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-[4/3] md:aspect-[16/10]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[16/10] md:aspect-[21/9] min-h-[420px] md:min-h-[560px]",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative w-full rounded-md border-2 border-dashed border-warmgray/40 bg-neutral-900/90 text-neutral-300 flex flex-col items-center justify-center p-6 text-center overflow-hidden select-none",
        aspectClasses,
        className
      )}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {/* Background blueprint subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-md flex flex-col items-center gap-2.5 px-4">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
          <AlertCircle className="w-5 h-5" />
        </div>
        <p className="font-mono text-xs md:text-sm font-semibold tracking-wide uppercase text-amber-300">
          [{label}]
        </p>
        {note && (
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            {note}
          </p>
        )}
        {children && <div className="mt-2 text-xs text-neutral-300">{children}</div>}
      </div>
    </div>
  );
}
