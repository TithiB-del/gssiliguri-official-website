import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section aria-label="Hero" className="relative border-b bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            GirlScript Siliguri
          </span>
          <h1 className="mt-4 text-pretty text-4xl font-semibold md:text-5xl">
            Learn, build, and lead together in tech
          </h1>
          <p className="mt-3 text-muted-foreground">
            We host workshops, talks, and community sprints to help you start and grow your tech career.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
