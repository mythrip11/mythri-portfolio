"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Download } from "lucide-react";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            Ready to turn complex data into actionable business strategies? Reach out and let&apos;s discuss how I can add value to your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 p-10 rounded-3xl glass border border-[var(--color-primary)]/20 shadow-2xl bg-[var(--color-primary)] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[50px] transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">Get In Touch</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/70 font-medium">Phone</p>
                  <p className="text-lg font-semibold">(203) 415-0976</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/70 font-medium">Email</p>
                  <a href="mailto:mythrip11@gmail.com" className="text-lg font-semibold hover:underline">mythrip11@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/70 font-medium">Location</p>
                  <p className="text-lg font-semibold">Michigan, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/70 font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/mythripotluri1" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:underline">linkedin.com/in/mythripotluri1</a>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-lg w-full justify-center"
              >
                <Download size={20} />
                Download Full Resume
              </a>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 rounded-3xl glass shadow-xl border border-black/5 dark:border-white/10 bg-background"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-foreground)]">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-black/10 dark:border-white/10 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-[var(--color-foreground)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-foreground)]">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-black/10 dark:border-white/10 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-[var(--color-foreground)]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-foreground)]">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we work together?" 
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-black/10 dark:border-white/10 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-[var(--color-foreground)] resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors font-bold text-lg shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
