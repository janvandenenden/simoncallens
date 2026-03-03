import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const spaceGrotesk = readFile(
  join(process.cwd(), "app/fonts/SpaceGrotesk.ttf")
);

export default async function Icon() {
  const fontData = await spaceGrotesk;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Space Grotesk",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        SC
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
