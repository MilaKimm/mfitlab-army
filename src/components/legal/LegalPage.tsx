import { legalDocs } from "@/data/legal";
import type { Locale } from "@/i18n/dictionaries";

interface Props {
  doc: "terms" | "privacy";
  locale: Locale;
}

export default function LegalPage({ doc, locale }: Props) {
  const content = legalDocs[doc][locale];
  const en = locale === "en";

  return (
    <main className="flex-1">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-[28px] md:text-[40px] font-semibold text-[#1B1B1B] leading-[1.4]">
            {content.title}
          </h1>
          {content.effectiveDate && (
            <p className="mt-3 text-sm text-[#9B9B9B]">
              {en ? "Effective date" : "시행일"} · {content.effectiveDate}
            </p>
          )}

          {content.sections.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-[#E9E9E9] bg-[#F9F9F9] p-6">
              <p className="text-[15px] text-[#626166] leading-relaxed">
                {en
                  ? "This document is being prepared and will be published here shortly."
                  : "본 문서는 준비 중이며, 확정되는 대로 이 페이지에 게시됩니다."}
              </p>
              <p className="mt-3 text-sm text-[#9B9B9B] leading-relaxed">
                {en ? "For inquiries in the meantime: " : "문의는 아래로 부탁드립니다 · "}
                <a href="mailto:hello@mfitlab.com" className="text-[#36B1A7] hover:underline">
                  hello@mfitlab.com
                </a>
              </p>
            </div>
          ) : (
            <div className="mt-10 space-y-10">
              {content.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-semibold text-[#1B1B1B] mb-3">{section.heading}</h2>
                  <div className="space-y-3">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="text-[15px] text-[#626166] leading-relaxed whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
