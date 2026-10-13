import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />

      <div className="contact-wrap wrap">
        <div className="section-label">
          <span>05</span> / ALOQA
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-kicker">
              <span className="status-dot" />
              YANGI IMKONIYATLARGA OCHIQMAN
            </div>

            <h2>
              Birga
              <br />
              <span>yarataylik.</span>
            </h2>

            <p className="contact-copy">
              Jamoangizga frontend dasturchi kerakmi yoki loyihangiz
              haqida suhbatlashmoqchimisiz? Men bilan bog‘laning.
              Yangi imkoniyatlar va hamkorlik takliflarini mamnuniyat
              bilan ko‘rib chiqaman.
            </p>

            <a
              href="mailto:yoldoshevo2000@gmail.com"
              className="button primary contact-button"
            >
              <Mail size={16} />
              Email yuborish
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="contact-methods">
            <a
              href="mailto:yoldoshevo2000@gmail.com"
              className="contact-method"
            >
              <span className="contact-method-icon"><Mail size={18} /></span>
              <span>
                <small>EMAIL</small>
                <b>yoldoshevo2000@gmail.com</b>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="tel:+998903224966"
              className="contact-method"
            >
              <span className="contact-method-icon"><MessageCircle size={18} /></span>
              <span>
                <small>TELEFON</small>
                <b>+998 90 322 49 66</b>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://t.me/Otabek_Y_2000"
              target="_blank"
              rel="noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon"><Send size={18} /></span>
              <span>
                <small>TELEGRAM</small>
                <b>@Otabek_Y_2000</b>
              </span>
              <ArrowUpRight size={16} />
            </a>

            <div className="contact-method">
              <span className="contact-method-icon"><MapPin size={18} /></span>
              <span>
                <small>JOYLASHUV</small>
                <b>Amudaryo, Qoraqalpog‘iston</b>
              </span>
            </div>

            <div className="contact-social-row">
              <a
                href="https://github.com/YoldoshevOtabek"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={15} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={15} />  LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

