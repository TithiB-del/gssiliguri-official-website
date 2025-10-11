import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Event = {
  id: string
  title: string
  date: string
  location: string
  description: string
  image: string
  link: string
  type: string
}

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40 w-full border-b bg-muted/40">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={`${event.title} banner`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{event.title}</CardTitle>
          <Badge variant="secondary">{event.type}</Badge>
        </div>
        <p className="text-xs text-muted-foreground">
          {new Date(event.date).toLocaleDateString()} • {event.location}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="sm" className="bg-primary text-primary-foreground">
          <Link href={event.link}>Learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
