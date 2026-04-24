import { ImageResponse } from "next/og";

export const alt = "MFL ARMY — Growth Marketing AI Agents by MarketFit Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+"
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status === 200) return await res.arrayBuffer();
  }
  throw new Error(`failed to load font: ${family} ${weight}`);
}

export default async function Image() {
  const englishText =
    "MFLARMYMarketFit Lab's growth marketing agent armyAgents run the experiments. Humans make the calls.Get in Touch2-Min Diagnostic";

  const [inter900, inter700] = await Promise.all([
    loadGoogleFont("Inter", 900, englishText),
    loadGoogleFont("Inter", 700, englishText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E6FBF8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 180,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -6,
              marginBottom: 40,
            }}
          >
            <div style={{ color: "#15867E", display: "flex" }}>MFL</div>
            <div style={{ color: "#1B1B1B", display: "flex" }}>ARMY</div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                color: "#36B1A7",
                fontSize: 30,
                fontWeight: 700,
                display: "flex",
              }}
            >
              MarketFit Lab's growth marketing agent army
            </div>
            <div
              style={{
                color: "rgba(27,27,27,0.6)",
                fontSize: 30,
                fontWeight: 700,
                display: "flex",
                marginTop: 6,
              }}
            >
              Agents run the experiments. Humans make the calls.
            </div>
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#36B1A7",
                color: "white",
                padding: "16px 32px",
                borderRadius: 999,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Get in Touch
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.75)",
                color: "#1B1B1B",
                padding: "16px 32px",
                borderRadius: 999,
                fontSize: 18,
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              2-Min Diagnostic
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter900, style: "normal", weight: 900 },
        { name: "Inter", data: inter700, style: "normal", weight: 700 },
      ],
    }
  );
}
