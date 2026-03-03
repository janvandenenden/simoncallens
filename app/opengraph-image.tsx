import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Simon Callens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const spaceGrotesk = readFile(
  join(process.cwd(), "app/fonts/SpaceGrotesk.ttf")
);
const spaceMono = readFile(
  join(process.cwd(), "app/fonts/SpaceMono-Regular.ttf")
);

export default async function OgImage() {
  const [spaceGroteskData, spaceMonoData] = await Promise.all([
    spaceGrotesk,
    spaceMono,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Simon Callens
        </div>
        <div
          style={{
            fontFamily: "Space Mono",
            fontSize: 22,
            color: "#888",
            marginTop: 20,
          }}
        >
          Furniture, Sculpture & Design
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
