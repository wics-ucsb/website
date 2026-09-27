import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";
// import SuggestEventForm from "@/components/SuggestEventForm";
import { fetchGoogleCalendarEvents } from "@/lib/googleCalendar";

export const revalidate = 300; // regenerate every 5 min

export default async function EventsPage() {
  const events = await fetchGoogleCalendarEvents(); 
  return (
    <main className="flex flex-col min-h-screen max-w-full">
      <h1 className="text-center font-display font-bold text-4xl mb-5 mt-0 text-[#6e4479]">
        Upcoming Events
      </h1>
      <section className="w-full p-6">
        <Calendar events={events} />
      </section>
      <Footer />
    </main>
  );
}