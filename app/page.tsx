import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Sponsor from "@/components/Sponsor";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div>
        <Hero />
      </div>
      {/* <Sponsor /> */}
      <Footer />
    </main>
  );
}
