"use client";
import { useState } from "react";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Users, Code, Rocket } from "lucide-react";

const whyJoinTiles = [
  {
    icon: Users,
    title: "Community",
    description: "Connect with women in tech at UCSB through mentorship, socials, and study groups.",
  },
  {
    icon: Code,
    title: "Skill Building",
    description: "Workshops, tech talks, and hands-on projects to grow your technical skills.",
  },
  {
    icon: Rocket,
    title: "Career Launch",
    description: "Resume reviews, mock interviews, and connections to internships and full-time roles.",
  },
];

export default function HomePage() {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Mission Section */}
      <section className="w-full py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto text-left">
          <h1 className="text-center font-display font-bold text-4xl mb-10 text-[#334c96]">
            Mission
          </h1>
          <p className="text-xl text-[#6e4479]">
            We at WiCS UCSB aim to bridge gender and inclusivity gaps in the tech industry by creating a thriving community that fosters collaboration, growth, and mutual support among all members.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-16 px-6 bg-[#f7f5f9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl mb-10 text-[#334c96]">
            Why Join Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyJoinTiles.map((tile, i) => {
              const Icon = tile.icon;
              const isActive = activeTile === i;

              return (
                <div
                  key={tile.title}
                  onClick={() => setActiveTile(isActive ? null : i)}
                  className={`cursor-pointer rounded-2xl p-8 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isActive ? "ring-2 ring-[#334c96] shadow-xl -translate-y-1" : ""
                  }`}
                >
                  <div
                    className={`mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full transition-colors duration-300 ${
                      isActive ? "bg-[#334c96] text-white" : "bg-[#dccce1]/60 text-[#334c96]"
                    }`}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-[#334c96]">
                    {tile.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}