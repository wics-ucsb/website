import { CalendarEvent } from "@/data/events";

// Formats a date+time into the compact UTC format Google Calendar/ICS expects
function formatDateTime(date: string, time: string): string {
  const dt = new Date(`${date}T${time}:00`);
  return dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function getGoogleCalendarUrl(event: CalendarEvent): string {
  const start = formatDateTime(event.date, event.startTime);
  const end = formatDateTime(event.date, event.endTime);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(event: CalendarEvent) {
  const start = formatDateTime(event.date, event.startTime);
  const end = formatDateTime(event.date, event.endTime);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `UID:${event.id}@wicsucsb.org`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}