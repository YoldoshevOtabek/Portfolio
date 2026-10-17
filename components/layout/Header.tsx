"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { wrap, wordmark } from "@/components/ui/primitives";

type HeaderProps = {
  light: boolean;
  onThemeChange: () => void;
};

export const navLinks = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Men haqimda", href: "#about" },
  { label: "Ko‘nikmalar", href: "#skills" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Aloqa", href: "#contact" },
];

const iconButton =
  "grid size-[30px] place-items-center rounded-[9px] border border-transparent bg-transparent text-[#a7abc0] transition hover:border-line hover:bg-panel hover:text-ink light:text-[#5c6276] light:hover:border-[#e0e3ee] light:hover:bg-white light:hover:text-ink";

export default function Header({ light, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${wrap} motion-rise relative z-10 flex h-[82px] items-center justify-between border-b border-white/[0.07] max-[680px]:h-[69px] light:border-[#e2e4ef]`}
    >
      <Link
        href="#home"
        className={wordmark}
        aria-label="Bosh sahifaga qaytish"
        onClick={() => setMenuOpen(false)}
      >
        Otabek<span className="text-purple">.</span>
        <i className="not-italic text-cyan">dev</i>
      </Link>

      <nav
        className="flex items-center gap-[31px] max-[950px]:gap-[17px] max-[680px]:hidden"
        aria-label="Asosiy navigatsiya"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-[#a8acc0] transition hover:text-ink max-[950px]:text-[11px] light:text-[#5c6276]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[17px] max-[950px]:gap-[9px] max-[680px]:gap-2">
        <a
          className={`${iconButton} max-[680px]:hidden`}
          href="https://github.com/YoldoshevOtabek"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={17} />
        </a>

        <a
          className={`${iconButton} max-[680px]:hidden`}
          href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={17} />
        </a>

        <button
          className={iconButton}
          onClick={onThemeChange}
          aria-label={light ? "Dark rejim" : "Light rejim"}
          type="button"
        >
          {light ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <button
          className={`${iconButton} hidden max-[680px]:grid`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute top-[69px] right-0 left-0 z-20 grid gap-1 border-b border-[#2b2d41] bg-[#0e111bf7] px-[18px] pt-3.5 pb-5 backdrop-blur-[14px] light:border-[#e0e3ee] light:bg-white/95"
          aria-label="Mobil navigatsiya"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/[0.04] px-2 py-[13px] text-[13px] text-[#d5d7e4] light:border-[#eef0f6] light:text-[#29283c]"
            >
              {link.label}
              <ArrowUpRight size={15} />
            </a>
          ))}

          <a
            href="https://t.me/Otabek_Y_2000"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between px-2 py-[13px] text-[13px] text-[#d5d7e4] light:text-[#29283c]"
          >
            Telegram orqali yozish
            <Send size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
