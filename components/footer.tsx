import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/content/data";

export function Footer() {
  return (
    <footer className="pb-8 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <Separator />
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
