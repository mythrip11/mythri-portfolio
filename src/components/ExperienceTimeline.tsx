"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Calendar, CheckCircle } from "lucide-react";

const experiences = [
  {
    role: "Data Analyst",
    company: "InfoSoftSol",
    location: "Birch Run, Michigan, USA",
    duration: "May 2025 – Present",
    metrics: [
      { label: "Reporting Requests Reduced", value: "30%", icon: TrendingUp },
      { label: "Forecast Accuracy Improved", value: "18%", icon: Calendar },
      { label: "KPI Visibility", value: "10+", icon: CheckCircle },
    ],
    achievements: [
      "Architected and maintained 10+ self-service dashboards in Power BI, Tableau, and R Shiny, cutting ad-hoc reporting requests by 30% and improving executive KPI visibility.",
      "Partnered with cross-functional stakeholders to translate business questions into measurable KPIs, consolidating data from 5+ source systems into analysis-ready datasets for weekly leadership reporting.",
      "Engineered and optimized SQL queries and ETL pipelines, reducing average report refresh time by 40% and enabling faster, data-driven decision-making.",
      "Built statistical and predictive models in R and Python, including forecasting and classification, improving forecast accuracy by 18% and supporting planning decisions.",
      "Conducted exploratory data analysis to uncover trends and actionable insights, presenting data stories to both technical and non-technical audiences to align cross-functional teams.",
    ]
  },
  {
    role: "Risk Information Systems Specialist",
    company: "Udbhata Technologies",
    location: "Hyderabad, India",
    duration: "April 2023 – November 2023",
    metrics: [
      { label: "Revision Reduction", value: "25%", icon: TrendingUp },
      { label: "Validation Time Saved", value: "30%", icon: Calendar },
      { label: "UAT Compliance", value: "100%", icon: CheckCircle },
    ],
    achievements: [
      "Elicited and documented BRDs and FRDs across 3+ stakeholder groups, reducing requirement revision cycles by 25%.",
      "Owned end-to-end Jira backlog management for an Agile team of 8, decomposing 40+ complex requirements into sprint-ready user stories.",
      "Conducted gap analysis mapping As-Is and To-Be processes in Visio, driving a 15% reduction in risk-reporting turnaround time.",
      "Automated financial data validation workflows using SQL Server and Excel macros, cutting manual validation time by 30%.",
      "Co-led UAT planning and execution with QA teams across 4 release cycles, achieving 100% compliance sign-off with zero critical defects.",
    ]
  },
  {
    role: "Business & Marketing Analyst",
    company: "Prominent Overseas Careers",
    location: "Hyderabad, India",
    duration: "August 2020 – October 2022",
    metrics: [
      { label: "Lead Conversion", value: "+12%", icon: TrendingUp },
      { label: "Efficiency Gain", value: "20%", icon: Calendar },
      { label: "CPL Reduction", value: "15%", icon: TrendingUp },
    ],
    achievements: [
      "Conducted systems analysis and campaign audits across 5+ digital channels, defining KPIs adopted by senior leadership.",
      "Partnered with web development teams to prioritize 12 functional enhancements based on competitive analysis, improving site engagement.",
      "Built A/B testing frameworks in SQL and Python, iterating on UI/UX and driving a 12% increase in lead conversion rates.",
      "Developed Tableau dashboards consolidating cross-channel marketing data, eliminating 8+ hours/week of manual reporting.",
      "Analyzed customer segmentation using SQL and Excel to identify high-value cohorts, reducing cost-per-lead by 15%.",
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[var(--color-primary)]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            A proven track record of driving operational efficiency, translating requirements, and delivering measurable business outcomes.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full opacity-30"></div>

          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex w-full"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-11px] w-6 h-6 rounded-full bg-background border-4 border-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)] z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="w-full pl-8">
                  <div className="p-8 rounded-3xl glass border border-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-300 shadow-xl bg-background/80">
                    <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)]">
                      <Briefcase size={20} />
                      <span className="font-bold text-sm tracking-wider uppercase">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-[var(--color-muted)] font-medium mb-6">{exp.company} — {exp.location}</p>
                    
                    {/* Metrics Grid */}
                    <div className={`grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10`}>
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <metric.icon size={18} className="mx-auto mb-1 text-[var(--color-accent)]" />
                          <p className="text-xl font-extrabold text-[var(--color-foreground)]">{metric.value}</p>
                          <p className="text-xs text-[var(--color-muted)] font-medium">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <ul className={`space-y-3 text-left`}>
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-foreground)]/80 leading-relaxed">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
