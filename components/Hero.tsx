import Image from 'next/image';
import { heroContent } from '../data/content';
import Carousel from './Carousel';
import Link from 'next/link';

export default function Hero() {
  const slides = heroContent.slides.map((src, i) => (
    <div key={i} className="relative w-full h-full">
      <Image
        src={src}
        alt={`${heroContent.title} event ${i + 1}`}
        fill
        priority={i === 0}
        className="object-cover"
      />
    </div>
  ));

  return (
    <section className="relative w-full md:h-[100vh] h-[85vh] bg-[#dccce1] flex flex-col overflow-hidden">
      <Carousel slides={slides} />
      <div>
        <h1 className="md:text-2xl text-md pt-5 p-10">
            Women in Computer Science at UC Santa Barbara — empowering everyone in tech regardless of gender, ability, skill level, or major.
            Check out our latest events{" "}<Link
            href="/events"
            className="font-semibold text-[#334c96] underline underline-offset-4 hover:text-[#6e4479] transition-colors">
            here</Link>!
        </h1>
      </div>
    </section>
  );
}