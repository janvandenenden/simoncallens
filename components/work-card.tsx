"use client";

import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/content/data";
import { cn } from "@/lib/utils";
import { useSwipeToggle } from "@/hooks/use-swipe-toggle";

export function WorkCard({
  work,
  featured = false,
}: {
  work: Work;
  featured?: boolean;
}) {
  const [img1, img2] = work.images;
  const { toggled, onTouchStart, onTouchEnd } = useSwipeToggle();

  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          featured
            ? "aspect-[3/4] sm:aspect-[16/9]"
            : "aspect-[3/4]"
        )}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={img1.src}
          alt={img1.alt}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            "lg:group-hover:opacity-0",
            toggled && "max-lg:opacity-0"
          )}
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 1152px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        {img2 && (
          <Image
            src={img2.src}
            alt={img2.alt}
            fill
            className={cn(
              "object-cover opacity-0 transition-opacity duration-500",
              "lg:group-hover:opacity-100",
              toggled && "max-lg:opacity-100"
            )}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 1152px"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <h2
          className={cn(
            "font-sans font-medium",
            featured ? "text-xl sm:text-2xl" : "text-base"
          )}
        >
          {work.title}
        </h2>
        <span className="text-sm text-muted-foreground">|</span>
        <span className="text-sm text-muted-foreground">{work.year}</span>
      </div>
    </Link>
  );
}
