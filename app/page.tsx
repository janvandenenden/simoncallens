import { works } from "@/content/data";
import { PageContainer } from "@/components/page-container";
import { WorkCard } from "@/components/work-card";

export default function HomePage() {
  const [featured, ...rest] = works;

  return (
    <PageContainer>
      <WorkCard work={featured} featured />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </PageContainer>
  );
}
