"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 py-12 mt-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="text-2xl font-extrabold tracking-tight mb-2">
            Mythri<span className="text-[var(--color-primary)]">.</span>
          </Link>
          <p className="text-[var(--color-muted)] text-sm">
            © {new Date().getFullYear()} Mythri Potluri. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors ml-4"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
