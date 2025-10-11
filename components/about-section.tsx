export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="container mx-auto px-4 py-16">
      <h2 id="about-heading" className="text-2xl md:text-3xl font-semibold text-pretty">
        About Our Chapter
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <p className="text-muted-foreground">
          Our GirlScript regional chapter is a welcoming community focused on helping beginners get into technology and
          experienced folks level up. We run free events, mentorship circles, and collaborative projects with an
          emphasis on inclusivity and practical learning.
        </p>
        <div className="rounded-lg border p-4">
          <ul className="list-disc pl-5 text-sm leading-relaxed">
            <li>Beginner-friendly workshops and hands-on demos</li>
            <li>Mentorship and interview preparation sessions</li>
            <li>Open-source contribution sprints</li>
            <li>Networking with industry professionals</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
