import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type TeamMember = {
  name: string
  role: string
  image?: string
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle className="text-base">{member.name}</CardTitle>
        <p className="text-xs text-muted-foreground">{member.role}</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative h-40 w-full overflow-hidden rounded-md border bg-muted/40">
          <Image
            src={member.image || "/placeholder.svg?height=160&width=320&query=portrait%20avatar"}
            alt={`${member.name} headshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </CardContent>
    </Card>
  )
}
