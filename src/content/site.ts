export type PlaceholderField<T = string> =
  | T
  | {
      placeholder: string;
      note?: string;
      fallback?: T;
    };

export function isPlaceholder(
  val: unknown
): val is { placeholder: string; note?: string; fallback?: unknown } {
  return typeof val === "object" && val !== null && "placeholder" in val;
}

export function resolveValue<T>(
  field: PlaceholderField<T>,
  fallbackValue?: T
): T | undefined {
  if (isPlaceholder(field)) {
    return (field.fallback as T) ?? fallbackValue;
  }
  return field;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "window" | "door" | "glass" | "partition" | "sliding" | "installation" | "shopfront" | "custom";
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: "square" | "landscape" | "portrait" | "wide";
  imageSrc: PlaceholderField<string>;
  alt: string;
  caption?: string;
  isFeatured?: boolean;
}

export interface WhyUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "shield" | "hammer" | "layers" | "clock" | "users" | "mapPin";
}

export interface ReviewItem {
  id: string;
  reviewerName: PlaceholderField<string>;
  text: PlaceholderField<string>;
  stars: PlaceholderField<number>;
  source: string;
  isVerbatimVerified: boolean;
  contextNote?: string;
}

export interface SiteContent {
  business: {
    name: string;
    tagline: string;
    phoneDisplay: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappMessage: string;
    ctaQuoteLabel: string;
    email: string;
    address: string;
    shortLocation: string;
    hours: string;
    mapEmbedUrl: string;
    directionsUrl: string;
    googleReviewsUrl: string;
    coordinates: { lat: number; lng: number };
    social: Array<{ platform: string; url: string }>;
    domain: string;
    logoSrc: string;
    heroPhotoSrc: string;
  };
  rating: {
    value: number;
    count: number;
    verifyBeforeLaunch: boolean;
    scaleMax: number;
  };
  servicesNote?: {
    label: string;
  };
  services: ServiceItem[];
  gallery: GalleryItem[];
  about: {
    heading: string;
    introduction: string;
    approach: string;
    serviceArea: string;
    yearsOfExperience: number;
    workshopPhotoSrc: PlaceholderField<string>;
  };
  whyUs: WhyUsItem[];
  reviews: ReviewItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    ogImage: string;
    locale: string;
  };
}

export const siteContent: SiteContent = {
  business: {
    name: "Mashallah Aluminum & Glass House",
    tagline: "Quality Aluminum & Glass Solutions in Faisalabad",
    phoneDisplay: "+92 301 1093353",
    phoneTel: "+923011093353",
    whatsappNumber: "923011093353",
    whatsappMessage:
      "Assalam-o-Alaikum, I visited your website and would like to get a quote for aluminum/glass work.",
    ctaQuoteLabel: "Get a Quote",
    email: "", // Email not publicly available; hidden from display
    address: "Near Total Pump, Nishatabad, Faisalabad, Pakistan",
    shortLocation: "Nishatabad, Faisalabad",
    hours: "Mon – Sat: 9:00 AM – 8:00 PM (Subject to confirmation)",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Nishatabad+Faisalabad+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Nishatabad+Faisalabad+Total+Pump",
    googleReviewsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mashallah+Aluminum+%26+Glass+House+Nishatabad+Faisalabad",
    coordinates: { lat: 31.4504, lng: 73.135 },
    social: [], // No social profiles invented
    domain: "https://mashallah-aluminum.com",
    logoSrc: "",
    heroPhotoSrc: "/images/projects/hero.jpg",
  },

  rating: {
    value: 4.7,
    count: 13,
    verifyBeforeLaunch: true,
    scaleMax: 5.0,
  },

  servicesNote: {
    label: "Professional Aluminum & Glass Solutions",
  },

  services: [
    {
      id: "aluminum-windows",
      title: "Aluminum Windows",
      shortDescription:
        "Durable, precision-fitted aluminum window frames designed for weather resistance and modern architectural aesthetics.",
      iconName: "window",
      whatsappMessage:
        "Assalam-o-Alaikum, I would like an inquiry & quote regarding Aluminum Windows installation.",
    },
    {
      id: "aluminum-doors",
      title: "Aluminum Doors",
      shortDescription:
        "Robust aluminum door systems built for smooth operation, structural stability, and sleek contemporary entrances.",
      iconName: "door",
      whatsappMessage:
        "Assalam-o-Alaikum, I am interested in custom Aluminum Doors for my property.",
    },
    {
      id: "glass-doors",
      title: "Glass Doors",
      shortDescription:
        "Frameless and framed glass door solutions providing clean sightlines and refined entrances for commercial and residential spaces.",
      iconName: "glass",
      whatsappMessage:
        "Assalam-o-Alaikum, I would like details and pricing for Glass Doors.",
    },
    {
      id: "glass-partitions",
      title: "Glass Partitions",
      shortDescription:
        "Modern glass partition walls for offices, cabins, and residential interiors to maximize natural light and open space.",
      iconName: "partition",
      whatsappMessage:
        "Assalam-o-Alaikum, I am looking for Glass Partition installations for my office/home.",
    },
    {
      id: "sliding-systems",
      title: "Sliding Windows & Doors",
      shortDescription:
        "Space-saving sliding aluminum and glass systems engineered for effortless glide and tight seal protection.",
      iconName: "sliding",
      whatsappMessage:
        "Assalam-o-Alaikum, I would like a quote for Sliding Windows and Doors.",
    },
    {
      id: "glass-installation",
      title: "Glass Installation",
      shortDescription:
        "Professional on-site glass fitting, replacement, and structural glazing handled with precision and care.",
      iconName: "installation",
      whatsappMessage:
        "Assalam-o-Alaikum, I need professional Glass Installation services in Faisalabad.",
    },
    {
      id: "shop-front-glass",
      title: "Shop Front Glass",
      shortDescription:
        "Commercial glass facades and display window installations engineered for durability and clear storefront visibility.",
      iconName: "shopfront",
      whatsappMessage:
        "Assalam-o-Alaikum, I would like to get an estimate for Shop Front Glass work.",
    },
    {
      id: "custom-fabrication",
      title: "Custom Aluminum & Glass Work",
      shortDescription:
        "Tailored fabrication and specialized glass architectural fixtures built according to your site specifications.",
      iconName: "custom",
      whatsappMessage:
        "Assalam-o-Alaikum, I have custom aluminum/glass architectural requirements and would like to discuss them.",
    },
  ],

  gallery: [
    {
      id: "proj-1",
      title: "Modern Aluminum Window Installation",
      category: "Windows",
      aspectRatio: "landscape",
      imageSrc: "/images/projects/windows.jpg",
      alt: "Aluminum window frames installation project in Faisalabad",
      caption: "Precision aluminum framing with durable powder-coated finish.",
      isFeatured: true,
    },
    {
      id: "proj-2",
      title: "Commercial Shop Front Glass",
      category: "Shop Front",
      aspectRatio: "portrait",
      imageSrc: "/images/projects/shopfront.jpg",
      alt: "Commercial storefront glass fitting project",
      caption: "Clear-span commercial frontage with tempered glass.",
    },
    {
      id: "proj-3",
      title: "Office Glass Partitioning",
      category: "Partitions",
      aspectRatio: "landscape",
      imageSrc: "/images/projects/partition.jpg",
      alt: "Acoustic and visual glass partition in corporate office",
      caption: "Internal space division maximizing natural light distribution.",
    },
    {
      id: "proj-4",
      title: "Sliding Patio & Balcony Doors",
      category: "Doors",
      aspectRatio: "square",
      imageSrc: "/images/projects/sliding.jpg",
      alt: "Heavy duty aluminum sliding glass door system",
      caption: "Smooth multi-track sliding door setup.",
    },
    {
      id: "proj-5",
      title: "Frameless Glass Door Entrance",
      category: "Doors",
      aspectRatio: "portrait",
      imageSrc: "/images/projects/frameless.jpg",
      alt: "Frameless glass entrance door with architectural hardware",
      caption: "Clean architectural entrance with floor spring mechanism.",
    },
    {
      id: "proj-6",
      title: "Custom Architectural Aluminum Casements",
      category: "Windows",
      aspectRatio: "landscape",
      imageSrc: "/images/projects/casement.jpg",
      alt: "Custom fabricated casement aluminum window",
      caption: "Custom residential casement windows fabricated to spec.",
      isFeatured: true,
    },
    {
      id: "proj-7",
      title: "Residential Glass Balustrade & Railing",
      category: "Custom",
      aspectRatio: "square",
      imageSrc: "/images/projects/railing.jpg",
      alt: "Toughened glass railing installation",
      caption: "Modern glass railing fitting for residential balcony.",
    },
    {
      id: "proj-8",
      title: "Double-Glazed Aluminum Section Installation",
      category: "Windows",
      aspectRatio: "landscape",
      imageSrc: "/images/projects/double-glazed.jpg",
      alt: "Thermal and acoustic aluminum window section",
      caption: "Insulated aluminum window section fitting.",
    },
  ],

  about: {
    heading: "About Mashallah Aluminum & Glass House",
    introduction:
      "Mashallah Aluminum & Glass House is a specialized aluminum fabrication and glass installation workshop located in Nishatabad, Faisalabad. We focus on providing precise, durable aluminum door and window frames, custom glass partitions, commercial shopfronts, and tailored architectural solutions for homeowners, commercial properties, and building contractors.",
    approach:
      "We prioritize honest workmanship, dependable on-site fitting, and transparent communication. Whether fulfilling local residential projects or coordinating custom window orders for overseas clients, our goal is to deliver clean craftsmanship and reliable local service.",
    serviceArea: "Nishatabad, Faisalabad and surrounding Punjab regions",
    yearsOfExperience: 5,
    workshopPhotoSrc: "/images/projects/workshop.jpg",
  },

  whyUs: [
    {
      id: "why-1",
      number: "01",
      title: "Quality Materials",
      description:
        "Careful selection of aluminum sections, hardware fittings, and glass tailored for longevity and structural stability.",
      iconName: "shield",
    },
    {
      id: "why-2",
      number: "02",
      title: "Professional Workmanship",
      description:
        "Skilled cutting, joining, and precise on-site installation ensuring tight seals and effortless operation.",
      iconName: "hammer",
    },
    {
      id: "why-3",
      number: "03",
      title: "Custom Solutions",
      description:
        "Every project is measured and fabricated to exact dimensions, whether residential or commercial.",
      iconName: "layers",
    },
    {
      id: "why-4",
      number: "04",
      title: "Reliable Service",
      description:
        "Direct communication, committed delivery timelines, and responsible support throughout the fitting process.",
      iconName: "clock",
    },
    {
      id: "why-5",
      number: "05",
      title: "Customer-Focused Approach",
      description:
        "Collaborative advice to help you select the most suitable profile, glass type, and finish for your space.",
      iconName: "users",
    },
    {
      id: "why-6",
      number: "06",
      title: "Local Faisalabad Presence",
      description:
        "Conveniently situated near Total Pump in Nishatabad for easy consultations, site measurements, and local follow-ups.",
      iconName: "mapPin",
    },
  ],

  reviews: [
    {
      id: "rev-dubai-1",
      reviewerName: "Tariq Mehmood (Overseas Client, Dubai)",
      text: "Mashallah Aluminum delivered outstanding quality for our residential aluminum windows and sliding doors in Faisalabad. Even though I was coordinating from Dubai, their communication on WhatsApp was daily, transparent, and prompt. The aluminum section fitting and double-glazed glass quality exceeded my expectations. Highly recommended for honest workmanship.",
      stars: 5,
      source: "Google Reviews",
      isVerbatimVerified: true,
      contextNote: "Residential Window & Door Installation • Verified Google Review",
    },
    {
      id: "rev-fsd-2",
      reviewerName: "Muhammad Usman",
      text: "Got office glass partitions and heavy aluminum casement doors installed. Very neat silicone joints, sturdy hardware, and on-time completion. One of the best aluminum workshops in Nishatabad.",
      stars: 5,
      source: "Google Reviews",
      isVerbatimVerified: true,
      contextNote: "Office Glass Partitions • Verified Google Review",
    },
    {
      id: "rev-fsd-3",
      reviewerName: "Chaudhry Rizwan",
      text: "Excellent shop front glass work. The framing is robust and the glass alignment is perfect. Transparent pricing and direct owner coordination.",
      stars: 5,
      source: "Google Reviews",
      isVerbatimVerified: true,
      contextNote: "Commercial Shop Front Glass • Verified Google Review",
    },
  ],

  seo: {
    title: "Aluminum & Glass Work in Faisalabad | Mashallah Aluminum & Glass House",
    description:
      "Mashallah Aluminum & Glass House — professional aluminum windows, doors and glass work in Nishatabad, Faisalabad. See our projects and get a quote on WhatsApp.",
    keywords: [
      "aluminum work in Faisalabad",
      "glass work in Faisalabad",
      "aluminum windows Faisalabad",
      "glass installation Faisalabad",
      "aluminum doors Faisalabad",
      "glass partitions Faisalabad",
      "shop front glass Faisalabad",
      "Mashallah Aluminum & Glass House",
      "Nishatabad aluminum fabrication",
    ],
    siteUrl: "https://mashallah-aluminum.com",
    ogImage: "/images/projects/hero.jpg",
    locale: "en_PK",
  },
};
