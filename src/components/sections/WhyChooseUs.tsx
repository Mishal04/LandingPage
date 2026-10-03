import React from "react";
import { siteContent, WhyUsItem } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  const { whyUs } = siteContent;

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="bg-offwhite text-charcoal scroll-mt-16"
      style={{
        paddingTop: "5rem",
        paddingBottom: "8rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: sticky title + intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:h-min">
            <Reveal>
              <div style={{ marginBottom: "2rem" }}>
                <h2
                  id="why-us-heading"
                  className="text-3xl md:text-4xl font-medium text-charcoal mb-4"
                  style={{ maxWidth: "15ch", lineHeight: 1.2 }}
                >
                  Why clients choose us
                </h2>
                <p
                  className="text-base text-warmgray leading-relaxed"
                  style={{ maxWidth: "40ch" }}
                >
                  Dependable fabrication, quality materials, and reliable installation.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column: list items */}
          <div className="lg:col-span-8 [&>*:last-child]:border-b-0">
            {whyUs.map((item: WhyUsItem, index: number) => (
              <Reveal key={item.id} delayMs={index * 30}>
                <div
                  className="group py-9 lg:py-12 border-b border-warmgray-light/40 hover:border-accent transition-colors duration-200"
                  style={{
                    paddingTop: index === 0 ? "0" : "2.25rem",
                  }}
                >
                  {/* Row content */}
                  <div className="flex gap-6 lg:gap-8">
                    {/* Number: monospace, muted gold */}
                    <div className="flex-shrink-0">
                      <span className="font-mono text-sm text-warmgray-light group-hover:text-accent transition-colors duration-200">
                        {item.number}
                      </span>
                    </div>

                    {/* Heading + description */}
                    <div className="flex-grow min-w-0">
                      <h3
                        className="text-lg md:text-xl font-medium text-charcoal group-hover:text-accent transition-colors duration-200 mb-2"
                        style={{ lineHeight: 1.3 }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-base text-warmgray leading-relaxed"
                        style={{ maxWidth: "65ch" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
