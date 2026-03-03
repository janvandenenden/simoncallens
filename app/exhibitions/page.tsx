import type { Metadata } from "next";
import { exhibitions } from "@/content/data";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = {
  title: "Exhibitions",
  description: "Exhibitions by Simon Callens.",
};

export default function ExhibitionsPage() {
  if (exhibitions.length === 0) {
    return (
      <PageContainer className="flex min-h-[40vh] items-center justify-center">
        <p className="text-muted-foreground">To be announced.</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1 className="font-sans text-2xl font-bold sm:text-3xl">Exhibitions</h1>
      <ul className="mt-8 space-y-6">
        {exhibitions.map((exhibition, i) => (
          <li key={i}>
            <h2 className="font-sans font-medium">{exhibition.title}</h2>
            <p className="text-sm text-muted-foreground">
              {exhibition.venue}, {exhibition.location} — {exhibition.year}
            </p>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
