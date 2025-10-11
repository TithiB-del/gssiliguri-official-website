import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </>
  )
}
