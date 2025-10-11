import { EventCard } from "@/components/event-card"

const events = [
  {
    id: "evt-1",
    title: "Intro to Web Dev Workshop",
    date: "2025-11-05",
    location: "Community Tech Hub",
    description: "Hands-on session covering HTML, CSS, and JavaScript basics. Perfect for beginners!",
    image: "/workshop-coding-group.jpg",
    link: "#",
    type: "Workshop",
  },
  {
    id: "evt-2",
    title: "Women in Tech Panel",
    date: "2025-12-02",
    location: "City Library Auditorium",
    description: "Hear from inspiring speakers about their journeys, challenges, and career tips.",
    image: "/women-in-tech-panel.jpg",
    link: "#",
    type: "Panel",
  },
  {
    id: "evt-3",
    title: "Open Source Sprint",
    date: "2026-01-20",
    location: "Online",
    description: "Collaborate on beginner-friendly issues and learn how to contribute to open source.",
    image: "/open-source-collaboration.png",
    link: "#",
    type: "Hack Day",
  },
]

export default function EventsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Chapter Events</h1>
        <p className="mt-2 text-muted-foreground">
          Meetups, workshops, and community events. Join us to learn, build, and network.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  )
}
