import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/content/data";
import { MobileNav } from "@/components/mobile-nav";

const navLinks = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="">
      <div className="mx-auto max-w-6xl px-6 my-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-sans text-lg font-bold uppercase tracking-[0.2em]"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile nav */}
          <div className="sm:hidden">
            <MobileNav links={navLinks} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>
    </header>
  );
}
