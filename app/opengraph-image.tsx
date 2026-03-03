import { ImageResponse } from "next/og";

export const alt = "Simon Callens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Simon Callens
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#888",
            marginTop: 16,
          }}
        >
          Furniture, Sculpture & Design
        </div>
      </div>
    ),
    { ...size }
  );
}
