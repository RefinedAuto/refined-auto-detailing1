import { Plus } from "lucide-react";

/**
 * Native <details>/<summary> accordion — keyboard and screen-reader support
 * come for free, and the answers stay in the HTML for search engines.
 */
export default function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.q} className="group glass rounded-xl open:border-gold-500/30">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-white group-open:text-gold-500 [&::-webkit-details-marker]:hidden">
            {faq.q}
            <Plus
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="px-5 pb-5 text-white/70 text-sm leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
