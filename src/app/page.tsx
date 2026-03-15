import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    tags: ["B2C Fintech", "Mobile App"],
    title: "Sanctify - Investment in Good Faith",
    description:
      "Launching a trustworthy and delightful onboarding experience for investors make well-informed decisions in line with Catholic values.",
    awards: [
      "Winner | 2023 Red Dot - Design Concept (NDA)",
      "Finalist | 2023 iF Design Awards",
    ],
    href: "/work/sanctify",
    imageSrc: "/images/sanctify-preview.jpg",
    imageAlt: "Sanctify app preview showing mobile screens",
  },
  {
    tags: ["B2C AIGC", "Dashboard"],
    title: "Opus Clip - AI Content Optimization Tool",
    description:
      "Help users understand their video performance and create popular videos with AI assistance.",
    awards: [],
    href: "/work/opus-clip",
    imageSrc: "/images/opusclip-preview.jpg",
    imageAlt: "Opus Clip dashboard showing performance analytics",
  },
  {
    tags: ["B2B SaaS", "Web"],
    title: "DrayEasy - Make your drayage easier",
    description:
      "Revamping the web platform and empowering freight agent's logistic journey with instant quotes.",
    awards: [],
    href: "/work/drayeasy",
    imageSrc: "/images/drayeasy-preview.jpg",
    imageAlt: "DrayEasy platform showing freight logistics interface",
  },
];

const skills = [
  "User Centered Approach",
  "Sustainability and Accessibility",
  "Creative Problem Solving",
  "Systems Thinking",
  "Research and Analysis",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-content mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Wenxin"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-3xl">
          <span className="text-secondary">Wenxin is an award-winning product designer and she designs</span>{" "}
          <span className="text-primary font-semibold relative inline-block">
            next-gen smart screens
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
          </span>
          <span className="text-secondary">.</span>
        </h1>
      </section>

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <hr className="border-black/10" />
      </div>

      {/* Case Studies */}
      <section className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-24 space-y-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.href} {...study} />
        ))}
      </section>

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <hr className="border-black/10" />
      </div>

      {/* Skills Section */}
      <section className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="font-display text-2xl md:text-3xl text-secondary mb-8 max-w-xl">
          Click below. See more of my{" "}
          <a
            href="/play"
            className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
          >
            transferrable skills
          </a>
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xl md:text-2xl font-semibold text-primary/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
