"use client";

import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  tags: string[];
  title: string;
  description: string;
  awards?: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CaseStudyCard({
  tags,
  title,
  description,
  awards,
  href,
  imageSrc,
  imageAlt,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-surface rounded-2xl overflow-hidden border border-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-[400px]">
          {/* Text Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center overflow-hidden">
            {/* Tags */}
            <div className="flex items-center gap-3 mb-3">
              {tags.map((tag, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-secondary/40 mr-3">---</span>}
                  <span className="text-sm text-secondary">{tag}</span>
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-thicccboi text-2xl lg:text-[1.7rem] font-semibold text-primary tracking-[-0.02em] mb-3 leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-primary text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Awards */}
            {awards && awards.length > 0 && (
              <div className="mb-4 space-y-1">
                {awards.map((award, i) => (
                  <p key={i} className="text-sm text-secondary">
                    <span className="font-semibold italic">{award.split("|")[0].trim()}</span>
                    {award.includes("|") && (
                      <span> | {award.split("|")[1].trim()}</span>
                    )}
                  </p>
                ))}
              </div>
            )}

            {/* View Project Link */}
            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-accent transition-colors">
              View project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-background">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
