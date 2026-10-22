"use client";

import { useLayoutEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n";

import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [light, setLight] = useState(false);

  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme") === "light";
    document.documentElement.classList.toggle("light", stored);
    setLight(stored);
  }, []);

  const toggleTheme = () => {
    setLight((current) => {
      const next = !current;
      document.documentElement.classList.toggle("light", next);
      localStorage.setItem("theme", next ? "light" : "dark");
      return next;
    });
  };

  return (
    <LanguageProvider>
      <main
        className={`page-shell relative isolate min-h-screen overflow-hidden ${light ? "light" : ""}`}
      >
        <div className="motion-float pointer-events-none absolute top-[170px] -right-[130px] -z-10 size-80 rounded-full bg-[#7254e8] opacity-[0.14] blur-[100px]" />
        <div
          className="motion-float pointer-events-none absolute top-[1200px] -left-[150px] -z-10 size-[250px] rounded-full bg-[#3d75b5] opacity-[0.14] blur-[100px]"
          style={{ animationDelay: "1.4s" }}
        />

        <Header light={light} onThemeChange={toggleTheme} />

        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <Footer />
      </main>
    </LanguageProvider>
  );
}
