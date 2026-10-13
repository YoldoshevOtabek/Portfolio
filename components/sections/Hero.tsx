
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          JUNIOR FRONTEND DEVELOPER
        </div>

        <p className="hero-greeting">Salom, men</p>

        <h1>
          Otabek
          <br />
          <span>Yo‘ldoshev.</span>
        </h1>

        <h2>
          Frontend Developer
          <span className="hero-slash">/</span>
        </h2>

        <p className="hero-description">
          React, TypeScript va Next.js yordamida zamonaviy, responsive
          va foydalanuvchilar uchun qulay web ilovalar yarataman.
          Hozirda yangi tajriba orttirish va professional jamoada
          rivojlanishga intilyapman.
        </p>

        <div className="hero-buttons">
          <Link href="#projects" className="button primary">
            Loyihalarimni ko‘rish
            <ArrowUpRight size={16} />
          </Link>

          <Link href="#contact" className="button secondary">
            Men bilan bog‘lanish
            <Send size={15} />
          </Link>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/YoldoshevOtabek"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://t.me/Otabek_Y_2000"
            target="_blank"
            rel="noreferrer"
          >
            <Send size={15} />
            Telegram
          </a>
        </div>
      </div>

      <div className="hero-art" aria-label="Frontend texnologiyalari tasviri">
        <div className="art-grid" />
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />

        <div className="hero-orb">
          <div className="orb-inner">
            O<span>;</span>
          </div>
        </div>

        <div className="code-window">
          <div className="window-top">
            <span />
            <span />
            <span />
            <small>portfolio.tsx</small>
          </div>

          <div className="code-lines">
            <p><i>01</i> <b>const</b> developer = {"{"}</p>
            <p><i>02</i> &nbsp; name: <em>"Otabek"</em>,</p>
            <p><i>03</i> &nbsp; role: <em>"Frontend Dev"</em>,</p>
            <p><i>04</i> &nbsp; skills: [</p>
            <p><i>05</i> &nbsp;&nbsp; <strong>"React"</strong>,</p>
            <p><i>06</i> &nbsp;&nbsp; <strong>"TypeScript"</strong>,</p>
            <p><i>07</i> &nbsp;&nbsp; <strong>"Next.js"</strong></p>
            <p><i>08</i> &nbsp; ]</p>
            <p><i>09</i> {"}"}</p>
          </div>

          <div className="window-bottom">
            <span><span className="tiny-green" /> Ready to build</span>
            <span>TSX</span>
          </div>
        </div>

        <div className="float-chip chip-react">
          <span>⚛</span>
          <div className="text-white!"><b>React.js</b><small>Component UI</small></div>
        </div>

        <div className="float-chip chip-ts">
          <span>TS</span>
          <div className="text-white!"><b>TypeScript</b><small>Type-safe code</small></div>
        </div>

        <div className="float-chip chip-next">
          <span>N</span>
          <div className="text-white!"><b>Next.js</b><small>Modern web apps</small></div>
        </div>

        <div className="art-caption">
          <span>CREATIVE DEVELOPMENT</span>
          <span><span className="status-dot" /> OPEN TO OPPORTUNITIES</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-line" />
        <ArrowDown size={13} />
        PASTGA O‘TISH
      </a>
    </section>
  );
}

