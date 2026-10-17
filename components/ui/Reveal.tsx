"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useLayoutEffect(() => {
    const node = ref.current;

    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("shown");
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

    if (inView) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setState("shown");
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    state === "shown" && delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  const motionClass =
    state === "hidden" ? "motion-hold" : state === "shown" ? "motion-rise" : "";

  return (
    <div ref={ref} className={`${motionClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
