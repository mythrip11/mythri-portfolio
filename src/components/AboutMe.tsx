"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Requirement Gathering & Engineering",
  "Stakeholder Communication & Management",
  "Agile & Scrum Methodologies",
  "Business Process Mapping & Optimization",
  "Data Analytics & Decision Support",
  "Business Intelligence (BI) Strategy",
];

const tools = [
  "SQL", "Python", "Power BI", "Tableau", "Jira", "Visio", "Confluence"
];

const documents = [
  "BRD", "FRD", "User Stories", "UAT Scenarios"
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            Bridging the gap between business needs and technical solutions through meticulous analysis, data-driven strategy, and seamless execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">My Methodology</h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-lg">
              I specialize in end-to-end business analysis—from discovering core problems during stakeholder workshops to mapping complex AS-IS/TO-BE processes, and ultimately delivering actionable insights. My focus is always on driving measurable business impact.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed text-lg">
              By leveraging advanced analytics and agile frameworks, I ensure that cross-functional teams are aligned, requirements are crystal clear, and products are delivered efficiently with minimal risk.
            </p>
            
            <div className="mt-4 p-6 glass rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/5">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                Key Strengths
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-2 text-sm text-[var(--color-foreground)]/80 font-medium">
                    <CheckCircle2 size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Skills/Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* Toolkit */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Toolkit</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-full text-sm font-semibold bg-background border-2 border-black/5 dark:border-white/10 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-default shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Documentation Mastery</h3>
              <div className="flex flex-wrap gap-3">
                {documents.map((doc) => (
                  <span key={doc} className="px-4 py-2 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 shadow-sm cursor-default hover:bg-[var(--color-primary)] hover:text-white transition-all">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Lifecycle */}
            <div className="mt-4">
               <h3 className="text-xl font-bold mb-6 text-[var(--color-muted)]">Project Lifecycle Focus</h3>
               <div className="relative border-l-2 border-[var(--color-primary)]/30 pl-6 pb-2 space-y-6">
                 <div className="relative">
                   <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-[var(--color-primary)]"></div>
                   <h4 className="font-bold text-md">Problem Definition</h4>
                   <p className="text-sm text-[var(--color-muted)]">Identifying root causes with stakeholders.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-[var(--color-primary)]"></div>
                   <h4 className="font-bold text-md">Requirement Engineering</h4>
                   <p className="text-sm text-[var(--color-muted)]">Crafting precise, testable user stories.</p>
                 </div>
                 <div className="relative">
                   <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"></div>
                   <h4 className="font-bold text-md text-[var(--color-primary)]">Solution Delivery & Impact</h4>
                   <p className="text-sm text-[var(--color-muted)]">Overseeing UAT and tracking business metrics.</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
