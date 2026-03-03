import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { works } from "@/content/data";
import { getWorkBySlug } from "@/lib/works";

export const alt = "Simon Callens — Work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const spaceGrotesk = readFile(
  join(process.cwd(), "app/fonts/SpaceGrotesk.ttf")
);
const spaceMono = readFile(
  join(process.cwd(), "app/fonts/SpaceMono-Regular.ttf")
);

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  const [spaceGroteskData, spaceMonoData] = await Promise.all([
    spaceGrotesk,
    spaceMono,
  ]);

  if (!work) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
          }}
        />
      ),
      { ...size }
    );
  }

  const imagePath = join(process.cwd(), "public", work.images[0].src);
  const imageData = await readFile(imagePath);
  const base64 = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  const details = [
    work.materials,
    work.collaboration,
  ]
    .filter(Boolean)
    .join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <img
          src={base64}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "48px",
          }}
        >
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 52,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            {work.title}
          </div>
          <div
            style={{
              fontFamily: "Space Mono",
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
              marginTop: 12,
              display: "flex",
              gap: 8,
            }}
          >
            {work.year} · Simon Callens
          </div>
          {details && (
            <div
              style={{
                fontFamily: "Space Mono",
                fontSize: 16,
                color: "rgba(255,255,255,0.5)",
                marginTop: 8,
              }}
            >
              {details}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskData,
          weight: 700,
          style: "normal",
        },
        {
          name: "Space Mono",
          data: spaceMonoData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
