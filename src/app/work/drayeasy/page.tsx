import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

export const metadata = {
  title: "DrayEasy | Wenxin Li",
  description: "Revamping the web platform and empowering freight agent's logistic journey with instant quotes.",
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
        <p><strong>What is DrayEasy?</strong></p>
        <p>DrayEasy is a B2B SaaS platform that simplifies drayage logistics. The platform empowers freight agents with instant quotes, enhanced visibility, and seamless API integration for transformative success in the logistics industry.</p>
        <SectionImage src="/images/drayeasy-overview.jpg" alt="DrayEasy platform overview" />
        <p>As a product designer, I led the revamp of the web platform, focusing on streamlining the freight quoting process and improving the overall user experience for logistics professionals.</p>
      </SectionText>
    ),
  },
  {
    id: "research",
    title: "Research",
    content: (
      <SectionText>
        <p>Through stakeholder interviews and user research, we identified key pain points in the drayage booking process: complex pricing structures, lack of real-time visibility, and cumbersome manual workflows.</p>
        <SectionImage src="/images/drayeasy-research.jpg" alt="Research findings" />
      </SectionText>
    ),
  },
  {
    id: "design",
    title: "Design Process",
    content: (
      <SectionText>
        <p>The design process focused on simplifying complex logistics workflows into intuitive interfaces that freight agents could quickly adopt.</p>
        <SectionImage src="/images/drayeasy-design.jpg" alt="Design process" />
      </SectionText>
    ),
  },
  {
    id: "solutions",
    title: "Solutions",
    content: (
      <SectionText>
        <p><strong>Instant Quote System</strong></p>
        <p>A streamlined quoting interface that allows freight agents to get instant prices for drayage services, reducing the time from inquiry to booking.</p>
        <SectionImage src="/images/drayeasy-solution-1.jpg" alt="Instant quote system" />
        <p><strong>Logistics Dashboard</strong></p>
        <p>A comprehensive dashboard providing real-time visibility into shipment status, performance metrics, and operational analytics.</p>
        <SectionImage src="/images/drayeasy-solution-2.jpg" alt="Logistics dashboard" />
      </SectionText>
    ),
  },
];

export default function DrayEasyPage() {
  return (
    <CaseStudyLayout
      title="DrayEasy"
      subtitle="Revamping the web platform and empowering freight agent's logistic journey with instant quotes."
      tags={["B2B SaaS", "Web Platform", "Logistics"]}
      heroImage="/images/drayeasy-hero.jpg"
      sections={sections}
      sidebar={{
        role: "Product Designer",
        tools: ["Figma", "Prototyping"],
        timeline: "2023",
        client: "DrayEasy",
      }}
    />
  );
}
