"use client";

import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, Activity, TrendingUp, Users } from "lucide-react";

export default function DashboardShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Data Storytelling</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            Transforming raw data into executive-ready dashboards. Elegance meets actionable business intelligence.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black text-white relative"
        >
          {/* Dashboard Header */}
          <div className="border-b border-white/10 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 font-semibold text-sm text-white/70">Executive Overview Report</span>
            </div>
            <div className="flex gap-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10">YTD Performance</span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">Export PDF</span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-8 grid gap-8 bg-gradient-to-br from-black to-[#0a0a0a]">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Total Revenue Impact", value: "$2.4M", trend: "+14.5%", icon: TrendingUp, color: "text-green-400" },
                { title: "Active Users", value: "84,392", trend: "+22.1%", icon: Users, color: "text-blue-400" },
                { title: "System Efficiency", value: "98.9%", trend: "+5.2%", icon: Activity, color: "text-purple-400" }
              ].map((kpi, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-white/50 text-sm font-medium">{kpi.title}</p>
                    <kpi.icon size={18} className="text-white/30" />
                  </div>
                  <h4 className="text-3xl font-bold mb-2">{kpi.value}</h4>
                  <span className={`text-sm font-semibold ${kpi.color} bg-white/5 px-2 py-1 rounded-md`}>
                    {kpi.trend}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Main Chart Area */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col">
                <h4 className="text-white/70 font-medium mb-6">Revenue Conversion Trends</h4>
                <div className="flex-grow flex items-end gap-2 h-48">
                  {/* Fake Bar Chart */}
                  {[40, 55, 30, 70, 45, 90, 65, 80, 50, 100, 85, 110].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-[var(--color-primary)] to-[var(--color-accent)] rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                    ></motion.div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                 <h4 className="text-white/70 font-medium mb-6">Traffic Sources</h4>
                 <div className="flex justify-center items-center h-48 relative">
                   {/* Fake Donut Chart via SVG */}
                   <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                     <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                     <motion.circle 
                       initial={{ strokeDasharray: "0, 100" }}
                       whileInView={{ strokeDasharray: "60, 100" }}
                       transition={{ duration: 1.5 }}
                       cx="18" cy="18" r="16" fill="transparent" stroke="var(--color-primary)" strokeWidth="4" className="drop-shadow-lg"
                     />
                     <motion.circle 
                       initial={{ strokeDasharray: "0, 100" }}
                       whileInView={{ strokeDasharray: "25, 100" }}
                       transition={{ duration: 1.5, delay: 0.2 }}
                       cx="18" cy="18" r="16" fill="transparent" stroke="var(--color-accent)" strokeWidth="4" strokeDashoffset="-60"
                     />
                   </svg>
                   <div className="absolute flex flex-col items-center">
                     <span className="text-xl font-bold">60%</span>
                     <span className="text-[10px] text-white/50">Direct</span>
                   </div>
                 </div>
                 <div className="flex justify-center gap-4 mt-4">
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div><span className="text-xs text-white/50">Direct</span></div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div><span className="text-xs text-white/50">Organic</span></div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
