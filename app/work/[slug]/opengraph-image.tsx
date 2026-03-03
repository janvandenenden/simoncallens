import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { works } from "@/content/data";
import { getWorkBySlug } from "@/lib/works";

export const alt = "Simon Callens — Work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
  if (!work) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }} />,
      { ...size }
    );
  }

  const imagePath = join(process.cwd(), "public", work.images[0].src);
  const imageData = await readFile(imagePath);
  const base64 = `data:image/jpeg;base64,${imageData.toString("base64")}`;

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
        {/* Background image */}
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
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "40px 48px",
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {work.title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.75)",
              marginTop: 8,
              display: "flex",
              gap: 12,
            }}
          >
            <span>{work.year}</span>
            <span>·</span>
            <span>Simon Callens</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
