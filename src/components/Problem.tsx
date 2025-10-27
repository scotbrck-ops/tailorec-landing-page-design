"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, Search, FileX, FileEdit, RotateCcw, Users } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "No Personalisation",
    description: "Everyone sees the same feed; no AI that understands individual skills.",
  },
  {
    icon: XCircle,
    title: '"Am I a Fit?" Confusion',
    description: "Portals list jobs but never explain why or how you fit.",
  },
  {
    icon: FileX,
    title: "Fake or Outdated Jobs",
    description: "Too many listings lead to dead ends or fraudulent openings.",
  },
  {
    icon: FileEdit,
    title: "Resume Tailoring Struggles",
    description: "Unsure how to adapt your resume for each role while keeping ATS friendly.",
  },
  {
    icon: RotateCcw,
    title: "Repetitive Applications",
    description: "Re-upload, re-type, re-fill, every single time.",
  },
  {
    icon: Users,
    title: "No Referral Access",
    description: "Only a few get insider recommendations.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Job search is broken.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Endless scrolling. Irrelevant results. Fake openings. Frustration should not be part of finding a job.
          </p>
        </motion.div>

        {/* Pain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xl sm:text-2xl font-semibold mt-16"
        >
          It's not you. It's the system. <span className="text-gradient">Tailorec is here to fix it.</span>
        </motion.p>
      </div>
    </section>
  );
}
