export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string; // "YYYY-MM-DD"
  startTime: string; // "18:00" (24hr)
  endTime: string; // "20:00"
  location: string;
  flyerUrl?: string; // insta flyer if applicable
}

export const events: CalendarEvent[] = [
  {
    id: "1",
    title: "General Meeting",
    description: "Kickoff meeting for the quarter — intro to WiCS, upcoming events, and how to get involved.",
    date: "2026-9-08",
    startTime: "18:00",
    endTime: "19:00",
    location: "Phelps 1401",
    flyerUrl: "/images/event1.png",
  },
  {
    id: "2",
    title: "Resume Workshop",
    description: "Bring your laptop — we'll review resumes and prep for tech recruiting season.",
    date: "2026-10-15",
    startTime: "17:00",
    endTime: "18:30",
    location: "Girvetz 1004",
    flyerUrl: "/images/event2.png",
  },
];