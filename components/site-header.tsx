"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href ? "text-foreground" : "text-muted-foreground hover:text-foreground"

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden />
          <span className="font-semibold">GirlScript Siliguri</span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          <Link href="/#about" className={cn("text-sm", isActive("/#about"))}>
            About
          </Link>
          <Link href="/#team" className={cn("text-sm", isActive("/#team"))}>
            Team
          </Link>
          <Link href="/#contact" className={cn("text-sm", isActive("/#contact"))}>
            Contact
          </Link>
          <Link href="/events" className={cn("text-sm", isActive("/events"))}>
            Events
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="bg-primary text-primary-foreground">
            <Link href="https://girlscript.net/" target="_blank" rel="noopener noreferrer">
              Join Chapter
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
