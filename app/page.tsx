"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Header, { navLinks } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const HOME_TITLE = "Otabek Yo‘ldoshev | Frontend Developer";

function titleFor(id: string) {
  const section = navLinks.find((link) => link.href === `#${id}`);

  if (!section || id === "home") return HOME_TITLE;

  return `${section.label} | Frontend Developer`;
}

export default function Home() {
  const [light, setLight] = useState(false);
  const pendingSection = useRef<string | null>(null);

  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme") === "light";
    document.documentElement.classList.toggle("light", stored);
    setLight(stored);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => ({
        id: link.href.slice(1),
        element: document.getElementById(link.href.slice(1)),
      }))
      .filter((section) => section.element);

    const setTitle = (id: string) => {
      document.title = titleFor(id);
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a[href^='#']");
      const id = anchor?.getAttribute("href")?.slice(1);

      if (!id) return;

      setTitle(id);

      const element = document.getElementById(id);
      const rect = element?.getBoundingClientRect();
      const alreadyVisible =
        !!rect && rect.top < window.innerHeight * 0.6 && rect.bottom > 100;

      pendingSection.current = alreadyVisible ? null : id;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (pendingSection.current) {
          const element = document.getElementById(pendingSection.current);
          const rect = element?.getBoundingClientRect();
          const arrived =
            !!rect && rect.top < window.innerHeight * 0.45 && rect.bottom > 80;

          if (!arrived) return;

          pendingSection.current = null;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setTitle(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section.element!));
    document.addEventListener("click", onClick);

    if (location.hash) setTitle(location.hash.slice(1));

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
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
    <main
      className={`page-shell relative isolate min-h-screen overflow-hidden ${light ? "light" : ""}`}
    >
      <div className="motion-float pointer-events-none absolute top-[170px] -right-[130px] -z-10 size-80 rounded-full bg-[#7254e8] opacity-[0.14] blur-[100px]" />
      <div
        className="motion-float pointer-events-none absolute top-[1200px] -left-[150px] -z-10 size-[250px] rounded-full bg-[#3d75b5] opacity-[0.14] blur-[100px]"
        style={{ animationDelay: "1.4s" }}
      />

      <Header
        light={light}
        onThemeChange={toggleTheme}
      />

      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}
