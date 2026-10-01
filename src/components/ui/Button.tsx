import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "min-h-[40px] px-3.5 py-1.5 text-xs tracking-wide uppercase",
    md: "min-h-[46px] px-5 py-2.5 text-sm tracking-wide font-semibold",
    lg: "min-h-[52px] px-7 py-3 text-base tracking-wide font-semibold",
  }[size];

  const variantClasses = {
    // Charcoal text on Accent gold ensures WCAG AA contrast (charcoal #1F2124 on accent #A8834A)
    primary:
      "bg-accent hover:bg-accent-hover text-charcoal shadow-sm hover:shadow focus-visible:ring-accent border border-accent/40 font-bold",
    secondary:
      "bg-charcoal text-offwhite hover:bg-charcoal-200 border border-charcoal-border focus-visible:ring-charcoal",
    outline:
      "bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal/5 focus-visible:ring-charcoal",
    "outline-light":
      "bg-transparent text-offwhite border border-offwhite/30 hover:border-offwhite hover:bg-offwhite/10 focus-visible:ring-offwhite",
    ghost:
      "bg-transparent text-charcoal hover:bg-charcoal/5 focus-visible:ring-charcoal",
  }[variant];

  const content = (
    <>
      {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    const isNativeOrExternal =
      isExternal ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isNativeOrExternal) {
      const openInNewTab = isExternal || href.startsWith("http");
      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className={cn(baseClasses, sizeClasses, variantClasses, className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cn(baseClasses, sizeClasses, variantClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      {...props}
    >
      {content}
    </button>
  );
}
