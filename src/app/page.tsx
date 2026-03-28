import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    tags: ["B2C AIGC", "Dashboard"],
    title: "Opus Clip - From Metrics to Diagnosis",
    description:
      "Designing a structured system that helps creators understand performance and improve their videos.",
    awards: [],
    href: "/work/opus-clip",
    imageSrc: "/images/home/opus-preview.png",
    imageAlt: "Opus Clip dashboard showing performance analytics",
  },
  {
    tags: ["B2B SaaS", "Web"],
    title: "DrayEasy - Make your drayage easier",
    description:
      "Revamping the web platform and empowering freight agent's logistic journey with instant quotes.",
    awards: [],
    href: "/work/drayeasy",
    imageSrc: "/images/home/DrayEasy.png",
    imageAlt: "DrayEasy platform showing freight logistics interface",
  },
  {
    tags: ["AI Product", "B2B SaaS"],
    title: "Lorem Ipsum - Dolor Sit Amet",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    awards: [],
    href: "#",
    placeholder: true,
  },
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
    imageSrc: "/images/home/sanctify-preview.png",
    imageAlt: "Sanctify app preview showing mobile screens",
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
      <section className="hero-gradient w-full -mt-16">
        <div className="hero-shimmer" aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-[calc(140px+64px)] pb-[140px] font-thicccboi relative">
          <div>
              <p className="text-base md:text-lg text-secondary tracking-[-0.01em] mb-6">
                AI-savvy · Research-driven · Red Dot Winner
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-4xl mb-4">
                <span className="text-primary font-semibold">I&apos;m </span>
                <span className="text-primary" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.25em", fontWeight: 600 }}>Wen</span>
                <span className="text-primary font-semibold">,</span>
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-4xl mb-8">
                <span className="text-primary font-semibold">Product designer</span>
                <span className="text-secondary"> who turns complex systems into intuitive experiences.</span>
              </h1>

              <div className="space-y-1 text-base md:text-lg text-secondary">
                <p>Currently designing AI tools at <a href="https://antigma.ai" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-accent transition-colors">Antigma.ai</a> ↗</p>
                <p>MDes from <span className="text-primary font-medium">Rhode Island School of Design (RISD)</span></p>
                <p>Previously at <a href="https://www.opus.pro" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-accent transition-colors">Opus Clip</a>, <a href="https://www.sasaki.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-accent transition-colors">Sasaki</a></p>
              </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16 lg:pb-24">
        <hr className="border-black/10 mb-12" />
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <p className="font-thicccboi text-xl md:text-2xl text-secondary tracking-[-0.02em] max-w-sm lg:flex-shrink-0">
            See more of my{" "}
            <a
              href="/play"
              className="text-primary underline underline-offset-4 hover:text-[#5B3FFF] transition-colors"
            >
              transferrable skills
            </a>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 lg:max-w-2xl">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-lg md:text-xl font-semibold text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
