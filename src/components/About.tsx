"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Users, Award } from "lucide-react";

const credentials = [
  { icon: Brain, text: "Meta" },
  { icon: Award, text: "Stanford" },
  { icon: Code, text: "Princeton" },
  { icon: Users, text: "Cornell" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Built by people who have lived the problem.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Tailorec was born out of frustration: from endless job hunts, fake listings, and keyword-driven portals that never really understood candidates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass p-8 sm:p-12 rounded-3xl mb-12"
        >
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
            <span className="font-semibold text-foreground">We've lived the problem. Now we're building the solution.</span>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            Tailorec was founded by a team of engineers and builders who have experienced the pain of job search first-hand. With experience across Meta, Stanford, Princeton, and Cornell, our team combines deep machine learning expertise, full-stack engineering, and human-centred product design—everything needed to turn this vision into reality.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We didn't start Tailorec to build another job portal. <span className="font-semibold text-foreground">We started it to build the intelligence layer that hiring has always needed.</span>
          </p>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full hover:scale-105 transition-transform"
            >
              <cred.icon className="h-5 w-5 text-primary" />
              <span className="font-semibold">{cred.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
