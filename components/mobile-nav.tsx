"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="flex h-dvh flex-col items-center justify-center gap-8 border-none"
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-8 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-sans text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}
