import Image from "next/image";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  heroImage?: string;
  sections: Section[];
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
  sections,
  sidebar,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 lg:px-8 pt-12 pb-8">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-secondary leading-relaxed max-w-4xl mb-6">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
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
      {heroImage && (
        <section className="max-w-content mx-auto px-6 lg:px-8 pb-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface shadow-md">
            <Image
              src={heroImage}
              alt={`${title} hero image`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </section>
      )}

      {/* Content Area with Sidebar Navigation */}
      <div className="max-w-content mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
          {/* Sticky Sidebar Nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-secondary hover:text-primary transition-colors py-1"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#top"
                className="block text-sm text-accent hover:text-accent/80 transition-colors py-1 mt-4"
              >
                Back to top
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Project Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 bg-surface rounded-xl border border-black/5">
              {sidebar.role && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Role</p>
                  <p className="text-sm font-medium">{sidebar.role}</p>
                </div>
              )}
              {sidebar.timeline && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Timeline</p>
                  <p className="text-sm font-medium">{sidebar.timeline}</p>
                </div>
              )}
              {sidebar.client && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Client</p>
                  <p className="text-sm font-medium">{sidebar.client}</p>
                </div>
              )}
              {sidebar.tools && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Tools</p>
                  <p className="text-sm font-medium">{sidebar.tools.join(", ")}</p>
                </div>
              )}
              {sidebar.teammates && sidebar.teammates.length > 0 && (
                <div className="col-span-2">
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Teammates</p>
                  <p className="text-sm font-medium">{sidebar.teammates.join(", ")}</p>
                </div>
              )}
              {sidebar.awards && sidebar.awards.length > 0 && (
                <div className="col-span-2">
                  <p className="text-xs uppercase tracking-wider text-secondary mb-1">Awards</p>
                  {sidebar.awards.map((award, i) => (
                    <p key={i} className="text-sm font-medium">{award}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
                <h2 className="font-display text-3xl font-bold mb-6">{section.title}</h2>
                <div className="prose prose-lg max-w-none text-primary/80 leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
