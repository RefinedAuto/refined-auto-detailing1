/**
 * Map of the whole service area — Arlington down to Redmond, Edmonds across to
 * Lake Stevens. This is a service-area business that works at customers' homes,
 * so the map deliberately has no pin: never point it at the Google Business
 * Profile's street address, which is the owner's home and is hidden on Google.
 *
 * OpenStreetMap's embed needs no API key and sets no tracking cookies. The
 * iframe origin must stay allowed in `frame-src` in next.config.ts.
 */
const BBOX = "-122.45,47.64,-121.98,48.23"; // west,south,east,north

export default function ServiceAreaMap() {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <iframe
          title="Map of the Refined Auto Detailing service area in Snohomish and King County, Washington"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik`}
          className="block w-full h-[320px] sm:h-[380px]"
          loading="lazy"
        />
      </div>
      <a
        href="https://www.openstreetmap.org/#map=10/47.94/-122.22"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white/50 hover:text-white/80 text-xs mt-2 underline underline-offset-2"
      >
        View larger map<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
