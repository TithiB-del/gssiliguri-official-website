import { EventCard } from "@/components/event-card"

const events = [
  {
    id: "evt-1",
    title: "HackOdisha",
    date: "2022-09-22",
    location: "NITR, Rourkela",
    description: "Community partner for hackathon organized by NIT Rourkela.",
    image: "/workshop-coding-group.jpg",
    link: "#",
    type: "Hack Day",
  },
  {
    id: "evt-2",
    title: "Hack The League",
    date: "2022-12-10",
    location: "Online",
    description: "Community partner for hackathon organized by Hack The League.",
    image: "/women-in-tech-panel.jpg",
    link: "#",
    type: "Hack Day",
  },
  {
    id: "evt-3",
    title: "Hack This Fall",
    date: "2023-01-29",
    location: "Online",
    description: "Community partner for hackathon organized by Hack This Fall.",
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
