import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showNumeric?: boolean;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  className,
  showNumeric = false,
}: StarRatingProps) {
  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4 md:w-4.5 md:h-4.5",
    lg: "w-5 h-5 md:w-6 md:h-6",
  }[size];

  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${rating.toFixed(1)} out of ${maxStars} stars`}
    >
      <div className="flex items-center gap-0.5 text-accent" aria-hidden="true">
        {Array.from({ length: maxStars }).map((_, idx) => {
          const fillPercentage = Math.max(0, Math.min(1, rating - idx));
          return (
            <div key={idx} className="relative">
              {/* Background empty star */}
              <Star className={cn(iconSizes, "text-warmgray/40 stroke-current fill-none")} />
              {/* Overlay filled portion */}
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fillPercentage * 100}%` }}
                >
                  <Star
                    className={cn(
                      iconSizes,
                      "text-accent stroke-accent fill-accent"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showNumeric && (
        <span className="ml-1.5 font-bold text-sm tracking-tight text-charcoal dark:text-offwhite">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
