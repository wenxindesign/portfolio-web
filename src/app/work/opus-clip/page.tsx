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
}: {
  src: string;
  alt: string;
  caption?: string;
  isGif?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface border border-black/5">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1440px) 100vw, 1200px"
          unoptimized={isGif}
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
    id: "overview",
    title: "Overview",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
          The Challenge
        </h3>
        <p>
          Content creators on OpusClip could convert long videos into short
          clips with one click, but had no way to understand{" "}
          <strong>why some clips performed well while others didn&apos;t</strong>
          . The platform showed raw metrics without context, leaving creators
          guessing about what to improve.
        </p>
        <p>
          I was tasked with designing a{" "}
          <strong>Video Performance Diagnosis tool</strong> — not just another
          data dashboard, but an AI-powered diagnostic experience that tells
          creators the &ldquo;why&rdquo; behind their numbers and the
          &ldquo;how&rdquo; to improve.
        </p>

        <SectionImage
          src="/images/opus-clip/overview.jpg"
          alt="Opus Clip platform overview"
        />

        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2 mt-8">
          My Role
        </h3>
        <p>
          As the <strong>Design Lead Contractor</strong>, I owned the end-to-end
          UX process — from user research and problem framing to information
          architecture, wireframes, and hi-fi prototypes. I developed pitch
          decks for stakeholder reviews and collaborated with PMs and engineers
          to define MVP scope.
        </p>
      </SectionText>
    ),
  },
  {
    id: "problem",
    title: "Problem Framing",
    content: (
      <SectionText>
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
          Three Layers of Creator Confusion
        </h3>
        <p>
          Through user interviews with 10 content creators across different
          niches, I identified a three-layer pain point framework (PP3) that
          revealed the core problem wasn&apos;t about data access — it was about{" "}
          <strong>diagnostic capability</strong>.
        </p>

        <div className="space-y-4 mt-6">
          <InsightCard
            title="Outcome Confusion"
            description="Creators could see views and likes, but couldn't understand why the same type of video would get vastly different results. 'My last cooking video got 50K views, this one got 500 — what went wrong?'"
          />
          <InsightCard
            title="Structural Confusion"
            description="Creators lacked insight into video structure — hook effectiveness, retention patterns, and pacing issues. They couldn't diagnose where viewers were dropping off or why."
          />
          <InsightCard
            title="Contextual Confusion"
            description="Without benchmarks, creators had no reference point. Is a 45% completion rate good? How does it compare to similar videos or their own historical average?"
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
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
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

        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2 mt-8">
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
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
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

        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2 mt-8">
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
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
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

        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2 mt-8">
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
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
          Command Center — Hi-Fi Prototype
        </h3>
        <p>
          The final hi-fi prototype adopts the Command Center layout (Version
          B), designed at 1440px with OpusClip&apos;s dark theme and purple
          brand color (#8B5CF6). The design was built to integrate seamlessly
          into OpusClip&apos;s existing product interface.
        </p>

        <SectionImage
          src="/images/opus-clip/main-page.jpg"
          alt="Hi-Fi Command Center prototype"
          caption="Video Performance Diagnosis — Command Center layout"
        />

        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2 mt-8">
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
        <h3 className="font-thicccboi text-2xl font-medium tracking-[-0.02em] text-primary mb-2">
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
      title="Opus Clip - From Metrics to Diagnosis"
      subtitle="Designing a structured system that helps creators understand performance and improve their videos."
      tags={[
        "B2C AIGC",
        "Video Analytics",
        "AI Diagnosis Product",
      ]}
      heroImage="/images/opus-clip/main-page.jpg"
      sections={sections}
      sidebar={{
        role: "Design Lead Contractor",
        teammates: [
          "Willow Sheng (PM)",
          "Wenxin Li (Design Lead)",
          "Hayley Heshuote (Design Lead)",
          "Wendy Yang",
          "Alora Zhao",
          "Yilin Li",
        ],
        tools: ["Figma", "Adobe Illustrator"],
        timeline: "Oct 2023 – Mar 2024",
        client: "Opus Clip",
      }}
    />
  );
}
