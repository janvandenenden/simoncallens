import { PageContainer } from "@/components/page-container";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[40vh] items-center justify-center">
      <p className="text-muted-foreground">Page not found.</p>
    </PageContainer>
  );
}
