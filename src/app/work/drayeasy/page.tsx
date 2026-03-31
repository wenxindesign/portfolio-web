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
        <p><strong>Background</strong></p>
        <p>DrayEasy is a digital quoting and booking platform designed to assist freight forwarders and cargo owners in finding reliable logistics supply chains for transporting goods and containers across the United States.</p>
        <p><strong>Challenge</strong></p>
        <p>Users are unable to complete the necessary steps for cargo transportation through the platform. Due to the technically oriented visual and structural design of the website, users find it difficult to complete the entire journey from searching to comparing rates and booking.</p>
        <SectionImage src="/images/drayeasy/overview.png" alt="Original DrayEasy Homepage" caption="Original Homepage" />
        <p><strong>Goal</strong></p>
        <p>Our high level principle is redesign the user portal so that customers can rely on it for rate search, rate comparing and booking. With specific goals as follows:</p>
        <p>1. Allow users input search information conveniently</p>
        <p>2. Understand and compare rates intuitively</p>
        <p>3. Place orders with reliability</p>
        <p><strong>My role</strong></p>
        <p>Throughout the project, I collaborated with one product manager, one engineer, and one client representative. In the early stages, I participated in workshops for researching, ideating, and evaluating all features of the product. Starting from the wireframe stage, I, along with three other junior designers and one lead, dedicated ourselves to developing the rate comparing feature.</p>
        <p>My contributions included conducting research, forming customer insights & ideation, holding stakeholder meetings, performing usability testing, creating prototypes, and completing the design system.</p>
        <div className="bg-accent/5 rounded-xl p-6 my-6">
          <p className="font-thicccboi text-xl font-bold tracking-[-0.02em] text-accent mb-2">Post-launch Impact</p>
          <p>Increased order value by <strong>100%</strong> and search rate by <strong>62.7%</strong> within three months post-launch.</p>
        </div>
      </SectionText>
    ),
  },
  {
    id: "secondary-research",
    title: "Secondary Research",
    content: (
      <SectionText>
        <p><strong>Interview with stakeholders</strong></p>
        <p>Our design lead, three other designers, and I conducted a 60-minute interview with an MVP, a software engineer, and a client representative. The interview revealed key insights about the main user groups, product usage processes, and initial B2B product modification requirements and pain points.</p>
        <p>Three goals of the meeting:</p>
        <p>1. Understand type of targeted users;</p>
        <p>2. Understand the detail process of searching, rate comparing and booking;</p>
        <p>3. Gather client&apos;s pre-insights of ideas and user pain points.</p>
        <p><strong>Who needs DrayEasy?</strong></p>
        <p>DrayEasy is essential for Freight Forwarders (FF) and Cargo Owners who act as agents, organizing shipments for shippers. By researching, we learned the representative needs and concerns are:</p>
        <p>1. Spending a lot of time searching for the right routes and comparing prices;</p>
        <p>2. Often worry about the inaccuracy of the quoted prices, price fluctuations, and unreliable truckers;</p>
        <p>3. Hoping to be able to place orders directly on a particular website;</p>
        <p><strong>Pain points</strong></p>
        <p>We interviewed five people to better understand users&apos; emotions and mindsets when completing tasks—from searching and comparing to booking. Three pain points were identified:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">01</p>
            <p className="font-semibold mb-1">Not sure how to get started</p>
            <p className="text-sm text-secondary">&quot;When I opened the main page, I saw a lot of long blank fields and a small button, and I don&apos;t know how to start.&quot;</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">02</p>
            <p className="font-semibold mb-1">Beyond understanding</p>
            <p className="text-sm text-secondary">&quot;When I am comparing prices, there are many technical terms and abbreviations that I don&apos;t understand.&quot;</p>
          </div>
          <div className="bg-surface p-4 rounded-xl border border-black/5">
            <p className="font-semibold text-accent mb-1">03</p>
            <p className="font-semibold mb-1">Lack of efficiency</p>
            <p className="text-sm text-secondary">&quot;I need to spend a lot of time figuring out the relationship between the different pieces of information.&quot;</p>
          </div>
        </div>
        <p><strong>Reframe design question</strong></p>
        <blockquote className="border-l-4 border-accent pl-4 my-4 text-secondary italic">
          How do we design a more user-friendly portal that makes the process of searching, comparing, and booking more intuitive and efficient?
        </blockquote>
      </SectionText>
    ),
  },
  {
    id: "brainstorming",
    title: "Brainstorming",
    content: (
      <SectionText>
        <p><strong>Workshop 1 - Internal product critique & present</strong></p>
        <p>We conducted a quick session of product critique to gather all ideas of refining. I organized data into a sliding deck and presented to a cross functional team, making sure product visions and decisions were aligned.</p>
        <SectionImage src="/images/drayeasy/Internal Critic.png" alt="Internal product critique" />
        <p><strong>Workshop 2 - Competitive analysis</strong></p>
        <p>We learned from competitors how they perform on our priority features and gained valuable insights. We mainly looked into the user flow, information structure and visual.</p>
        <SectionImage src="/images/drayeasy/Competitve analysis-2.png" alt="Competitive analysis" />
      </SectionText>
    ),
  },
  {
    id: "ideation",
    title: "Ideation",
    content: (
      <SectionText>
        <p><strong>Organize ideas within the user flow framework</strong></p>
        <p>We began developing concepts and ideas, framing them within a process driven format. Subsequently, we voted, organized, and discussed the ideas on which we reached the highest consensus.</p>
        <SectionImage src="/images/drayeasy/Internal Critique-V3.png" alt="Ideas organized in user flow" />
        <p><strong>Refine ideas with customer value in mind</strong></p>
        <p>We then refined the ideas and solutions with a focus on empathy and customer value. This divergence-convergence ideation process helped us find the root problem and precisely meet users&apos; needs and capabilities.</p>
        <SectionImage src="/images/drayeasy/Ideation.png" alt="Ideation refinement" />
      </SectionText>
    ),
  },
  {
    id: "evaluative-workshop",
    title: "Evaluative Workshop",
    content: (
      <SectionText>
        <p><strong>Evaluate ideas with a cross-functional team</strong></p>
        <p>After ideation, I invited the PM, designers, and the CTO for an evaluative workshop. The purpose was to further evaluate these ideas, identify the most priority features, and discuss their technical feasibility for me to proceed with the design process.</p>
        <SectionImage src="/images/drayeasy/Evaluation.png" alt="Evaluative workshop results" />
      </SectionText>
    ),
  },
  {
    id: "layout-explore",
    title: "Layout Explore",
    content: (
      <SectionText>
        <p><strong>A layout that best assists users in intuitively comparing rates</strong></p>
        <p>Three other designers and I focused on creating low-fidelity wireframes for the rate comparison page. After discussing with the PM, we settled on a design that features four sections with cards, a map, and tables. This layout clearly displays the route, base rate, price range, and accessorial fees, following the logical comparison process before booking.</p>
        <SectionImage src="/images/drayeasy/Layout Explore.jpg" alt="Layout exploration wireframes" />
      </SectionText>
    ),
  },
  {
    id: "design-iteration",
    title: "Design Iteration",
    content: (
      <SectionText>
        <p><strong>01. Price range table of terminals</strong></p>
        <p>We conducted two moderated usability studies with five participants to test the mapping and tables. By recording and observing participants&apos; reactions and comments, we identified patterns and iterated on the designs. At every stage, we reported to the PM for discussion.</p>
        <p>The table showing the price range for each terminal aims to present a more accurate rate after checking the base rate card based on departures. After two rounds of iteration, the clients, CTO, and designers feel that the final table of price ranges is more comparable, digestible, and visually appealing.</p>
        <SectionImage src="/images/drayeasy/Iterations-table of price range.png" alt="Price range table iterations" />
        <p><strong>02. Accessorial charges of selected terminal</strong></p>
        <p>The accessorial charges table displays potential charges based on departure locations. Through discussions with stakeholders, we understood that these charges are often seen as less critical; they might not always apply and their costs are relatively small compared to the base rate. However, users wanted clearer information on the likelihood of being charged. User interviews revealed this discrepancy, prompting us to refine the design for a more reliable and user-friendly rate comparison experience.</p>
        <SectionImage src="/images/drayeasy/Iterations-table of accessorial charges.png" alt="Accessorial charges table iterations" />
        <p><strong>03. Interactive map</strong></p>
        <p>The interactive map visually displays routes, terminals, types of ports, and ramps, matching the content in the cards and tables. This makes it easier for users to compare information efficiently.</p>
        <p>During testing, users hoped the map would offer features like zoom-in with pop-up information when transitioning from cards to tables. However, after discussions with the CTO, we decided against this due to technical limitations posed by the map being controlled by a third-party.</p>
        <SectionImage src="/images/drayeasy/Iterations-interactive map.png" alt="Interactive map iterations" />
      </SectionText>
    ),
  },
  {
    id: "final-product",
    title: "Final Product",
    content: (
      <SectionText>
        <p><strong>Seamless access to route information and unconsciously compare prices</strong></p>
        <p>Main Features: Base Rate of Routes + Price Range for Terminals</p>
        <p>The base rate cards highlight departure places and their rates, while the price range table displays prices with added fees based on the terminal associated with the selected departure. Detailed features like saving to desktop, terminal codes, and transportation types were added to create a user-friendly rate comparison portal.</p>
        <SectionImage src="/images/drayeasy/20240220_Prototype/2.gif" alt="Rate comparison prototype" />
        <p><strong>Real-time detection of road information to help you choose the best route</strong></p>
        <p>Main Features: Interactive Map + Live Updates</p>
        <p>Create a data visualization map that provides real-time updates on traffic conditions, matching the content in the cards and tables. This makes it easier for users to compare information efficiently.</p>
        <p>Using the transferable skills I gained from Urban design, I led the team in using Mapbox and produced the final map. A minimalist approach enabled us to craft a more detailed base map.</p>
        <SectionImage src="/images/drayeasy/20240220_Prototype/3.gif" alt="Interactive map prototype" />
        <p><strong>We covered edge cases!</strong></p>
        <p>Make the rate reliable for two distinct cities</p>
        <p>Solution: Base rate in range</p>
        <p>When meeting with the stakeholders, one developer informed us that the base rate for two cities changes depending on the choice of terminal. In order to ensure that the main content of the card remains unchanged, we proposed to provide users with a basic price range specifically for these two cities. At the same time, in the table, we bundled terminals with the same additional fee.</p>
        <SectionImage src="/images/drayeasy/20240220_Prototype/4.gif" alt="Edge case solution prototype" />
      </SectionText>
    ),
  },
  {
    id: "bonus",
    title: "Bonus",
    content: (
      <SectionText>
        <p><strong>A homepage encourages exploration</strong></p>
        <p>Main Features: Data Promotion + Popular Routes Recommendation</p>
        <p>When customers are unfamiliar with the software or business processes, these functions guide them to choose the system-recommended route, creating a comfortable and user-friendly searching experience.</p>
        <SectionImage src="/images/drayeasy/20240220_Prototype/1.gif" alt="Homepage exploration prototype" />
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
            <p className="font-semibold">1. Quickly understanding domain knowledge in B2B product is the key</p>
            <p>Grasping domain knowledge quickly is crucial to identify core user needs and align solutions with business objectives. Without knowledge in joint transportation, it was hard for me to understand the product even compared to users, impacting our user research judgment. So, before conducting surveys and interviews, we immediately held meetings with stakeholders to inquire about domain knowledge, gather market research, clarify terminology, and internally test and critique the product.</p>
          </div>
          <div>
            <p className="font-semibold">2. Affordances in user interfaces enhance fluid user flow</p>
            <p>In the search field, we employed explicit affordances to make information and buttons discoverable and understandable. In the terminal-related table, we hid the additional fee under a dropdown menu. Overall, we adopted familiar UI patterns, like cards and price range bars, to instinctively aid users in comparisons and inquiries.</p>
          </div>
          <div>
            <p className="font-semibold">3. Communication between designers, developers, and engineers</p>
            <p>The product redesign was based on a very basic test version, so 90% of the interface changed. Despite numerous meetings, we had to forgo some features due to technical constraints. The final launched version had some differences from the hi-fi version. While some aspects were overlooked for the sake of progress, proactive follow-ups led us to conduct further iterative tests.</p>
          </div>
          <div>
            <p className="font-semibold">4. Balancing User Needs and Business Goals</p>
            <p>Given development time constraints, we prioritized features by balancing user needs and business objectives. Designing effective B2B SaaS products involves carefully weighing user requirements against the need to produce results that meet business expectations and drive revenue.</p>
          </div>
        </div>
      </SectionText>
    ),
  },
];

export default function DrayEasyPage() {
  return (
    <CaseStudyLayout
      title={<><span className="text-primary font-semibold">DrayEasy</span><br /><span className="text-secondary font-normal">Instant Quotes for Freight</span></>}
      subtitle="Revamping the web platform and empowering freight agent's logistic journey with instant quotes."
      tags={["B2B SaaS", "Transportation", "Logistic Supply Chain", "Launched in 2023"]}
      heroImage="/images/drayeasy/Display.png"
      sections={sections}
      sidebar={{
        role: "Product Designer",
        teammates: ["Bing Liu (Lead)", "Wenxin Li (Me)", "Sherry Wei", "Su Wang", "Huiyi An"],
        tools: ["Figma", "Mapbox", "Adobe Illustrator", "Photoshop", "User Interview"],
        timeline: "Mar 2023 - Jun 2023 (16 weeks), Launched Sep 2023",
        client: "DrayEasy Inc.",
      }}
    />
  );
}
