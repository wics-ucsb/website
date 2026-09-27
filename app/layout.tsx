import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "WiCS UCSB Website",
  description: "Built with Next.js 15, Tailwind v3, TypeScript",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full w-full bg-[#dccce1]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
