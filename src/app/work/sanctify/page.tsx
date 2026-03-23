import CaseStudyLayout from "@/components/CaseStudyLayout";
import Image from "next/image";

export const metadata = {
  title: "Sanctify | Wenxin Li",
  description: "Launching a convenient and delightful investment app that lets you make well-informed decisions in line with Catholic values.",
};

function SectionText({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-base leading-relaxed">{children}</div>;
}

function SectionImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const isGif = src.toLowerCase().endsWith('.gif');
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface border border-black/5">
        <Image src={src} alt={alt} fill className="object-contain" sizes="800px" unoptimized={isGif} />
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
        <p><strong>What is Sanctify?</strong></p>
        <p>Sanctify is an investing app that lets you screen companies for alignment with Catholic values, build & invest in portfolios, and join a community of like-minded investors striving to promote the common good.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 p-6 bg-background rounded-xl">
          <div>
            <p className="font-semibold mb-2">Embrace business values</p>
            <p className="text-sm text-secondary">Serve for the underrepresented & Promote human dignity. Advocate for investors to adopt faith-based ESG investing, which would promote human dignity and enhance the common good.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Increase conscious practices</p>
            <p className="text-sm text-secondary">This can stimulate an increase in demand for socially responsible investments and encourage companies to adopt environmentally and socially conscious practices and policies.</p>
          </div>
        </div>
        <p><strong>The Challenge</strong></p>
        <p>Sanctify wanted to transform the investment landscape with a user-friendly approach to faith-based investing. This sustainable form of investment evaluates both financial returns while considering ESG (environmental, social, and governance) factors.</p>
        <p>Our high-level goal was to make faith-based investing accessible to modern, everyday Catholics and individuals of similar faiths.</p>
        <p><strong>My role</strong></p>
        <p>I participated in the research, ideation, user flow, and wireframe processes with four other designers. I primarily designed the app&apos;s homepage. During the design process, I worked closely with the client&apos;s representatives to continuously update and iterate on the product.</p>
        <div className="bg-accent/5 rounded-xl p-6 my-6">
          <p className="font-thicccboi text-xl font-medium tracking-[-0.02em] text-accent mb-2">Meaningful impact</p>
          <p>We saved <strong>40%</strong> of the drop-off rate.</p>
          <p>Over <strong>20,000</strong> new users have signed up to join the waitlist.</p>
        </div>
      </SectionText>
    ),
  },
  {
    id: "core-features",
    title: "Core Features",
    content: (
      <SectionText>
        <p><strong>Obtaining the latest faith-based categories and sustainable stock information</strong></p>
        <p>Users can view news on democratized, faith-based ESG sustainable investing, which empowers retail investors to align their investments with personal values and religious convictions.</p>
        <SectionImage src="/images/sanctify/feature-1.png" alt="FFV Scorecard feature" />
        <p><strong>Screening for MVP through FFV scorecard</strong></p>
        <p>We empower users to make informed faith-based ESG investments independently. Using our exclusive screening process, they have the ability to evaluate over 20,000 securities.</p>
        <SectionImage src="/images/sanctify/feature-2.png" alt="Screening feature" />
        <p><strong>Getting on-board with trustworthy guidance</strong></p>
        <p>The app&apos;s simplicity and transparent guided experience help users make investment decisions that align with their faith.</p>
        <SectionImage src="/images/sanctify/Feature-3-Getting on-board.png" alt="Onboarding experience" />
      </SectionText>
    ),
  },
  {
    id: "research",
    title: "Research",
    content: (
      <SectionText>
        <p><strong>Who are the users?</strong></p>
        <p>In meetings with stakeholders, we discovered that our target audience — U.S. Catholics and Catholic institutions — constitutes a significant portion of U.S. investors.</p>
        <SectionImage src="/images/sanctify/Users.png" alt="Target user demographics" />
        <p><strong>What are the user profiles and needs?</strong></p>
        <p>To get deep insights of Catholic investment habits, goals and preferences, we interviewed five participants and generated 3 user profiles.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">01</p>
            <p className="font-semibold mb-1">Catholic value</p>
            <p className="text-sm text-secondary">A Catholic investing app gives users immediate trust.</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">02</p>
            <p className="font-semibold mb-1">Display updates</p>
            <p className="text-sm text-secondary">Users will create an account and follow if there&apos;s motivation triggers and updates.</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">03</p>
            <p className="font-semibold mb-1">Financial guidance</p>
            <p className="text-sm text-secondary">Users would like professional help or guidance on which companies to invest in.</p>
          </div>
        </div>
        <SectionImage src="/images/sanctify/Personas.png" alt="User personas" />
        <SectionImage src="/images/sanctify/Personas-1.png" alt="User personas details" />
      </SectionText>
    ),
  },
  {
    id: "ideation",
    title: "Ideation",
    content: (
      <SectionText>
        <p><strong>Narrow down the design question</strong></p>
        <p>After digging into the data, we found three main factors causing low engagement: uncandid, complicated, and boring. Our design question became:</p>
        <blockquote className="border-l-4 border-accent pl-4 my-4 text-secondary italic">
          How might we design an informative, convenient and delightful mobile experience for users, where they can do purpose investing and screening?
        </blockquote>
        <SectionImage src="/images/sanctify/Goal.png" alt="Design goals" />
        <p><strong>Learn from mainstream investment apps</strong></p>
        <p>We examined six well-known investment apps, like Robinhood, Stash, and Ellevest. Key features we learned:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">01</p>
            <p className="font-semibold mb-1">Home as a hub</p>
            <p className="text-sm text-secondary">Put functions and overview on the surface for easy discovery.</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">02</p>
            <p className="font-semibold mb-1">Personalization</p>
            <p className="text-sm text-secondary">Smart portfolio or system recommendations tailored to each user.</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">03</p>
            <p className="font-semibold mb-1">Use illustrations</p>
            <p className="text-sm text-secondary">Bright colors and illustrations to increase user engagement.</p>
          </div>
        </div>
        <SectionImage src="/images/sanctify/Competitive Analysis.png" alt="Competitive analysis of investment apps" />
      </SectionText>
    ),
  },
  {
    id: "architecture",
    title: "Architecture",
    content: (
      <SectionText>
        <p><strong>Start from key path scenarios</strong></p>
        <p>The initial stage involved developing core path scenarios with screening steps. This enabled us to move quickly through wireframing and information architecture.</p>
        <SectionImage src="/images/sanctify/Kay path scenarios.png" alt="Key path scenarios" />
        <p><strong>Complete picture of the product</strong></p>
        <p>We held workshops to discuss and build the information architecture, generating the big picture of the flow including screening and related functions on each page.</p>
        <SectionImage src="/images/sanctify/IA.png" alt="Information architecture diagram" />
        <SectionImage src="/images/sanctify/Userflow.png" alt="User flow diagram" />
        <SectionImage src="/images/sanctify/Homepage User Flow.png" alt="Homepage user flow" />
      </SectionText>
    ),
  },
  {
    id: "design",
    title: "Design Development",
    content: (
      <SectionText>
        <p>We kept asking: <em>How can we transform the home into a versatile and personalized center, where people are enriched with faith-based information and can conveniently do purpose investing?</em></p>
        <p>Three primary design questions informed the strategy:</p>
        <p>1. What information sections need to be displayed?</p>
        <p>2. How to embed faith-based features into sections?</p>
        <p>3. How to provide a delightful and informative user experience?</p>
        <SectionImage src="/images/sanctify/Wireframe exploration-1.png" alt="Wireframe explorations" caption="Wireframe exploration - aligning user needs with business value" />
        <SectionImage src="/images/sanctify/Wireframe exploration-2.png" alt="Wireframe explorations continued" caption="Further wireframe iterations" />
        <SectionImage src="/images/sanctify/Mid-fi.png" alt="Mid-fidelity designs" caption="Mid-fi exploration - testing different visual effects with green and white space" />
        <SectionImage src="/images/sanctify/Final.png" alt="High-fidelity designs" caption="High-fi exploration with two rounds of user testing" />
        <SectionImage src="/images/sanctify/Final-2.png" alt="Final high-fidelity designs" caption="Refined final designs" />
      </SectionText>
    ),
  },
  {
    id: "final-solutions",
    title: "Final Solutions",
    content: (
      <SectionText>
        <p className="font-thicccboi text-xl font-medium tracking-[-0.02em]">Home as a versatile and personalized hub</p>
        <p className="font-semibold mt-6">From uncandid to informative</p>
        <p>50% of users were unsure how screening works. We proposed transparent screen reports, smart collections under FFV scorecard, and browsing through FFV score card collections.</p>
        <SectionImage src="/images/sanctify/1_Screen_reports_3.gif" alt="Screen reports solution" />
        <p className="font-semibold mt-6">From complicated to convenient</p>
        <p>We designed a convenient and quick login process, and incorporated popular market movers for easy investment channels.</p>
        <SectionImage src="/images/sanctify/2_Colelction.gif" alt="Collection and convenience solution" />
        <SectionImage src="/images/sanctify/4_Market_Mover.gif" alt="Market movers feature" />
        <p className="font-semibold mt-6">From boring to delightful</p>
        <p>Enjoy a delightful onboarding experience with appealing illustrations, leaving a positive, relaxing and professional impression.</p>
        <SectionImage src="/images/sanctify/3_Welcomeback.gif" alt="Welcome back experience" />
        <SectionImage src="/images/sanctify/5_New_1.gif" alt="New user onboarding" />
        <SectionImage src="/images/sanctify/6_getting.gif" alt="Getting started experience" />
      </SectionText>
    ),
  },
  {
    id: "visual-branding",
    title: "Visual & Branding",
    content: (
      <SectionText>
        <p>Using illustrations was one of the primary approaches to develop this app. We created and promoted a positive, just, and non-addictive investing environment aligned with the moral values of the business.</p>
        <p>We chose green as the primary color to symbolize growth, health, and the promotion of social and moral responsibilities.</p>
        <SectionImage src="/images/sanctify/Illustrative-1.png" alt="Illustrative design system" />
        <SectionImage src="/images/sanctify/Illustrative-2.png" alt="Illustration examples" />
        <SectionImage src="/images/sanctify/Design System.png" alt="Design system" />
        <SectionImage src="/images/sanctify/Deatils and color pallette.png" alt="Color palette and details" />
      </SectionText>
    ),
  },
  {
    id: "reflection",
    title: "Reflection",
    content: (
      <SectionText>
        <div className="space-y-6">
          <div>
            <p className="font-semibold">1. Addressing a Unique Market Need</p>
            <p>Sanctify fills a niche in the investment market, catering to those who seek to align their financial decisions with their faith.</p>
          </div>
          <div>
            <p className="font-semibold">2. Collaboration leads to greater impact</p>
            <p>Working alongside a talented team of designers and developers, each bringing their own perspectives and skills, was a lesson in the power of collaborative work.</p>
          </div>
          <div>
            <p className="font-semibold">3. Design combines technology and ethics</p>
            <p>This project showcases the ability to contribute to innovative, impactful, and user-centric digital solutions that align financial decisions with personal values.</p>
          </div>
        </div>
      </SectionText>
    ),
  },
];

export default function SanctifyPage() {
  return (
    <CaseStudyLayout
      title="Sanctify"
      subtitle="Launching a convenient and delightful investment app that lets you make well-informed decisions in line with Catholic values."
      tags={["B2C Fintech", "Award winning", "Launched in 2023"]}
      heroImage="/images/sanctify/Display.png"
      sections={sections}
      sidebar={{
        role: "UX Designer",
        teammates: ["Bing Liu (Lead)", "Amelia Wu", "Colette", "Sylvia", "Wenxin Li"],
        tools: ["Figma", "Illustrator", "User Survey"],
        timeline: "Jul 2022 - Nov 2022 (18 weeks)",
        client: "IWP Capital",
        awards: [
          "Winner | 2023 Red Dot - Design Concept (NDA)",
          "Finalist | 2023 iF Design Awards",
        ],
      }}
    />
  );
}
