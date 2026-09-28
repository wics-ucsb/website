import Footer from "@/components/Footer";

export const revalidate = 300; // regenerate every 5 min

export default async function EventsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen max-w-full">
      <h1 className="text-center font-display font-bold text-4xl mb-5 mt-0 text-[#334c96]">
        Stay updated with WiCS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:text-xl text-lg text-[#6e4479] md:gap-20 gap-10 mb-10">
        <div className="flex flex-col items-center w-[30vh] md:w-[50vh]">
            <img src="/images/wics-mailing-list-qr.png" alt="Mailing List QR" className="p-5"/>
            <a href="https://tinyurl.com/wics-mailing-list" className="underline underline-offset-4 hover:text-[#334c96]">Join our mailing list</a>
        </div>
        <div className="flex flex-col items-center w-[30vh] md:w-[50vh]">
            <img src="/images/wics-new-event-qr.png" alt="New Event QR" className="p-5"/>
            <a href="https://tinyurl.com/wics-new-event" className="underline underline-offset-4 hover:text-[#334c96]">Suggest a New WiCS Event</a>
        </div>
        <div className="flex flex-col items-center w-[30vh] md:w-[50vh]">
            <img src="/images/wics-new-event-qr.png" alt="Sponsor QR" className="p-5"/>
            <a href="https://tinyurl.com/404" className="underline underline-offset-4 hover:text-[#334c96]">Sponsor WiCS</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}