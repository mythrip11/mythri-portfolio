"use client";

import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Languages & Analytics",
    skills: ["SQL", "Python", "R", "Advanced Excel", "Statistical Modeling", "Forecasting", "Classification", "Data Mining", "Exploratory Data Analysis", "A/B Testing", "Data Storytelling"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Generative AI", "LLMs", "Prompt Engineering", "RAG", "Hugging Face", "Vector Embeddings", "AI Agents & Assistants", "AI Workflow Automation (n8n)", "scikit-learn"]
  },
  {
    title: "BI, Data & Cloud",
    skills: ["Power BI", "Tableau", "R Shiny", "KPI Design", "ETL", "Data Warehousing", "Data Modeling", "Data Governance", "SQL Server", "MySQL", "MongoDB", "AWS", "Azure", "GCP"]
  },
  {
    title: "Business Analysis & Tools",
    skills: ["Requirements Analysis", "BRD", "FRD", "User Stories", "Process Mapping", "Gap Analysis", "UAT", "SDLC", "Agile", "Scrum", "Jira", "Confluence", "Visio"]
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
