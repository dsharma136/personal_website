import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/content";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e13",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 600,
          color: "#ffb020",
          letterSpacing: "-0.02em",
        }}
      >
        {siteMeta.initials}
      </div>
    ),
    { ...size },
  );
}
