import { TeamMemberCard } from "@/components/team-member-card"

const team = [
  { name: "Tithi B", role: "Moderator" },
  { name: "Ronita Das", role: "Tech Expertise" },
  { name: "Shrinjayee", role: "Designer" },
  { name: "Sreemoyee Sadhukhan", role: "Web Lead" },
  { name: "Barnita Tarafder", role: "Outreach Lead" },
]

export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-heading" className="container mx-auto px-4 py-16">
      <h2 id="team-heading" className="text-2xl md:text-3xl font-semibold text-pretty">
        Meet the Team
      </h2>
      <p className="mt-2 text-muted-foreground">Volunteers and leaders who kept our chapter vibrant and inclusive.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <TeamMemberCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  )
}
