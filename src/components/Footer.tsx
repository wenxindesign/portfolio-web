import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-accent italic">W</span>
          <span className="text-sm text-secondary">All rights reserved</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide">
          <a
            href="https://www.linkedin.com/in/wenxin-li-design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:wli@antigma.ai"
            className="text-secondary hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
