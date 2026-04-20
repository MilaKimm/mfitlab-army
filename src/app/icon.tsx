import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B1B1B",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Corner brackets — very subtle */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 6,
            width: 6,
            height: 6,
            borderTop: "1.5px solid #36B1A7",
            borderLeft: "1.5px solid #36B1A7",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 6,
            right: 6,
            width: 6,
            height: 6,
            borderBottom: "1.5px solid #36B1A7",
            borderRight: "1.5px solid #36B1A7",
            display: "flex",
          }}
        />

        {/* A letter */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 900,
            color: "#36B1A7",
            letterSpacing: -1,
            fontFamily: "system-ui, sans-serif",
            display: "flex",
            lineHeight: 1,
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
