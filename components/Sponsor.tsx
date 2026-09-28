import Image from "next/image";
import { sponsors } from "@/data/sponsors";

const PLACEHOLDER_COUNT = 10; // 5 columns x 2 rows on desktop

export default function Sponsor() {
  const hasSponsors = sponsors.length > 0;

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl mb-12 text-[#334c96]">
          Our Sponsors
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12 items-center justify-items-center">
          {hasSponsors
            ? sponsors.map((sponsor) => {
                const logo = (
                  <div className="relative w-full h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                );

                return sponsor.url ? (
                <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={sponsor.name}
                    className="w-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200">
                    {logo}
                  </a>
                ) : (
                  <div key={sponsor.name} className="w-full">
                    {logo}
                  </div>
                );
              })
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div key={i} className="w-full h-20 rounded-lg border-2 border-dashed border-[#dccce1] flex items-center justify-center text-sm text-[#6e4479]/60">
                  Logo
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}