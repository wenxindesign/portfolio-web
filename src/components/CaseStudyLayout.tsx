import Image from "next/image";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  fullBleed?: boolean;
  dark?: boolean;
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
    <>
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
        <h1 className="font-thicccboi text-4xl md:text-5xl lg:text-[56px] tracking-[-0.025em] leading-[1.08] mb-3">
          {title}
        </h1>
        <p className="font-thicccboi text-base md:text-lg lg:text-xl text-secondary font-normal leading-[1.5] max-w-3xl mb-5">
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
        <section className="w-full overflow-hidden" style={{ backgroundColor: heroBgColor || '#0a1628' }}>
          <div className="relative w-full" style={{ aspectRatio: '3200/1080' }}>
            <Image
              src={heroImage}
              alt="Case study hero image"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-16">
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

      </div>
    </div>

    {/* Sections - rendered at top level to allow full-bleed */}
    {sections.map((section) => (
      section.fullBleed ? (
        <section
          key={section.id}
          id={section.id}
          className={`w-full scroll-mt-24 ${section.dark ? 'bg-[#1A1A1A]' : 'bg-surface'}`}
          style={{ marginTop: '120px' }}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16 md:py-20">
            <h2 className={`font-thicccboi text-[14px] font-bold mb-2 uppercase tracking-wider ${section.dark ? 'text-[#8B7BFF]' : 'text-[#5B3FFF]'}`}>{section.title}</h2>
            <div className={`prose prose-lg max-w-none leading-[1.6] [&>*:first-child]:mt-0 [&>*:first-child>*:first-child]:mt-0 [&_h3:first-child]:mt-0 ${section.dark ? 'text-white/70 [&_h3]:text-white [&_strong]:text-white [&_p]:text-white/70' : 'text-secondary'}`}>
              {section.content}
            </div>
          </div>
        </section>
      ) : (
        <div key={section.id} className="max-w-[1440px] mx-auto px-6 lg:px-[120px]" style={{ marginTop: '120px' }}>
          <section id={section.id} className="scroll-mt-24">
            <h2 className="font-thicccboi text-[14px] font-bold text-[#5B3FFF] mb-2 uppercase tracking-wider">{section.title}</h2>
            <div className="prose prose-lg max-w-none text-secondary leading-[1.6] [&>*:first-child]:mt-0 [&>*:first-child>*:first-child]:mt-0 [&_h3:first-child]:mt-0">
              {section.content}
            </div>
          </section>
        </div>
      )
    ))}
    </>
  );
}
