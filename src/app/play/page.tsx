import Image from "next/image";

export const metadata = {
  title: "Play | Wenxin Li",
  description: "Design, research & paint places where you feel a presence.",
};

const projects = [
  {
    title: "Changchun Middle Mt. Framework Plan",
    subtitle: "Work done at Sasaki",
    award: "Honor | 2023 BSLA",
    tags: ["Hybrid Mapping", "GIS Calculating", "Data Visualize"],
    description:
      "This image depicts the overall vision for the Changchun Middle Water Landscape Master Plan. Through GIS research and ecological analysis, we aim to reconnect fragmented landscapes using landscape ecological restoration methods, injecting vitality into the landscape.",
    image: "/images/play-changchun.jpg",
  },
  {
    title: "Perceptual Physicality of Space & Color",
    subtitle: "Work done at RISD",
    award: null,
    tags: ["Research on Cognitive Science"],
    description:
      'This artwork captures the breathtaking essence of the subject. Utilizing metrics to delve into cognition via phenomenology, spatial concepts, art, and perceptual psychology, this map presents a comprehensive understanding of vitality, relationships, and essence.',
    image: "/images/play-perception.jpg",
  },
  {
    title: "Recording the Chinese Historical Landscape",
    subtitle: "Work done at Nanjing Forestry University",
    award: null,
    tags: ["The Initial of My Story: Painting"],
    description:
      "In 2014, I used a syringe pen to capture corners of classical gardens. Since then, I\u2019ve gradually begun to sense the power that time bestows upon space. The activities of people within historical events, and the events they generate, in turn, endow time with meaning.",
    image: "/images/play-chinese-landscape.jpg",
  },
];

export default function PlayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 lg:px-8 pt-16 pb-20">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl">
          <span className="text-secondary italic">I also design, research & paint </span>
          <span className="text-primary font-bold">places</span>
        </h1>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-secondary mt-2">
          where you feel a <span className="text-primary font-bold">presence</span>.
        </p>
        <p className="text-secondary mt-4 max-w-3xl text-lg">
          Uncover the <strong>perception</strong> and <strong>physicality</strong> of space by generating visualized mapping, data, model, artwork, and more.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-content mx-auto px-6 lg:px-8 pb-16 space-y-20">
        {projects.map((project, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
            {/* Left: Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-secondary mb-1">{project.subtitle}</p>
              {project.award && (
                <p className="text-sm text-accent font-medium mb-3">{project.award}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-background border border-black/5 rounded-full text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-secondary leading-relaxed">{project.description}</p>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface border border-black/5 shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </div>
        ))}
      </section>

      {/* End */}
      <section className="max-w-content mx-auto px-6 lg:px-8 py-16 text-center">
        <p className="font-display text-2xl text-secondary">The End</p>
        <p className="text-secondary mt-2">Thanks for Reading.</p>
      </section>
    </div>
  );
}
