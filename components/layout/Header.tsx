
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Moon,
  Sun,
  X,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeaderProps = {
  light: boolean;
  onThemeChange: () => void;
};

const navLinks = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Men haqimda", href: "#about" },
  { label: "Ko‘nikmalar", href: "#skills" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Ta’lim", href: "#education" },
  { label: "Aloqa", href: "#contact" },
];

export default function Header({ light, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header wrap">
      <Link
        href="#home"
        className="wordmark"
        aria-label="Bosh sahifaga qaytish"
        onClick={() => setMenuOpen(false)}
      >
        Otabek<span>.</span><i>dev</i>
      </Link>

      <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="social-icon"
          href="https://github.com/YoldoshevOtabek"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={17} />
        </a>

        <a
          className="social-icon"
          href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={17} />
        </a>

        <button
          className="icon-button"
          onClick={onThemeChange}
          aria-label={light ? "Dark rejim" : "Light rejim"}
          type="button"
        >
          {light ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <button
          className="icon-button mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobil navigatsiya">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
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
          >
            Telegram orqali yozish
            <Send size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
