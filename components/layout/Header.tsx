"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X, ArrowUpRight, Send, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { wrap, wordmark } from "@/components/ui/primitives";
import type { Locale } from "@/lib/dictionary";
import { useI18n } from "@/lib/i18n";

type HeaderProps = {
  light: boolean;
  onThemeChange: () => void;
};

const iconButton =
  "grid size-[30px] place-items-center rounded-[9px] border border-transparent bg-transparent text-[#a7abc0] transition hover:border-line hover:bg-panel hover:text-ink light:text-[#5c6276] light:hover:border-[#e0e3ee] light:hover:bg-white light:hover:text-ink";

const languageOptions: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
  { value: "uz", label: "UZ" },
];

function LanguageSelect() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.header.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-[30px] cursor-pointer items-center gap-1.5 rounded-[10px] border border-[#4a3f78] bg-[linear-gradient(160deg,#221c3d,#12101c)] px-2.5 font-mono text-[10px] tracking-[1.4px] text-[#f3efff] shadow-[0_0_0_1px_#9270ff22,0_8px_18px_#6d4dff1a] transition hover:border-[#7d6ad8] light:border-[#d9d2ff] light:bg-[linear-gradient(160deg,#fff,#f4f1ff)] light:text-[#3a335c] light:shadow-none"
      >
        <span className="size-1.5 rounded-full bg-[linear-gradient(135deg,#c0a7ff,#6fe4dc)] shadow-[0_0_8px_#9b7aff]" />
        {locale.toUpperCase()}
        <ChevronDown
          size={12}
          className={`text-[#b7a6ff] transition duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.header.language}
          className="absolute top-[calc(100%+8px)] right-0 z-30 grid w-[68px] gap-1 rounded-[12px] border border-[#3d3564] bg-[#100e1ae6] p-1 shadow-[0_18px_40px_#000a] backdrop-blur-md light:border-[#e4dff8] light:bg-white/95"
        >
          {languageOptions.map((option) => {
            const selected = locale === option.value;

            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setLocale(option.value);
                    setOpen(false);
                  }}
                  className={`flex h-8 w-full cursor-pointer items-center justify-between rounded-[8px] px-2 font-mono text-[10px] tracking-[1.3px] transition ${
                    selected
                      ? "bg-[linear-gradient(115deg,#9b7aff,#7253e6)] text-white"
                      : "text-[#b7b3cc] hover:bg-white/6 hover:text-white light:text-[#5c5678] light:hover:bg-[#f3efff] light:hover:text-[#29283c]"
                  }`}
                >
                  {option.label}
                  <span
                    className={`size-1 rounded-full ${selected ? "bg-cyan" : "bg-transparent"}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Header({ light, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`${wrap} motion-rise relative z-10 flex h-[82px] items-center justify-between border-b border-white/[0.07] max-[680px]:h-[69px] light:border-[#e2e4ef]`}
    >
      <Link
        href="#home"
        className={wordmark}
        aria-label={t.header.homeAria}
        onClick={() => setMenuOpen(false)}
      >
        Otabek<span className="text-purple">.</span>
        <i className="not-italic text-cyan">dev</i>
      </Link>

      <nav
        className="flex items-center gap-[31px] max-[950px]:gap-[17px] max-[680px]:hidden"
        aria-label={t.header.navAria}
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
        <LanguageSelect />

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
          aria-label={light ? t.header.themeDark : t.header.themeLight}
          type="button"
        >
          {light ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <button
          className={`${iconButton} hidden max-[680px]:grid`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute top-[69px] right-0 left-0 z-20 grid gap-1 border-b border-[#2b2d41] bg-[#0e111bf7] px-[18px] pt-3.5 pb-5 backdrop-blur-[14px] light:border-[#e0e3ee] light:bg-white/95"
          aria-label={t.header.mobileNavAria}
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
            {t.header.telegram}
            <Send size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
