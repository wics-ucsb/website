"use client";
import { useState } from "react";
import React from "react";
import Footer from "@/components/Footer";
import { teamMembers, alumniList } from "@/data/team";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Officers Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl mb-10 text-[#334c96]">
            Meet the Team!
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                {/* Circular image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                  <h3 className="font-semibold text-3xl mb-2 text-[#6e4479]">
                    {member.name}
                  </h3>
                  <div className="flex flex-row  items-center justify-center">
                    <p className="text-[#334c96] text-lg leading-relaxed">
                        {member.position} 
                    </p>
                    <a href={`mailto:${member.email}`}
                    className="inline-flex gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#dccce1]/60 text-[#334c96] hover:bg-[#334c96] hover:text-white transition-colors duration-200">
                        <Mail size={40} />
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
      {/* Alumni Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-left font-display font-bold text-3xl mb-10 text-[#334c96]">
            WiCS Alumni
          </h2>
          <ul className="list-disc">
            {alumniList.map((alumni, index) => (
                <li key={index}>
                  <div className="flex flex-row  items-center justify-center">
                    <p className="text-[#334c96] text-lg leading-relaxed">
                        {alumni.name} 
                    </p>
                    <a href={`mailto:${alumni.email}`}
                    className="inline-flex gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#dccce1]/60 text-[#334c96] hover:bg-[#334c96] hover:text-white transition-colors duration-200">
                        <Mail size={40} />
                    </a>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}