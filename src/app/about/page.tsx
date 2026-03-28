import Image from "next/image";

export const metadata = {
  title: "About | Wenxin Li",
  description: "Product designer with 4+ years experience. Red Dot and iF award winner. RISD MDes graduate.",
};

const highlights = [
  "4+ years of professional design experience, including two years as a product designer and two years with a background in landscape architecture and urban design.",
  "Previously launched B2B SaaS and B2C Fintech products from scratch.",
  "Won Red Dot and iF design awards, as well as landscape and urban design awards from BSLA and SCUP.",
  "Graduated with a Master's degree in Design from the Rhode Island School of Design (RISD) in 2019.",
];

const companies = [
  { name: "Antigma.ai", logo: "/images/about/logo-antigma.png" },
  { name: "Opus Clip", logo: "/images/about/logo-opus-clip.png" },
  { name: "IWP Capital", logo: "/images/about/logo-iwp.png" },
  { name: "Sasaki", logo: "/images/about/logo-sasaki.png" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero: Photo + Intro side by side */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16 items-start">
          {/* Left: Photo */}
          <div className="flex items-start justify-center lg:justify-start">
            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src="/images/about/photo.jpeg"
                alt="Wenxin Li"
                fill
                className="object-cover scale-[1.3]"
                style={{ objectPosition: "58% 30%" }}
                sizes="180px"
                priority
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-secondary uppercase tracking-wider mb-4">About</p>
            <h1 className="font-thicccboi text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.1] text-primary mb-6">
              Wen <span className="text-secondary font-normal text-3xl md:text-4xl">(Wenxin Li)</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              <span className="text-primary font-semibold">Product designer</span>
              <span className="text-secondary"> who turns complex systems into intuitive experiences.</span>
            </p>
            <p className="text-secondary text-base leading-relaxed">
              Currently designing AI tools at <span className="text-primary font-medium">Antigma.ai</span>. With a background spanning product design, landscape architecture, and urban design, I bring a unique spatial and systems perspective to digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16">
        <hr className="border-black/10 mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <h2 className="font-thicccboi text-sm uppercase tracking-wider text-secondary">
            Highlights
          </h2>
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <p key={i} className="text-base leading-relaxed text-secondary">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-16">
        <hr className="border-black/10 mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <h2 className="font-thicccboi text-sm uppercase tracking-wider text-secondary">
            Worked with
          </h2>
          <div className="flex flex-wrap items-center gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className={`relative h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                  company.name === "Antigma.ai" ? "w-56 h-16" : "w-32"
                }`}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.name === "Antigma.ai" ? 220 : 120}
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
