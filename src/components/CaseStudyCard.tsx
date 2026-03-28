"use client";

import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  tags: string[];
  title: string;
  description: string;
  awards?: string[];
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  placeholder?: boolean;
}

export default function CaseStudyCard({
  tags,
  title,
  description,
  awards,
  href,
  imageSrc,
  imageAlt,
  placeholder,
}: CaseStudyCardProps) {
  const inner = (
    <div className="group/card h-full bg-white rounded-2xl overflow-hidden border border-black/[0.04] transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(91,63,255,0.12)] hover:-translate-y-1 flex flex-col">
      {/* Image Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#f8f7fb] flex-shrink-0">
        {placeholder ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8e6f0] to-[#d8d5e6] flex items-center justify-center">
            <span className="text-sm text-secondary tracking-wide">Coming Soon</span>
          </div>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        ) : null}
      </div>

      {/* Text Content */}
      <div className="px-6 py-5 lg:px-7 lg:py-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-2.5">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs tracking-wide text-secondary uppercase">
              {i > 0 && <span className="text-secondary/40 mr-2">/</span>}
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-thicccboi text-lg lg:text-xl font-semibold text-primary tracking-[-0.01em] mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="mb-3 space-y-0.5">
            {awards.map((award, i) => (
              <p key={i} className="text-xs text-secondary">
                <span className="font-semibold text-primary">{award.split("|")[0].trim()}</span>
                {award.includes("|") && (
                  <span> · {award.split("|")[1].trim()}</span>
                )}
              </p>
            ))}
          </div>
        )}

        {/* View Project */}
        {!placeholder && (
          <div className="flex items-center gap-1.5 text-primary font-medium text-sm pt-1 mt-auto transition-all duration-300 group-hover/card:text-[#5B3FFF] group-hover/card:gap-2.5">
            View project
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (placeholder) {
    return <div className="block h-full">{inner}</div>;
  }

  return (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  );
}
