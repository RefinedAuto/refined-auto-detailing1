import { Star, ExternalLink } from "lucide-react";
import { COMPANY } from "@/lib/utils";

/**
 * Links to the real reviews on Google (and Yelp once its URL is set) rather
 * than copying review text onto the site — the rating and count come straight
 * from the Google Business Profile.
 */
export default function Reviews() {
  const { google, yelpUrl } = COMPANY;
  return (
    <section aria-labelledby="reviews-heading" className="section-padding bg-dark-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto glass border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">Client Reviews</p>
          <h2 id="reviews-heading" className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Rated <span className="text-gradient-gold">{google.rating} Stars</span> on Google
          </h2>
          <div className="flex justify-center gap-1 mb-4" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-gold-500 text-gold-500" />
            ))}
          </div>
          <p className="text-white/70 text-lg mb-8">
            {google.rating} out of 5 from {google.reviewCount} Google reviews. Clients most often mention our
            attention to detail and interior detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all"
            >
              Read Our Google Reviews <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {yelpUrl && (
              <a
                href={yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-gold-500/30 text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                See Us on Yelp <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
