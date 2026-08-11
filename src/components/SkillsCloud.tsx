"use client";

import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Business Analysis & Methodologies",
    skills: ["Requirements Analysis", "BRD", "FRD", "SDLC", "Agile", "Scrum", "Waterfall", "UAT", "Business Process Mapping"]
  },
  {
    title: "Data & Analytics",
    skills: ["Business Systems Analysis", "ETL", "Data Warehousing", "Data Storytelling"]
  },
  {
    title: "Languages & Programming",
    skills: ["Python", "R", "SQL"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Jira", "Visio", "Power BI", "Tableau", "Excel (Advanced)", "R Shiny", "Confluence"]
  },
  {
    title: "Databases & Cloud",
    skills: ["Microsoft SQL Server", "MySQL", "NoSQL", "MongoDB", "AWS", "Google Cloud (GCP)", "Microsoft Azure"]
  }
];

export default function SkillsCloud() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            A comprehensive toolkit designed to translate complex business needs into data-driven solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl glass border border-black/5 dark:border-white/10 hover:border-[var(--color-primary)]/30 transition-colors shadow-lg ${idx === skillsCategories.length - 1 ? 'lg:col-span-2' : ''}`}
            >
              <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)]">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl bg-background border border-black/10 dark:border-white/10 text-sm font-semibold shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/50 cursor-default transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
