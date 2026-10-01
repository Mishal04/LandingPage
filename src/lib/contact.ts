import { siteContent, resolveValue } from "@/content/site";

export function whatsappLink(customMessage?: string): string {
  const number = siteContent.business.whatsappNumber;
  const message = customMessage || siteContent.business.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${siteContent.business.phoneTel}`;
}

export function directionsLink(): string {
  return (
    resolveValue(
      siteContent.business.directionsUrl,
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        siteContent.business.name + " " + siteContent.business.address
      )}`
    ) || "#"
  );
}

export function googleReviewsLink(): string {
  return (
    resolveValue(
      siteContent.business.googleReviewsUrl,
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        siteContent.business.name + " " + siteContent.business.address
      )}`
    ) || "#"
  );
}

export type ConversionChannel =
  | "whatsapp"
  | "phone"
  | "directions"
  | "reviews"
  | "email"
  | "nav_cta"
  | "hero_cta"
  | "floating_whatsapp"
  | "service_quote";

/**
 * Analytics tracking stub
 */
export function trackClick(
  channel: ConversionChannel,
  details?: Record<string, unknown>
): void {
  if (process.env.NODE_ENV === "development") {
    // Helpful dev logging
    // eslint-disable-next-line no-console
    console.debug(`[Analytics Click Tracked] Channel: ${channel}`, details || {});
  }
}
