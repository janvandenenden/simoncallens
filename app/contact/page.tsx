import type { Metadata } from "next";
import { contactBlocks, siteConfig } from "@/content/data";
import { PageContainer } from "@/components/page-container";
import { SpamProtectedEmail } from "@/components/spam-protected-email";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Simon Callens.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <h1 className="font-sans text-2xl font-bold sm:text-3xl">Contact</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {contactBlocks.map((block) => (
          <div key={block.label}>
            <h2 className="font-sans font-medium">{block.label}</h2>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              {block.type === "email" ? (
                <SpamProtectedEmail
                  user={siteConfig.email.user}
                  domain={siteConfig.email.domain}
                />
              ) : (
                block.lines.map((line, i) => <p key={i}>{line}</p>)
              )}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
