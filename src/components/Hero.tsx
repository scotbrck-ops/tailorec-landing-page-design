"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center !shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] !shadow-none">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12">

          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d236096-5620-493b-a6ce-6c97a6b3c941/visual-edit-uploads/1761564793172-eqywj1ukqpn.png"
            alt="Tailorec"
            width={500}
            height={120}
            className="mx-auto max-w-md !w-[512px] !h-full sm:!max-w-lg !text-xl !block !opacity-100 !bg-transparent !shadow-[0_32px_48px_-8px_rgba(0,0,0,0.3),0_16px_24px_-8px_rgba(0,0,0,0.2)]"
            priority />

        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight lg:!text-6xl !border-0">

          Find Jobs That Fit.
          <br />
          Not Just Jobs That Exist.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto !whitespace-pre-line">Tailored job matches, powered by AI. 


        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto !whitespace-pre-line">Tailorec is your AI-powered career companion that understands your skills, experience, and goals, not just your job title.


        </motion.p>

        {/* Email Signup Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto liquid-glass p-2 rounded-xl">

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/50 border-white/20 focus:border-primary" />

          <Button
            type="submit"
            className="gradient-primary text-white hover:opacity-90 transition-opacity group">

            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.form>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-20">

          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-foreground/40 rounded-full" />

          </div>
        </motion.div>
      </div>
    </section>);

}