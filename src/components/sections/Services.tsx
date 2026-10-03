import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteContent, ServiceItem } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Map services to their corresponding project images
const serviceImageMap: Record<string, string> = {
  "aluminum-windows": "/images/projects/windows.jpg",
  "aluminum-doors": "/images/projects/sliding.jpg",
  "glass-doors": "/images/projects/frameless.jpg",
  "glass-partitions": "/images/projects/partition.jpg",
  "sliding-systems": "/images/projects/sliding.jpg",
  "glass-installation": "/images/projects/double-glazed.jpg",
  "shop-front-glass": "/images/projects/shopfront.jpg",
  "custom-fabrication": "/images/projects/casement.jpg",
};

export function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 bg-[#F5F1EA] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-heading"
            tagline="Professional Services"
            title="Our Aluminum & Glass Solutions"
            description="High-quality fabrication and installation services for residential and commercial projects."
          />
        </Reveal>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3-4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: ServiceItem, index: number) => {
            const waUrl = whatsappLink(service.whatsappMessage);
            const imageSrc = serviceImageMap[service.id] || "/images/projects/hero.jpg";

            return (
              <Reveal key={service.id} delayMs={index * 60}>
                <div className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#E8DED0] hover:border-[#B89B72]">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#E8DED0]">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115 group-hover:brightness-125"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-black text-[#B89B72] uppercase tracking-widest">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="w-1 h-8 bg-gradient-to-b from-[#B89B72] to-[#A8A39B] rounded-full"></div>
                      </div>

                      <h3 className="font-bold text-xl text-[#242321] mb-3 group-hover:text-[#B89B72] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#756F67] leading-relaxed mb-5 font-sans">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-5 border-t border-[#E8DED0]">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B89B72] hover:text-[#A8A39B] group/btn transition-all duration-300 hover:gap-3"
                        aria-label={`Get quote for ${service.title} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
