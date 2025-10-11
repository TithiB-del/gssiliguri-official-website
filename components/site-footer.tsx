import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold tracking-wide">GirlScript Siliguri</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Empowering women and non-binary folks in tech through community, learning, and mentorship.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="mailto:chapter@example.org" className="hover:underline">
                sgirlscript@gmail.com
              </a>
            </li>
            <li>Siliguri, West Bengal, India</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Social</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="https://x.com/gsiliguri" className="hover:underline">
                Twitter/X
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/girlscriptsiliguri/" className="hover:underline">
                Instagram
              </Link>
              <li>
              <Link href="https://www.facebook.com/GirlscriptSiliguri/" className="hover:underline">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GirlScript Siliguri
      </div>
    </footer>
  )
}
