import Image from "next/image";
import type { Metadata } from "next";
import { aboutText } from "@/content/data";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = {
  title: "About",
  description: "About Simon Callens — designer and maker based in Belgium.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <div className="bg-muted">
          <Image
            src="/simon.jpg"
            alt="Simon Callens"
            width={3543}
            height={4430}
            className="h-auto w-full"
            priority
          />
        </div>
        <div>
          <h1 className="font-sans text-2xl font-bold sm:text-3xl">About</h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed">
            {aboutText.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
