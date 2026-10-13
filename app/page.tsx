"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [light, setLight] = useState(false);

  return (
    <main className={`site ${light ? "light" : ""}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Header
        light={light}
        onThemeChange={() => setLight((current) => !current)}
      />

      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <Footer />
    </main>
  );
}

