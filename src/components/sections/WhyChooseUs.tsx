import React from "react";
import {
  Shield,
  Hammer,
  Layers,
  Clock,
  Users,
  MapPin,
} from "lucide-react";
import { siteContent, WhyUsItem } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  shield: Shield,
  hammer: Hammer,
  layers: Layers,
  clock: Clock,
  users: Users,
  mapPin: MapPin,
};

export function WhyChooseUs() {
  const { whyUs } = siteContent;

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 md:py-28 bg-charcoal text-offwhite scroll-mt-16 border-t border-charcoal-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="why-us-heading"
            theme="dark"
            tagline="Our Standards"
            title="Why Choose Mashallah Aluminum"
            description="Our focus is on dependable fabrication, sturdy aluminum sections, and clean, reliable glass installation."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item: WhyUsItem, index: number) => {
            const IconComponent = iconMap[item.iconName] || Shield;

            return (
              <Reveal key={item.id} delayMs={index * 60}>
                <div className="h-full p-6 rounded-lg bg-charcoal-200 border border-charcoal-border hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-md bg-charcoal-100 border border-charcoal-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-charcoal transition-colors">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="font-mono text-xs text-warmgray font-semibold">
                        {item.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-base font-bold text-offwhite group-hover:text-accent-light transition-colors">
                        {item.title}
                      </h3>
                      {item.needsClientConfirmation && (
                        <Placeholder
                          label="CONFIRM WITH CLIENT"
                          variant="badge"
                          className="text-[9px] py-0 px-1"
                        />
                      )}
                    </div>

                    <p className="text-sm text-offwhite/75 leading-relaxed font-sans">
                      {item.description}
                    </p>
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
