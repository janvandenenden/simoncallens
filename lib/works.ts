import { works } from "@/content/data";

export function getWorkBySlug(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function getAdjacentWorks(slug: string) {
  const index = works.findIndex((w) => w.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };

  const prev = index > 0 ? works[index - 1] : undefined;
  const next = index < works.length - 1 ? works[index + 1] : undefined;

  return { prev, next };
}
