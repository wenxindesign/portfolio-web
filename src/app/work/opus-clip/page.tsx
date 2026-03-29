import CaseStudyLayout from "@/components/CaseStudyLayout";
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

        <div className="mt-4 mb-0 w-full overflow-hidden relative" style={{ aspectRatio: '16/7', borderRadius: '12px', background: '#0D0D11' }}>
          <iframe
            src="/prototype-01.html"
            className="border-0"
            style={{
              position: 'absolute',
              width: '1440px',
              height: '1620px',
              transformOrigin: '0 0',
              transform: 'scale(0.85) translate(-320px, -785px)',
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
          As competitors expand into video performance analytics, we began to question whether Opus should evolve beyond editing to drive stronger retention and subscription growth. Editing is no longer the full story.
        </p>

        <div className="mt-4 w-full overflow-hidden">
          <iframe
            src="/business-trigger.html"
            className="w-full border-0"
            style={{ height: '400px' }}
            title="Competitive Landscape Diagram"
          />
        </div>
      </SectionText>
    ),
  },
  {
    id: "research",
    title: "Research",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          Competitive Analysis
        </h3>
        <p>
          We conducted a three-week competitive analysis covering product
          architecture, features, and AI coaching capabilities across video
          analytics platforms. Key insight: existing tools focused on data
          display, none provided structured diagnosis.
        </p>

        <SectionImage
          src="/images/opus-clip/competitive-analysis.jpg"
          alt="Competitive analysis of video analytics platforms"
        />

        <div className="space-y-4 mt-6">
          <InsightCard
            title="AI-Powered Diagnosis Gap"
            description="No competitor offered a diagnosis-first approach. All treated analytics as passive data display rather than active problem-solving."
          />
          <InsightCard
            title="Context Is Missing Everywhere"
            description="Most dashboards show metrics without benchmarks. Creators need comparison points — vs. their average, vs. similar content, vs. platform norms."
          />
          <InsightCard
            title="Actionability Is an Afterthought"
            description="Even when platforms surface insights, they rarely connect them to specific, prioritized actions creators can take on their next video."
          />
        </div>

        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2 mt-8">
          User Insights
        </h3>
        <p>
          We surveyed 10 video creators across topics including life abroad,
          sports, advertising, and tech. From affinity mapping, we identified
          that creators don&apos;t want more data — they want{" "}
          <strong>clear answers and next steps</strong>.
        </p>

        <SectionImage
          src="/images/opus-clip/similar-creators.jpg"
          alt="User research — creator comparison analysis"
          caption="Analyzing how creators compare their performance to similar channels"
        />
      </SectionText>
    ),
  },
  {
    id: "architecture",
    title: "Information Architecture",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          5-Layer Diagnosis Model
        </h3>
        <p>
          Rather than organizing by data type (views, engagement, etc.), I
          designed a{" "}
          <strong>progressive diagnosis model</strong> that mirrors how an expert
          would analyze video performance — starting with outcomes, adding
          context, examining structure, extracting insights, and ending with
          actions.
        </p>

        <div className="space-y-3 mt-6">
          {[
            {
              layer: "01",
              name: "Outcome Layer",
              section: "Performance Snapshot",
              desc: "What happened? Views, completion, engagement, growth metrics",
            },
            {
              layer: "02",
              name: "Context Layer",
              section: "Benchmark",
              desc: "How does it compare? vs. Account Average, Similar Videos, Platform Average",
            },
            {
              layer: "03",
              name: "Structure Layer",
              section: "Structural Diagnosis",
              desc: "Why did it happen? Retention curve, hook analysis, engagement distribution",
            },
            {
              layer: "04",
              name: "Insight Layer",
              section: "AI Insight",
              desc: "What patterns emerge? AI-identified correlations and findings",
            },
            {
              layer: "05",
              name: "Action Layer",
              section: "Optimization Hints",
              desc: "What to do next? Prioritized, rule-based improvement suggestions",
            },
          ].map((item) => (
            <div
              key={item.layer}
              className="flex gap-4 p-4 bg-surface rounded-xl border border-black/5"
            >
              <span className="text-accent font-thicccboi text-lg font-semibold w-8 flex-shrink-0">
                {item.layer}
              </span>
              <div>
                <p className="font-semibold text-primary">
                  {item.name}{" "}
                  <span className="text-secondary font-normal">
                    — {item.section}
                  </span>
                </p>
                <p className="text-sm text-secondary mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2 mt-8">
          Two Layout Strategies
        </h3>
        <p>
          I explored two fundamentally different information architectures to
          test how layout affects diagnostic reasoning:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-surface p-5 rounded-xl border border-black/5">
            <h4 className="font-semibold mb-2">Version A — Sequential Flow</h4>
            <p className="text-sm text-secondary">
              Vertical scroll with AI Summary hero at top. Each diagnosis layer
              unfolds progressively. Better for first-time understanding — guides
              the user through the story.
            </p>
          </div>
          <div className="bg-surface p-5 rounded-xl border border-black/5 ring-1 ring-accent/30">
            <h4 className="font-semibold mb-2">
              Version B — Command Center ✦
            </h4>
            <p className="text-sm text-secondary">
              Left sidebar for video selection + filters, main panel for
              diagnosis. AI Diagnosis pulled to top. Better for power users who
              need quick switching between videos.
            </p>
          </div>
        </div>
      </SectionText>
    ),
  },
  {
    id: "iteration",
    title: "Design Iteration",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          From Dashboard to Diagnosis Product
        </h3>
        <p>
          The design went through 6 wireframe iterations, evolving from a
          traditional analytics dashboard to an AI diagnosis product. The key
          pivot happened at v6 — shifting from &ldquo;show all the data&rdquo;
          to &ldquo;lead with the verdict.&rdquo;
        </p>

        <div className="space-y-4 mt-6">
          <InsightCard
            title="v1–v2: Traditional Dashboard"
            description="Started with standard metric cards and charts. Felt generic — didn't differentiate from existing analytics tools."
          />
          <InsightCard
            title="v3–v5: Structure Refinement"
            description="Introduced the 5-layer model, global filters, and wireframe-style prototyping. Content was right but the hierarchy wasn't leading users to insights."
          />
          <InsightCard
            title="v6: AI Product Pivot"
            description="Restructured around diagnosis-first logic: Score + AI Summary at the top, data as supporting evidence below. This reversed the information hierarchy — conclusion first, evidence second."
          />
        </div>

        <SectionImage
          src="/images/opus-clip/frame-analysis.png"
          alt="Design iteration — frame analysis across versions"
          caption="Analyzing the evolution of information hierarchy across wireframe iterations"
        />

        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2 mt-8">
          MVP Scoping
        </h3>
        <p>
          Working with PM, I defined a phased MVP approach that acknowledged
          technical constraints while maintaining the diagnostic vision:
        </p>

        <div className="space-y-3 mt-4">
          <div className="flex gap-3 items-start">
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-medium whitespace-nowrap mt-0.5">
              Phase 1
            </span>
            <p className="text-sm">
              Outcome metrics + Historical Benchmark + Rule-based hints (no AI
              branding)
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-medium whitespace-nowrap mt-0.5">
              Phase 2
            </span>
            <p className="text-sm">
              Structural Diagnosis + Platform Comparison + Similar Video
              Benchmark
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-medium whitespace-nowrap mt-0.5">
              Phase 3
            </span>
            <p className="text-sm">
              Predictive AI + One-click Optimization + Full AI Diagnosis
            </p>
          </div>
        </div>
      </SectionText>
    ),
  },
  {
    id: "design",
    title: "Hi-Fi Design",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          Command Center — Hi-Fi Prototype
        </h3>
        <p>
          The final hi-fi prototype adopts the Command Center layout (Version
          B), designed at 1440px with OpusClip&apos;s dark theme and purple
          brand color (#8B5CF6). The design was built to integrate seamlessly
          into OpusClip&apos;s existing product interface.
        </p>

        <SectionImage
          src="/images/opus-clip/hifi-command-center.jpg"
          alt="Hi-Fi Command Center prototype"
          caption="Video Performance Diagnosis — Command Center layout"
          dark
        />

        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2 mt-8">
          Key Design Decisions
        </h3>

        <div className="space-y-4 mt-4">
          <div className="flex gap-4 p-4 bg-surface rounded-xl border border-black/5">
            <div>
              <p className="font-semibold text-primary">Score Ring + Summary Hero</p>
              <p className="text-sm text-secondary mt-1">
                A performance score ring with Strength/Issue tags gives
                immediate diagnostic verdict. Creators know at a glance whether
                a video is performing well and why.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-surface rounded-xl border border-black/5">
            <div>
              <p className="font-semibold text-primary">Retention Curve with Hook Zone</p>
              <p className="text-sm text-secondary mt-1">
                SVG retention curve highlights the critical 0–3s hook zone in
                green, with drop-off annotations. This connects abstract metrics
                to specific moments in the video.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-surface rounded-xl border border-black/5">
            <div>
              <p className="font-semibold text-primary">Context Benchmarks</p>
              <p className="text-sm text-secondary mt-1">
                Three comparison cards (vs. Account, vs. Similar, vs. Platform)
                with &ldquo;Top 20%&rdquo; highlights. This directly addresses
                the contextual confusion pain point.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-surface rounded-xl border border-black/5">
            <div>
              <p className="font-semibold text-primary">Prioritized Optimization Hints</p>
              <p className="text-sm text-secondary mt-1">
                Three rule-based suggestion cards with clear priority ranking
                (P1/P2/P3). Each hint connects a specific finding to a concrete
                action.
              </p>
            </div>
          </div>
        </div>
      </SectionText>
    ),
  },
  {
    id: "reflection",
    title: "Reflection",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-[24px] font-bold tracking-[-0.02em] text-primary mb-2">
          What I Learned
        </h3>
        <p>
          The biggest shift in this project was moving from &ldquo;how do we
          display data?&rdquo; to &ldquo;how do we diagnose problems?&rdquo;
          This reframing changed everything — the information architecture, the
          visual hierarchy, and even how we scoped the MVP.
        </p>
        <div className="space-y-4 mt-6">
          <InsightCard
            title="Lead with the Verdict"
            description="Putting the AI diagnosis before the raw data reversed the typical dashboard pattern. Users come for answers, not numbers — the data exists to support the diagnosis, not the other way around."
          />
          <InsightCard
            title="MVP ≠ Stripped-Down Vision"
            description="Removing AI branding from Phase 1 wasn't a compromise — it was honest product design. Rule-based hints labeled as 'Optimization Hints' set accurate expectations while preserving the diagnostic framework for future AI integration."
          />
          <InsightCard
            title="Two Layouts, Two Mental Models"
            description="Designing both Sequential Flow and Command Center wasn't just about preference — it revealed how different layouts serve different cognitive tasks: storytelling vs. analysis."
          />
        </div>
      </SectionText>
    ),
  },
];

export default function OpusClipPage() {
  return (
    <CaseStudyLayout
      title={<><span className="text-primary font-medium">Opus Clip</span>{" - "}<span className="text-secondary font-semibold">From Metrics to Diagnosis</span></>}
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
