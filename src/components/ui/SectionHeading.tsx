import React from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id?: string;
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  id,
  tagline,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-2xl mb-12 md:mb-16", alignClasses, className)}>
      {tagline && (
        <span
          className={cn(
            "text-xs md:text-sm font-mono font-semibold tracking-widest uppercase mb-2.5 inline-block",
            isDark ? "text-accent-light" : "text-accent"
          )}
        >
          {tagline}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
          isDark ? "text-offwhite" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-12 h-1 mt-3 mb-4 rounded-full",
          isDark ? "bg-accent/80" : "bg-accent"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed max-w-xl",
            isDark ? "text-offwhite/70" : "text-warmgray-dark"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
