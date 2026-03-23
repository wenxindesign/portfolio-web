import Image from "next/image";

const highlights = [
  {
    text: "4+ years of professional design experience",
    detail:
      ", including two years as a product designer and two years with a background in landscape architecture and urban design.",
    bold: true,
  },
  {
    text: "Previously launched ",
    detail: "B2B SaaS and B2C Fintech",
    suffix: " products from scratch.",
    bold: false,
  },
  {
    text: "Won ",
    detail: "Red Dot and iF design awards",
    suffix:
      ", as well as landscape and urban design awards from BSLA and SCUP.",
    bold: false,
  },
  {
    text: "Graduated with a Master's degree in Design from the ",
    detail: "Rhode Island School of Design (RISD)",
    suffix: " in 2019.",
    bold: false,
  },
];

const companies = [
  { name: "Opus Clip", logo: "/images/about/logo-opus-clip.png" },
  { name: "DrayEasy", logo: "/images/about/logo-drayeasy.png" },
  { name: "IWP Capital", logo: "/images/about/logo-iwp.png" },
  { name: "Sasaki", logo: "/images/about/logo-sasaki.png" },
  { name: "RISD", logo: "/images/about/logo-risd.png" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Photo */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-12 pb-16">
        <div className="flex justify-end">
          <div className="relative w-full max-w-xl aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/photo.jpeg"
              alt="Wenxin Li - portrait photo in mountains"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <h2 className="font-thicccboi text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-primary">
            Highlights
          </h2>
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <p key={i} className="text-base leading-relaxed text-primary/80">
                <span>- </span>
                {item.bold ? (
                  <>
                    <strong>{item.text}</strong>
                    {item.detail}
                  </>
                ) : (
                  <>
                    {item.text}
                    <strong>{item.detail}</strong>
                    {item.suffix}
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
          <h2 className="font-thicccboi text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-primary leading-snug">
            Companies/<br />Organizations<br />I&apos;ve worked with
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="relative h-16 w-36 bg-surface rounded-lg flex items-center justify-center p-3 border border-black/5"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
