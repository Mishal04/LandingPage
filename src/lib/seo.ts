import { siteContent, isPlaceholder, resolveValue } from "@/content/site";

export function getLocalBusinessJsonLd() {
  const { business } = siteContent;

  const url = resolveValue(business.domain);
  const email = !isPlaceholder(business.email) ? business.email : undefined;
  const hours = !isPlaceholder(business.hours) ? business.hours : undefined;
  const logo = !isPlaceholder(business.logoSrc) ? business.logoSrc : undefined;
  const heroPhoto = !isPlaceholder(business.heroPhotoSrc) ? business.heroPhotoSrc : undefined;

  const images: string[] = [];
  if (heroPhoto) images.push(heroPhoto);
  if (logo) images.push(logo);

  const coords = !isPlaceholder(business.coordinates)
    ? business.coordinates
    : resolveValue(business.coordinates);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: siteContent.seo.description,
    telephone: business.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Faisalabad",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "City",
      name: "Faisalabad",
    },
    currenciesAccepted: "PKR",
    priceRange: "$$",
  };

  if (url) jsonLd.url = url;
  if (email) jsonLd.email = email;
  if (hours) jsonLd.openingHours = hours;
  if (images.length > 0) jsonLd.image = images;
  if (coords) {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    };
  }

  // Only real social profiles
  if (business.social && business.social.length > 0) {
    jsonLd.sameAs = business.social.map((s) => s.url);
  }

  return jsonLd;
}
