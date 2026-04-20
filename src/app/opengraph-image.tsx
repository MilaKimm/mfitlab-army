import { ImageResponse } from "next/og";

export const alt = "MFL ARMY — 마켓핏랩 그로스 마케팅 에이전트 군단";
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
  const koreanText =
    "마켓핏랩 그로스 마케팅 에이전트 군단이제 실험은 에이전트가, 판단은 사람이.도입 상담하기2분 진단 시작";

  const [notoKR900, notoKR700, notoKR500] = await Promise.all([
    loadGoogleFont("Noto Sans KR", 900, koreanText + "MFLARMY"),
    loadGoogleFont("Noto Sans KR", 700, koreanText),
    loadGoogleFont("Noto Sans KR", 500, koreanText),
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
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >

        {/* Centered content */}
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
              마켓핏랩 그로스 마케팅 에이전트 군단
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
              이제 실험은 에이전트가, 판단은 사람이.
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
              도입 상담하기
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
              2분 진단 시작
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans KR",
          data: notoKR900,
          style: "normal",
          weight: 900,
        },
        {
          name: "Noto Sans KR",
          data: notoKR700,
          style: "normal",
          weight: 700,
        },
        {
          name: "Noto Sans KR",
          data: notoKR500,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
