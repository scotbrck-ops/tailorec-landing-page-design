import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import About from "@/components/About";
import EarlyAccess from "@/components/EarlyAccess";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <About />
      <EarlyAccess />
      <Careers />
      <Footer />
    </main>
  );
}