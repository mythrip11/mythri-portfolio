"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, Database, Map, Brain, LineChart } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "HR Analytics Capstone",
    category: "Business Intelligence & Data Visualization",
    date: "Dec 2025",
    description: "Defined performance and stress KPIs with stakeholders and delivered dashboards tracking workforce health for 200+ employees. The project focused on building a comprehensive people analytics view using Power BI, R, R Shiny, and SQL to support data-informed HR decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tools: ["Power BI", "R", "R Shiny", "SQL"],
    metrics: ["200+ Employees", "KPI Design", "Workforce Health"],
    icon: BarChart
  },
  {
    title: "PATH Transit Data System Analysis",
    category: "Data Systems Analysis",
    date: "Apr 2025",
    description: "Mapped ridership trends with SQL and modeled end-to-end data workflows to optimize commuter scheduling. The analysis focused on improving transit operations by identifying key patterns and documenting process-level data movement across the system.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
    tools: ["SQL", "Power BI", "Visio"],
    metrics: ["Ridership Analysis", "Workflow Modeling", "Scheduling Optimization"],
    icon: Map
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
