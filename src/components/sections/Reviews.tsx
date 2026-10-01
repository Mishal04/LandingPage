import React from "react";
import { Star, ExternalLink, MessageSquareQuote, MapPin, CheckCircle2 } from "lucide-react";
import { siteContent, isPlaceholder, resolveValue } from "@/content/site";
import { googleReviewsLink, directionsLink } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Reviews() {
  const { rating, reviews, business } = siteContent;
  const reviewsUrl = googleReviewsLink();
  const dirUrl = directionsLink();

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 md:py-28 bg-offwhite text-charcoal scroll-mt-16 border-t border-offwhite-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="reviews-heading"
            tagline="Client Feedback"
            title="Google Reviews & Rating"
            description="Direct customer reviews from Google Maps. We maintain honest feedback and transparent ratings."
          />
        </Reveal>

        {/* Rating Summary Bar & Google Maps Business Profile Card */}
        <Reveal delayMs={100}>
          <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-offwhite-card border border-offwhite-border shadow-md flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-5">
              <div className="text-4xl sm:text-5xl font-display font-black text-charcoal">
                {rating.value.toFixed(1)}
              </div>
              <div>
                <StarRating rating={rating.value} size="md" />
                <p className="text-xs sm:text-sm text-warmgray-dark mt-1 font-semibold">
                  Based on {rating.count} Verified Google Reviews
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#25D366] font-medium mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Verified Customer Ratings</span>
                </div>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-offwhite-border pt-4 md:pt-0 md:pl-8 flex flex-col items-center md:items-start gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span>Google Business Profile</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-warmgray">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Nishatabad, Faisalabad</span>
              </div>

              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-hover transition-colors mt-1"
              >
                <span>Open Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev, index) => {
            const reviewerName =
              resolveValue(rev.reviewerName, "Google Reviewer") || "Google Reviewer";
            const reviewText = resolveValue(rev.text, "") || "";
            const starsValue = resolveValue(rev.stars, 5) ?? 5;

            return (
              <Reveal key={rev.id} delayMs={150 + index * 60}>
                <div className="h-full p-6 md:p-7 rounded-xl bg-offwhite-card border border-offwhite-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 text-charcoal font-black text-sm flex items-center justify-center border border-accent/40">
                          {reviewerName.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-charcoal">
                            {reviewerName}
                          </h4>
                          <p className="text-[11px] text-warmgray mt-0.5">
                            {rev.contextNote || rev.source}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <StarRating rating={starsValue} size="sm" />
                    </div>

                    <div className="relative pl-5 py-1">
                      <MessageSquareQuote className="absolute left-0 top-0 w-4 h-4 text-accent/50" />
                      <p className="text-xs sm:text-sm text-charcoal/90 leading-relaxed font-sans">
                        &ldquo;{reviewText}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-offwhite-border/70 flex items-center justify-between text-[11px] text-warmgray">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                      <span>{rev.source}</span>
                    </span>
                    <span className="font-mono text-accent font-semibold">
                      ★ 5.0 Rating
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Action Button to Google Reviews & Map Location */}
        <Reveal delayMs={250}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={reviewsUrl}
              variant="outline"
              size="md"
              isExternal={true}
              rightIcon={<ExternalLink className="w-4 h-4" />}
            >
              Read All 13 Reviews on Google
            </Button>

            <Button
              href={dirUrl}
              variant="secondary"
              size="md"
              isExternal={true}
              leftIcon={<MapPin className="w-4 h-4 text-accent" />}
            >
              Get Directions on Google Maps
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
