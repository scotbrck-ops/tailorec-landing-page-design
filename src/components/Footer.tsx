"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" ref={ref} className="py-20 sm:py-32 relative overflow-hidden border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-10">
            Have a question, partnership idea, or just want to say hello? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="liquid-glass p-8 rounded-2xl space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50 border-white/20 focus:border-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50 border-white/20 focus:border-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/50 border-white/20 focus:border-primary min-h-[120px]"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button
              type="submit"
              className="gradient-primary text-white hover:opacity-90 transition-opacity group w-full"
            >
              Send Message
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>

        {/* Footer Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1b-Picsart-AiImageEnhancer-1761549901796.png"
                alt="Tailorec"
                width={150}
                height={40}
                className="h-8 w-auto mb-3 mx-auto md:mx-0"
              />
              <p className="text-sm text-muted-foreground italic">
                Find jobs that fit, not just jobs that exist.
              </p>
            </div>

            {/* Contact & Socials */}
            <div className="text-center md:text-right">
              <a
                href="mailto:tailorecai@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors mb-3 block"
              >
                tailorecai@gmail.com
              </a>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © 2025 Tailorec. All Rights Reserved. Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> in India.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
