"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, BarChart3, PieChart, LineChart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--color-primary)] opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-[var(--color-primary)]">Business Analyst</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Turning Data Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Business Decisions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-lg leading-relaxed font-medium">
            Data and Business Analyst with 4+ years of experience turning business questions into measurable KPIs, predictive models, and executive-ready dashboards.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--color-secondary)] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              See Projects
              <ArrowRight size={20} />
            </a>
            <a
              href="/Mythri_Potluri_BA_AI.docx"
              className="flex items-center gap-2 bg-transparent text-[var(--color-foreground)] border-2 border-[var(--color-foreground)]/10 px-8 py-4 rounded-full hover:bg-[var(--color-foreground)]/5 transition-all font-semibold text-lg"
            >
              <Download size={20} />
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Headshot & Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 glass z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <Image 
              src="/profile.png"
              alt="Mythri Potluri"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 md:-left-10 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-white/20"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">30%</p>
              <p className="text-xs text-muted-foreground font-medium">Efficiency</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-0 md:-right-12 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-white/20"
          >
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 rounded-full text-cyan-600 dark:text-cyan-400">
              <PieChart size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground font-medium">UAT Compliance</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
