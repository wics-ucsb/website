import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCS UCSB Website",
  description: "Built with Next.js 15, Tailwind v3, TypeScript",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
