"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-extrabold tracking-tight">
          Mythri<span className="text-[var(--color-primary)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-foreground)]/80 hover:text-[var(--color-primary)] transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
          
          {mounted && (
             <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          <a
            href="/Mythri_Potluri_BA_AI.docx"
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--color-secondary)] transition-all shadow-lg hover:shadow-xl text-sm font-semibold"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass bg-background/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 shadow-xl border-t border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {mounted && (
             <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium"
            >
              Toggle {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
