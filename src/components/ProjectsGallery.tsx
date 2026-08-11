"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, Database, Map, Brain, LineChart } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "HR Analytics Dashboard",
    category: "Business Intelligence & Data Visualization",
    date: "Dec 2025",
    description: "Led business analysis for a workforce analytics initiative, gathering requirements from stakeholders to define KPIs across performance and stress dimensions. Delivered interactive Power BI and R Shiny dashboards tracking resource health metrics for 200+ employees, translating operational data into strategic insights for HR decision-makers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tools: ["Power BI", "R", "R Shiny", "SQL"],
    metrics: ["200+ Employees Tracked", "KPI Definition", "Strategic HR Insights"],
    icon: BarChart
  },
  {
    title: "Port Authority Trans Hudson (PATH) Analysis",
    category: "Data Systems Analysis",
    date: "Apr 2025",
    description: "Analyzed transit systems data by generating SQL queries to map trends, presenting functional solutions for process improvements. Drafted end-to-end data workflows modeling current infrastructure to optimize commuter traffic scheduling.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
    tools: ["SQL", "Power BI", "Visio"],
    metrics: ["Traffic Optimization", "Workflow Modeling", "Process Improvement"],
    icon: Map
  },
  {
    title: "AI-Driven Customer Churn Prediction",
    category: "Artificial Intelligence & Predictive Modeling",
    date: "Aug 2025",
    description: "Designed and evaluated machine learning models to predict customer churn, achieving 85% accuracy. Collaborated with data science teams to translate model outputs into retention strategies, reducing churn by 12% in Q3.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tools: ["Python", "Machine Learning", "Tableau", "Jira"],
    metrics: ["85% Model Accuracy", "12% Churn Reduction", "Predictive Analytics"],
    icon: Brain
  },
  {
    title: "Supply Chain Optimization Initiative",
    category: "Process Improvement & Data Analysis",
    date: "Jan 2026",
    description: "Conducted gap analysis on global supply chain operations, identifying bottlenecks in inventory management. Developed a dynamic tracking dashboard leading to a 15% reduction in lead times and $2M annual cost savings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tools: ["Tableau", "Excel", "Agile/Scrum", "Process Mapping"],
    metrics: ["15% Lead Time Reduction", "$2M Cost Savings", "Gap Analysis"],
    icon: LineChart
  }
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            Showcasing analytical problem-solving and business intelligence solutions that drive organizational success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative flex flex-col rounded-[2rem] overflow-hidden glass border border-black/5 dark:border-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500 shadow-2xl bg-background"
            >
              {/* Image Header */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-background/90 backdrop-blur-md rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                    <project.icon size={20} />
                  </div>
                </div>
                
                <p className="text-[var(--color-muted)] text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Footer/Tools */}
                <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs font-medium text-[var(--color-foreground)]/70 bg-black/5 dark:bg-white/5 px-2 py-1 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                    Case Study <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
