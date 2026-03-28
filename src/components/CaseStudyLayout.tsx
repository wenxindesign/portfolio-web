import Image from "next/image";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ImpactItem {
  number: string;
  label: string;
}

interface CaseStudyLayoutProps {
  title: React.ReactNode;
  subtitle: string;
  tags: string[];
  heroImage?: string;
  heroFullBleed?: boolean;
  heroBgColor?: string;
  sections: Section[];
  atAGlance?: React.ReactNode;
  impact?: ImpactItem[];
  sidebar: {
    role?: string;
    teammates?: string[];
    tools?: string[];
    timeline?: string;
    client?: string;
    awards?: string[];
  };
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  heroImage,
  heroFullBleed,
  heroBgColor,
  sections,
  atAGlance,
  impact,
  sidebar,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Sticky Sidebar Nav - fixed to left edge, outside body padding */}
      <aside className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-40 w-[160px] pl-6">
        <div className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-base capitalize text-secondary hover:text-primary transition-colors py-1"
            >
              {section.title}
            </a>
          ))}
          <a
            href="#top"
            className="block text-base capitalize text-accent hover:text-accent/80 transition-colors py-1 mt-4"
          >
            Back to top
          </a>
        </div>
      </aside>

      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-24 pb-1">
        <h1 className="font-thicccboi text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1] mb-4">
          {title}
        </h1>
        <p className="font-thicccboi text-lg md:text-xl lg:text-2xl text-secondary font-normal leading-[1.4] max-w-4xl mb-5">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-3 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm border border-black/15 rounded-full text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      {heroImage && heroFullBleed ? (
        <section className="w-full" style={{ backgroundColor: heroBgColor || '#0a1628' }}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
            <div className="relative w-full aspect-video">
              <Image
                src={heroImage}
                alt="Case study hero image"
                fill
                className="object-contain"
                sizes="(max-width: 1440px) 100vw, 1200px"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>
      ) : heroImage ? (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0a1628] shadow-md">
            <Image
              src={heroImage}
              alt="Case study hero image"
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1200px"
              priority
              unoptimized
            />
          </div>
        </section>
      ) : null}

      {/* Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-16 pb-16">
        {/* At-a-Glance */}
        {atAGlance && (
          <div className="mb-8">
            <h2 className="font-thicccboi text-[18px] font-semibold text-primary mb-2.5">At-A-Glance</h2>
            <div className="text-secondary text-[18px] leading-[1.4]">{atAGlance}</div>
          </div>
        )}

        {/* Project Info */}
        <div className="flex justify-between mb-8">
          {sidebar.role && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[18px] font-semibold text-primary">Role</p>
              <p className="text-[16px] text-secondary">{sidebar.role}</p>
            </div>
          )}
          {sidebar.teammates && sidebar.teammates.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[18px] font-semibold text-primary">Team</p>
              <p className="text-[16px] text-secondary">{sidebar.teammates.join(", ")}</p>
            </div>
          )}
          {sidebar.timeline && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[18px] font-semibold text-primary">Timeline</p>
              <p className="text-[16px] text-secondary">{sidebar.timeline}</p>
            </div>
          )}
          {sidebar.client && (
            <div className="flex flex-col gap-2.5">
              <p className="text-[18px] font-semibold text-primary">Client</p>
              <p className="text-[16px] text-secondary">{sidebar.client}</p>
            </div>
          )}
          {sidebar.awards && sidebar.awards.length > 0 && (
            <div className="flex flex-col gap-2.5 col-span-2">
              <p className="text-[18px] font-semibold text-primary">Awards</p>
              {sidebar.awards.map((award, i) => (
                <p key={i} className="text-[16px] text-secondary">{award}</p>
              ))}
            </div>
          )}
        </div>

        {/* Impact */}
        {impact && impact.length > 0 && (
          <div className="mb-4">
            <h2 className="font-thicccboi text-[18px] font-semibold text-primary mb-1.5">Impact</h2>
            <div className="flex justify-between">
              {impact.map((item, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <p className="font-thicccboi text-[35px] font-bold text-[#5B3FFF]">{item.number}</p>
                  <p className="text-[16px] text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-20 mb-10 scroll-mt-24 first:mt-0">
            <h2 className="font-thicccboi text-[14px] font-bold text-[#5B3FFF] mb-2 uppercase tracking-wider">{section.title}</h2>
            <div className="prose prose-lg max-w-none text-secondary leading-[1.6] [&>*:first-child]:mt-0 [&>*:first-child>*:first-child]:mt-0 [&_h3:first-child]:mt-0">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
