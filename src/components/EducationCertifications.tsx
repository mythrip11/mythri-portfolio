"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Business Analytics",
    institution: "University of New Haven",
    location: "Connecticut, USA",
    date: "December 2025",
    gpa: "3.80/4"
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "Westin School of Business (Krishna University)",
    location: "AP, India",
    date: "July 2020",
    gpa: "3.80/4"
  }
];

const certifications = [
  "Business Analysis: Business Analytics using SQL and Python (2025)",
  "Data Visualization: Business Analytics using Power BI and Tableau (2024)",
  "Productivity: MS Office Specialist (Advanced Excel & PowerPoint) (2023)"
];

export default function EducationCertifications() {
  return (
    <section className="py-24 relative bg-[var(--color-primary)]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass border border-black/5 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-[var(--color-primary)]/30 transition-all">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap size={64} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-[var(--color-muted)] font-medium mb-4">{edu.institution} — {edu.location}</p>
                  <div className="flex flex-wrap gap-4 items-center justify-between mt-auto">
                    <span className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">GPA: {edu.gpa}</span>
                    <span className="text-sm text-[var(--color-muted)] font-semibold">{edu.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-xl">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Certifications</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all">
                  <div className="mt-1 shrink-0">
                    <Award size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <p className="font-semibold text-[var(--color-foreground)]/90 leading-snug">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
