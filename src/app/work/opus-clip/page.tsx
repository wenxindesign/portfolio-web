import CaseStudyLayout from "@/components/CaseStudyLayout";
import AutoIframe from "@/components/AutoIframe";
import Image from "next/image";

export const metadata = {
  title: "Opus Clip | Wenxin Li",
  description:
    "Designing a Video Performance Diagnosis tool that helps content creators understand why their videos underperform and what to do next.",
};

function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed">{children}</div>
  );
}

function SectionImage({
  src,
  alt,
  caption,
  isGif,
  dark,
}: {
  src: string;
  alt: string;
  caption?: string;
  isGif?: boolean;
  dark?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden border ${dark ? 'bg-[#0D0D11] border-white/5' : 'bg-surface border-black/5'}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={dark ? "object-cover" : "object-contain"}
          sizes="(max-width: 1440px) 100vw, 1200px"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-secondary text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function InsightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface p-5 rounded-xl border border-black/5">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
}

const sections = [
  {
    id: "final-design",
    title: "Final Design",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          From raw performance data to actionable insights.
        </h3>

        <h4 className="font-thicccboi text-lg font-medium tracking-[-0.01em] text-primary mb-1 !mt-0">
          1. Identify where viewers drop off
        </h4>
        <p className="!mt-0">
          See how your video actually performed. Understand what happened.
        </p>

        <div className="mt-4 mb-0 w-full overflow-hidden relative" style={{ aspectRatio: '16/9', borderRadius: '12px', background: '#0D0D11' }}>
          <iframe
            src="/prototype-01.html"
            className="border-0 w-full"
            style={{
              position: 'absolute',
              height: '1600px',
              top: '-620px',
              left: '-7.5%',
              width: '115%',
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
            loading="lazy"
            scrolling="no"
          />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: '12px', background: 'linear-gradient(to bottom, rgba(13,13,17,0.45) 0%, transparent 12%, transparent 88%, rgba(13,13,17,0.45) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: '12px', background: 'linear-gradient(to right, rgba(13,13,17,0.35) 0%, transparent 8%, transparent 95%, rgba(13,13,17,0.35) 100%)' }} />
        </div>

        <h4 className="font-thicccboi text-lg font-medium tracking-[-0.01em] text-primary mb-1 !mt-10">
          2. Understand why it happens
        </h4>
        <p className="!mt-0">
          Automatically surface key issues and strengths based on viewer behavior.
        </p>

        <div className="mt-4 mb-0 w-full aspect-[16/10] rounded-2xl bg-[#e5e5e5] flex items-center justify-center">
          <p className="text-secondary text-sm">Prototype placeholder</p>
        </div>

        <h4 className="font-thicccboi text-lg font-medium tracking-[-0.01em] text-primary mb-1 !mt-10">
          3. See performance in context
        </h4>
        <p className="!mt-0">
          Compare performance across your account, similar videos, and platform benchmarks.
        </p>

        <div className="mt-4 mb-0 w-full aspect-[16/10] rounded-2xl bg-[#e5e5e5] flex items-center justify-center">
          <p className="text-secondary text-sm">Prototype placeholder</p>
        </div>
      </SectionText>
    ),
  },
  {
    id: "business-trigger",
    title: "Business Trigger",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[32px] font-bold tracking-[-0.02em] text-primary mb-3 leading-[1.15]">
          Video editing is just the beginning. But what do creators need after they publish?
        </h3>
        <p>
          As competitors expand into video performance analytics, we began to question whether Opus should evolve beyond editing to drive stronger <strong className="text-[#1A1A1A]">retention and subscription growth</strong>. After publishing, <strong className="text-[#1A1A1A]">creators leave the platform</strong> — where do they go?
        </p>

        <div className="mt-4 w-full">
          <AutoIframe
            src="/business-trigger.html"
            title="Competitive Landscape Diagram"
          />
        </div>
      </SectionText>
    ),
  },
  {
    id: "user-research",
    title: "User Research",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[32px] font-bold tracking-[-0.02em] text-primary mb-3 leading-[1.15]">
          Problems do exist across the lifecycle
        </h3>
        <p>
          We conducted 10 surveys and mapped the full user journey, tracing pain points across every step of the video creation lifecycle. We found that many user frustrations exist beyond the current feature set. The pain points fall into three major categories, spanning the early and late stages of the user journey.
        </p>

        <div className="mt-8 w-full">
          <AutoIframe
            src="/card-sorting.html"
            title="Pain Point Card Sorting Diagram"
          />
        </div>

      </SectionText>
    ),
  },
  {
    id: "strategic-framing",
    title: "Strategic Framing",
    fullBleed: true,
    dark: true,
    content: (
      <SectionText>
        <p>
          While the lifecycle presented three opportunities, I focused this case study on PP3 — Post-publishing diagnosis.
        </p>
        <h3 className="font-thicccboi text-[28px] font-bold tracking-[-0.02em] mt-4 mb-0 leading-[1.2]">
          How might we help creators make sense of performance data and take action to improve their videos after publishing?
        </h3>
      </SectionText>
    ),
  },
];

export default function OpusClipPage() {
  return (
    <CaseStudyLayout
      title={<><span className="text-primary font-semibold">Opus Clip</span><br /><span className="text-secondary font-normal">From Metrics to Diagnosis</span></>}
      subtitle="Designing a structured system that helps creators understand performance and improve their videos."
      tags={[
        "B2C AIGC",
        "Video Analytics",
        "AI Diagnosis Product",
      ]}
      heroImage="/images/opus-clip/hero-mockup.jpg"
      heroFullBleed
      heroBgColor="#0D1025"
      sections={sections}
      atAGlance={
        <p>
          As the product designer, I led the design of a <strong className="font-semibold text-primary">performance intelligence system</strong> that redefined how creators optimize content on Opus. Rather than adding more metrics, I reframed the problem as a lack of <strong className="font-semibold text-primary">structured understanding</strong>—introducing a <strong className="font-semibold text-primary">diagnosis model</strong> that connects outcome, structure, and context into <strong className="font-semibold text-primary">actionable insights</strong>. This shifted the product from <strong className="font-semibold text-primary">passive analytics to an active decision-making system</strong>, enabling creators to move from intuition to informed optimization. The solution establishes a scalable foundation for <strong className="font-semibold text-primary">performance-driven workflows</strong> and long-term engagement in a subscription-based ecosystem.
        </p>
      }
      impact={[
        { number: "+80%", label: "Efficiency" },
        { number: "2.5x", label: "Decision Making" },
        { number: "63.3%", label: "Adoption" },
        { number: "4M+", label: "Scale" },
      ]}
      sidebar={{
        role: "Design Lead Contractor",
        teammates: [
          "1 PM, 1 Design Lead, 3 Designers",
        ],
        timeline: "Oct 2023 – Mar 2024",
        client: "Opus Clip",
      }}
    />
  );
}
