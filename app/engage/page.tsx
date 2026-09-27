import Footer from "@/components/Footer";

export const revalidate = 300; // regenerate every 5 min

export default async function EventsPage() {
  return (
    <main className="flex flex-col min-h-screen max-w-full">
      <h1 className="text-center font-display font-bold text-4xl mb-5 mt-0 text-[#334c96]">
        Stay updated with WiCS
      </h1>
      <div className="grid grid-cols-2 text-center md:text-2xl text-xl text-[#6e4479] mb-2">
        <div className="aspect-square flex flex-col">
            <img src="/images/qr.png" alt="Mailing List QR" />
            <h1 className="">Join our mailing list</h1>
        </div>
        <div className="aspect-square flex flex-col">
            <img src="/images/qr.png" alt="Mailing List QR" />
            <h1 className="">Join our mailing list</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}