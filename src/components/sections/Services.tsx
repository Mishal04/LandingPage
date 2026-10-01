import React from "react";
import {
  AppWindow,
  DoorClosed,
  Columns,
  Maximize2,
  Sliders,
  Wrench,
  Store,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { siteContent, ServiceItem } from "@/content/site";
import { whatsappLink } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  window: AppWindow,
  door: DoorClosed,
  glass: Columns,
  partition: Maximize2,
  sliding: Sliders,
  installation: Wrench,
  shopfront: Store,
  custom: Sparkles,
};

export function Services() {
  const { services, servicesNote } = siteContent;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 bg-offwhite text-charcoal scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-heading"
            tagline="What We Provide"
            title="Aluminum & Glass Services"
            description="Precision-engineered aluminum framing and architectural glass installations designed for homes, offices, and commercial properties in Faisalabad."
          />
        </Reveal>

        {servicesNote.needsClientConfirmation && (
          <Reveal delayMs={100}>
            <div className="flex justify-center -mt-6 mb-10">
              <Placeholder
                label={servicesNote.label}
                variant="badge"
                note="List of services to be reviewed and confirmed with business owner."
              />
            </div>
          </Reveal>
        )}

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3-4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: ServiceItem, index: number) => {
            const IconComponent = iconMap[service.iconName] || AppWindow;
            const waUrl = whatsappLink(service.whatsappMessage);

            return (
              <Reveal key={service.id} delayMs={index * 60}>
                <div className="group h-full flex flex-col justify-between p-6 rounded-lg bg-offwhite-card border border-offwhite-border hover:border-accent/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-md bg-offwhite-muted border border-offwhite-border group-hover:bg-accent/15 group-hover:border-accent/40 flex items-center justify-center text-charcoal group-hover:text-accent transition-colors">
                        <IconComponent className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <span className="text-[11px] font-mono text-warmgray">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-charcoal mb-2.5 group-hover:text-accent-hover transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-warmgray-dark leading-relaxed mb-6 font-sans">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-offwhite-border/60 flex items-center justify-between">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal group-hover:text-accent transition-colors"
                      aria-label={`Get quote for ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-accent" />
                      <span>Inquire on WhatsApp</span>
                    </a>
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
