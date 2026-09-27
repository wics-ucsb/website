import Image from 'next/image';
import { heroContent } from '../data/content';
import Carousel from './Carousel';

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
    <section className="relative w-full h-[85vh] bg-[#dccce1] flex flex-col overflow-hidden">
      <Carousel slides={slides} />
      <div>
        <h1 className="text-3xl p-10">
            Women in Computer Science at UC Santa Barbara — empowering everyone in tech regardless of gender, ability, skill level, or major.
        </h1>
      </div>
    </section>
  );
}