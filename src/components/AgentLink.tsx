import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Agent } from "@/data/army";
import { localePrefix, type Locale } from "@/i18n/dictionaries";

interface Props {
  /** externalUrl이 있으면 새 탭으로 외부 사이트를, 없으면 사이트 내 상세 페이지를 연다. */
  agent: Pick<Agent, "id" | "externalUrl">;
  locale: Locale;
  className?: string;
  onClick?: () => void;
  /**
   * 외부로 나갈 때 children 뒤에 ↗ 아이콘을 붙인다.
   * 헤더·푸터의 Replit·Articul8 외부 링크와 같은 표기를 맞추기 위한 것으로,
   * 자체 아이콘이 이미 있는 카드형 링크에서는 쓰지 않는다.
   */
  externalIcon?: boolean;
  children: ReactNode;
}

export default function AgentLink({
  agent,
  locale,
  className,
  onClick,
  externalIcon,
  children,
}: Props) {
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
        {externalIcon && <ArrowUpRight size={12} className="ml-1 text-[#9B9B9B]" />}
      </a>
    );
  }

  return (
    <Link href={localePrefix(`/army/${agent.id}`, locale)} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
