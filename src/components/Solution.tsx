"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, CheckCircle, Wand2, Zap, Network } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalised Feed",
    description: "Every user gets a job feed curated uniquely for them.",
  },
  {
    icon: Target,
    title: "Transparent Fit Score",
    description: "See exactly why each role matches your skills.",
  },
  {
    icon: CheckCircle,
    title: "Verified Listings",
    description: "Only from trusted company sources. No fake or expired jobs.",
  },
  {
    icon: Wand2,
    title: "AI Resume Tailor",
    description: "Instantly rewrite your resume for every role.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description: "Apply fast and track your application progress without re-entering details.",
  },
  {
    icon: Network,
    title: "Smart Referral Access",
    description: "Discover employees in your network who can refer you for the role.",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            We're fixing what job search got wrong.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tailorec reimagines job search with AI that truly understands you. No fake listings. No clutter. Just verified and personalised opportunities.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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
          Tailorec is not just another job portal. <span className="text-gradient">It's your AI career companion.</span>
        </motion.p>
      </div>
    </section>
  );
}
