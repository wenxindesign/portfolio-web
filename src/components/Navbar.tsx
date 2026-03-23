"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const caseStudies = [
    { name: "DrayEasy", href: "/work/drayeasy" },
    { name: "Sanctify", href: "/work/sanctify" },
    { name: "Opus Clip", href: "/work/opus-clip" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/40 backdrop-blur-sm border-b border-black/5">
      <div className="w-full px-6 lg:px-24 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <span className="text-2xl font-semibold" style={{ fontFamily: "'Caveat', cursive" }}>
            <span className="text-accent/70 text-3xl">W</span>
            <span className="text-primary">enxin Li</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {/* Case Study Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCaseStudyOpen(true)}
            onMouseLeave={() => setCaseStudyOpen(false)}
          >
            <button
              className={`py-2 transition-colors hover:text-primary ${
                pathname.startsWith("/work") ? "text-primary font-semibold" : "text-secondary"
              }`}
            >
              CASE STUDY
            </button>
            {caseStudyOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-surface rounded-lg shadow-lg border border-black/5 py-2 min-w-[180px]">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.href}
                      href={study.href}
                      className={`block px-4 py-2.5 text-sm normal-case tracking-normal transition-colors hover:bg-background ${
                        isActive(study.href) ? "text-primary font-semibold" : "text-secondary"
                      }`}
                    >
                      {study.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/play"
            className={`py-2 transition-colors hover:text-primary ${
              isActive("/play") ? "text-primary font-semibold" : "text-secondary"
            }`}
          >
            Play
          </Link>

          <Link
            href="/about"
            className={`py-2 transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary font-semibold" : "text-secondary"
            }`}
          >
            About
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-secondary transition-colors hover:text-primary"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-[1.5px] bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block h-[1.5px] bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-black/5 px-6 py-4">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-secondary mb-1">Case Study</p>
            {caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="pl-3 py-1 text-sm text-primary hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {study.name}
              </Link>
            ))}
            <hr className="my-2 border-black/5" />
            <Link href="/play" className="py-1 text-sm uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Play</Link>
            <Link href="/about" className="py-1 text-sm uppercase tracking-wide" onClick={() => setMobileOpen(false)}>About</Link>
            <a href="/resume.pdf" target="_blank" className="py-1 text-sm uppercase tracking-wide">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
}
