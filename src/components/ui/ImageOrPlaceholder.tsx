import React from "react";
import Image from "next/image";
import { PlaceholderField, isPlaceholder, resolveValue } from "@/content/site";
import { Placeholder } from "@/components/ui/Placeholder";
import { cn } from "@/lib/cn";

interface ImageOrPlaceholderProps {
  src: PlaceholderField<string>;
  alt: string;
  placeholderLabel: string;
  placeholderNote?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide" | "hero";
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function ImageOrPlaceholder({
  src,
  alt,
  placeholderLabel,
  placeholderNote,
  aspectRatio = "landscape",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = true,
  width,
  height,
}: ImageOrPlaceholderProps) {
  const actualSrc = resolveValue(src);

  if (isPlaceholder(src) || !actualSrc) {
    return (
      <Placeholder
        label={placeholderLabel}
        note={placeholderNote || (isPlaceholder(src) ? src.note : undefined)}
        aspectRatio={aspectRatio}
        variant="block"
        className={className}
      />
    );
  }

  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-[4/3] md:aspect-[16/10]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    hero: "aspect-[16/10] md:aspect-[21/9] min-h-[420px] md:min-h-[560px]",
  }[aspectRatio];

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden w-full", aspectClasses, className)}>
        <Image
          src={actualSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={actualSrc}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
