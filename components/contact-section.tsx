import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="container mx-auto px-4 py-16">
      <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold text-pretty">
        Contact Us
      </h2>
      <p className="mt-2 text-muted-foreground">Reach out for partnerships, volunteering, or general questions.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">We aim to respond within 2–3 business days.</p>
            <Button asChild className="bg-primary text-primary-foreground">
              <a href="mailto:chapter@example.org">Email sgirlscript@gmail.com</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Social</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-5">
              <li>
                <Link href="#" className="hover:underline">
                  Twitter/X
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
