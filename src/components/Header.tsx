"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" }];


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ?
        "glass-effect shadow-lg" :
        "bg-transparent"}`
        }>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/4d236096-5620-493b-a6ce-6c97a6b3c941/visual-edit-uploads/1761565185785-q04jbkodne.png"
                alt="Tailorec"
                width={120}
                height={30}
                className="h-7 sm:h-8 w-auto"
                priority />

              <span className="absolute -top-2 -right-8 bg-gradient-primary text-[10px] font-bold px-1.5 py-0.5 rounded !text-white !opacity-100 !bg-black">
                BETA
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group !mx-0">

                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )}
            </nav>

            {/* CTA Button - Desktop */}
            <Button
              onClick={() => scrollToSection("#early-access")}
              className="hidden lg:flex gradient-primary text-white hover:opacity-90 transition-opacity px-6">

              Get Early Access
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu">

              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 sm:top-20 left-0 right-0 z-40 lg:hidden glass-effect shadow-lg">

            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) =>
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2">

                  {item.label}
                </button>
            )}
              <Button
              onClick={() => scrollToSection("#early-access")}
              className="gradient-primary text-white w-full mt-2">

                Get Early Access
              </Button>
            </nav>
          </motion.div>
        }
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isScrolled ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 glass-effect">

        <Button
          onClick={() => scrollToSection("#early-access")}
          className="gradient-primary text-white w-full">

          Get Early Access
        </Button>
      </motion.div>
    </>);

}