import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const alt = siteConfig.businessName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#17170f",
          color: "#fdfdfb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.6, display: "flex" }}>chamara.</div>
        <div style={{ fontSize: 64, fontWeight: 600, marginTop: 24, maxWidth: 900, display: "flex" }}>
          {siteConfig.businessName}
        </div>
        <div style={{ fontSize: 30, opacity: 0.7, marginTop: 20, display: "flex" }}>
          Private, Driver-Guided Sri Lanka Tour Packages
        </div>
      </div>
    ),
    { ...size }
  );
}
