import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { agents, localizeAgent } from "@/data/army";
import CRODetailPage from "@/components/agents/CRODetailPage";
import LMFDetailPage from "@/components/agents/LMFDetailPage";
import VoiceAgentDetailPage from "@/components/agents/VoiceAgentDetailPage";
import GEODetailPage from "@/components/agents/GEODetailPage";
import LeadMagnetDetailPage from "@/components/agents/LeadMagnetDetailPage";
import MMMDetailPage from "@/components/agents/MMMDetailPage";

interface Props {
  params: Promise<{ agent: string }>;
}

export async function generateStaticParams() {
  return agents.map((a) => ({ agent: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { agent: agentId } = await params;
  const agent = agents.find((a) => a.id === agentId);
  if (!agent) return {};
  const a = localizeAgent(agent, "en");
  return {
    title: `${a.name} — MFL ARMY`,
    description: a.tagline,
  };
}

export default async function Page({ params }: Props) {
  const { agent: agentId } = await params;
  const agent = agents.find((a) => a.id === agentId);

  if (!agent) {
    notFound();
  }

  switch (agentId) {
    case "cro-agent":
      return <CRODetailPage agent={agent} locale="en" />;
    case "lmf-agent":
      return <LMFDetailPage agent={agent} locale="en" />;
    case "voice-agent":
      return <VoiceAgentDetailPage agent={agent} locale="en" />;
    case "geo-agent":
      return <GEODetailPage agent={agent} locale="en" />;
    case "lead-magnet-agent":
      return <LeadMagnetDetailPage agent={agent} locale="en" />;
    case "mmm-agent":
      return <MMMDetailPage agent={agent} locale="en" />;
    default:
      notFound();
  }
}
