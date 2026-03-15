import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

export const metadata = {
  title: "Opus Clip | Wenxin Li",
  description: "Help users understand their video performance and create popular videos with AI assistance.",
};

function SectionText({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-base leading-relaxed">{children}</div>;
}

function SectionImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface border border-black/5">
        <Image src={src} alt={alt} fill className="object-contain" sizes="800px" />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-secondary text-center">{caption}</figcaption>}
    </figure>
  );
}

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <SectionText>
        <p><strong>What is Opus Clip?</strong></p>
        <p>Opus Clip is an AI-powered content optimization tool that helps creators understand their video performance and create popular videos with AI assistance. The platform analyzes content to generate viral clips from long-form videos.</p>
        <SectionImage src="/images/opusclip-overview.jpg" alt="Opus Clip platform overview" />
        <p>As a product designer at Opus Clip, I focused on designing the analytics dashboard and content optimization features to help creators make data-driven decisions about their content strategy.</p>
      </SectionText>
    ),
  },
  {
    id: "design",
    title: "Design Process",
    content: (
      <SectionText>
        <p>The design process involved understanding creator workflows, analyzing competitor dashboards, and iterating on data visualization approaches that make complex analytics accessible.</p>
        <SectionImage src="/images/opusclip-design.jpg" alt="Design process" />
      </SectionText>
    ),
  },
  {
    id: "solutions",
    title: "Solutions",
    content: (
      <SectionText>
        <p><strong>Performance Dashboard</strong></p>
        <p>A comprehensive dashboard that helps users understand their video performance across platforms, with actionable insights powered by AI.</p>
        <SectionImage src="/images/opusclip-dashboard.jpg" alt="Performance dashboard" />
        <p><strong>AI Content Optimization</strong></p>
        <p>Smart recommendations for content improvement based on trending topics and audience engagement patterns.</p>
        <SectionImage src="/images/opusclip-ai.jpg" alt="AI optimization features" />
      </SectionText>
    ),
  },
];

export default function OpusClipPage() {
  return (
    <CaseStudyLayout
      title="Opus Clip"
      subtitle="Help users understand their video performance and create popular videos with AI assistance."
      tags={["B2C AIGC", "Dashboard", "AI Tool"]}
      heroImage="/images/opusclip-hero.jpg"
      sections={sections}
      sidebar={{
        role: "Product Designer",
        tools: ["Figma", "Analytics"],
        timeline: "2023",
        client: "Opus Clip",
      }}
    />
  );
}
