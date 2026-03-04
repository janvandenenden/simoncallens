import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { works } from "@/content/data";
import { getWorkBySlug, getAdjacentWorks } from "@/lib/works";
import { PageContainer } from "@/components/page-container";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};

  const title = `${work.title} by Simon Callens`;
  const details = [work.materials, work.collaboration].filter(Boolean);
  const description =
    work.description ??
    `${work.title} (${work.year}) by Simon Callens.${details.length > 0 ? ` ${details.join(". ")}.` : ""}`;
  return {
    title: work.title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

function WorkImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="bg-muted">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        priority={priority}
      />
    </div>
  );
}

function MetadataBlock({
  work,
  showDetails = false,
}: {
  work: NonNullable<ReturnType<typeof getWorkBySlug>>;
  showDetails?: boolean;
}) {
  return (
    <div className="space-y-4">
      <h1 className="font-sans text-2xl font-bold lg:text-3xl">
        {work.title}
        <span className="ml-3 text-lg font-normal text-muted-foreground lg:text-xl">
          |
        </span>
        <span className="ml-3 text-lg font-normal text-muted-foreground lg:text-xl">
          {work.year}
        </span>
      </h1>
      {work.description && (
        <p className="text-sm leading-relaxed">{work.description}</p>
      )}
      {showDetails && <DetailsBlock work={work} />}
    </div>
  );
}

function DetailsBlock({
  work,
}: {
  work: NonNullable<ReturnType<typeof getWorkBySlug>>;
}) {
  if (!work.materials && !work.collaboration && !work.photoCredit) return null;

  return (
    <div className="space-y-2 pt-4 text-sm text-muted-foreground">
      {work.materials && (
        <p>
          <span className="font-sans font-medium text-foreground">
            Materials
          </span>
          <br />
          {work.materials}
        </p>
      )}
      {work.collaboration && (
        <p>
          <span className="font-sans font-medium text-foreground">
            Collaboration
          </span>
          <br />
          {work.collaboration}
        </p>
      )}
      {work.photoCredit && (
        <p>
          <span className="font-sans font-medium text-foreground">Photo</span>
          <br />
          {work.photoCredit}
        </p>
      )}
    </div>
  );
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const { prev, next } = getAdjacentWorks(slug);
  const images = work.images;
  const count = images.length;

  return (
    <PageContainer className="">
      {/* Mobile layout */}
      <div className="lg:hidden">
        <WorkImage {...images[0]} priority />

        <div className="mt-8">
          <MetadataBlock work={work} showDetails />
        </div>

        {images.slice(1).map((img, i) => (
          <div key={i} className="mt-8">
            <WorkImage {...img} />
          </div>
        ))}
      </div>

      {/* Desktop layout — 12-column offset grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 gap-8">
          {/* Hero image — full width */}
          <div className="col-span-12">
            <WorkImage {...images[0]} priority />
          </div>

          {/* Metadata + Image 2 side-by-side */}
          {count >= 2 && (
            <>
              <div className="col-span-4 self-start">
                <MetadataBlock work={work} showDetails />
              </div>
              <div className="col-span-8">
                <WorkImage {...images[1]} />
              </div>
            </>
          )}

          {/* 3 images: Image 3 full width */}
          {count === 3 && (
            <div className="col-span-12">
              <WorkImage {...images[2]} />
            </div>
          )}

          {/* 4 images: Image 3 offset + Image 4 full */}
          {count === 4 && (
            <>
              <div className="col-span-10 col-start-3">
                <WorkImage {...images[2]} />
              </div>
              <div className="col-span-12">
                <WorkImage {...images[3]} />
              </div>
            </>
          )}

          {/* 5+ images: Image 3 offset, Image 4 + details, remaining full */}
          {count >= 5 && (
            <>
              <div className="col-span-10 col-start-3">
                <WorkImage {...images[2]} />
              </div>

              <div className="col-span-12">
                <WorkImage {...images[3]} />
              </div>

              {images.slice(4).map((img, i) => (
                <div key={i} className="col-span-12">
                  <WorkImage {...img} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Photo credit */}
      {work.photoCredit && (
        <p className="mt-8 text-xs text-muted-foreground">
          Photography: {work.photoCredit}
        </p>
      )}

      {/* Prev/Next navigation */}
      <Separator className="mt-12" />
      <nav className="flex justify-between text-sm mt-12">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="font-sans text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="font-sans text-muted-foreground transition-colors hover:text-foreground"
          >
            {next.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </PageContainer>
  );
}
