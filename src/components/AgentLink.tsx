import Link from "next/link";
import type { ReactNode } from "react";
import type { Agent } from "@/data/army";
import { localePrefix, type Locale } from "@/i18n/dictionaries";

interface Props {
  /** externalUrl이 있으면 새 탭으로 외부 사이트를, 없으면 사이트 내 상세 페이지를 연다. */
  agent: Pick<Agent, "id" | "externalUrl">;
  locale: Locale;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function AgentLink({ agent, locale, className, onClick, children }: Props) {
  if (agent.externalUrl) {
    return (
      <a
        href={agent.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={localePrefix(`/army/${agent.id}`, locale)} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
