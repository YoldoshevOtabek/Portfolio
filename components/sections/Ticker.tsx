"use client";

import { useI18n } from "@/lib/i18n";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "REST API",
  "Git & GitHub",
];

export default function Ticker() {
  const { t } = useI18n();
  const items = [...technologies, ...technologies];

  return (
    <div
      className="overflow-hidden border-y border-[#202333] bg-[#0c0e17] [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] light:border-[#e0e3ee] light:bg-[#eef0f8]"
      aria-label={t.tickerAria}
    >
      <div className="flex min-w-max animate-marquee items-center gap-[45px] px-[max(32px,calc((100vw-1160px)/2))] py-[19px] max-[680px]:gap-7 max-[680px]:py-[15px]">
        {items.map((technology, index) => (
          <span
            key={`${technology}-${index}`}
            className="flex items-center gap-2.5 font-mono text-[10px] tracking-[1.5px] text-[#878da3] max-[680px]:text-[9px] light:text-[#6d7287]"
          >
            <i className="not-italic text-[15px] text-purple">✳</i>
            {technology.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
