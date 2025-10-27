"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Lightbulb } from "lucide-react";

const roles = [
  {
    icon: Cpu,
    title: "Machine Learning Engineer",
    subtitle: "(Co-founder & Head of AI)",
    description: "Architect the intelligence behind Tailorec. Design models, deploy pipelines, and lead all things ML from beta to scale.",
    cta: "View Role",
    gradient: "gradient-primary",
  },
  {
    icon: Lightbulb,
    title: "Create Your Own Role",
    subtitle: "",
    description: "Don't see a role that fits? Tell us how you can contribute. We're always open to passionate builders, whether in AI, frontend, design, or growth.",
    cta: "Pitch Yourself",
    gradient: "gradient-accent",
  },
];

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Join us in reimagining how the world finds work.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We're a small, ambitious team of engineers, designers, and dreamers working to fix what's broken in hiring. If you're passionate about machine learning, product building, or creating meaningful solutions, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Open Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="liquid-glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity" />
              
              <div className={`w-14 h-14 rounded-xl ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <role.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
              {role.subtitle && (
                <p className="text-sm text-muted-foreground mb-4">{role.subtitle}</p>
              )}
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>

              <Button
                className={`${role.gradient} text-white hover:opacity-90 transition-opacity group/btn w-full sm:w-auto`}
              >
                {role.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-semibold">
            We're not just hiring. We're inviting collaborators.
          </p>
          <p className="text-lg text-muted-foreground mt-3">
            If you want to build something with real impact, <span className="text-gradient font-bold">Tailorec is your place.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
