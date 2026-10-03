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
  // Never show placeholders in production or on public-facing builds
  // Return children if provided, otherwise return null
  if (variant === "badge" || variant === "inline") {
    if (children) {
      return <>{children}</>;
    }
    // Never show placeholder badge on public website
    return null;
  }

  // Block variant (for missing images, maps, etc.)
  // Never show placeholder blocks on public website
  if (children) {
    return <>{children}</>;
  }
  return null;
}

