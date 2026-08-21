import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile, siteMeta } from "@/lib/content";

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [spaceGroteskSemiBold, spaceGroteskMedium] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e13",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#e4e9ef",
            marginBottom: 24,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            width: 120,
            height: 2,
            background: "#ffb020",
            marginBottom: 24,
          }}
        />
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#78838f",
            maxWidth: 900,
          }}
        >
          {siteMeta.description}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Space Grotesk",
          data: spaceGroteskMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
