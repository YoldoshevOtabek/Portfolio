
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Code2,
  CheckCircle2,
} from "lucide-react";

const facts = [
  {
    icon: MapPin,
    label: "JOYLASHUV",
    value: "Toshkent, O‘zbekiston",
  },
  {
    icon: GraduationCap,
    label: "TA’LIM",
    value: "PDP Academy · 2026",
  },
  {
    icon: Code2,
    label: "ASOSIY YO‘NALISH",
    value: "Frontend Development",
  },
];

export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-label">
        <span>01</span> / MEN HAQIMDA
      </div>

      <div className="about-grid">
        <div>
          <h2 className="section-title">
            G‘oyalarni
            <br />
            <span>real loyihalarga</span>
            <br />
            aylantiraman.
          </h2>

          <p className="body-copy">
            Men Otabek Yo‘ldoshev, Junior Frontend Developerman.
            React.js, TypeScript, Next.js va Tailwind CSS yordamida
            zamonaviy web interfeyslar yaratish bilan shug‘ullanaman.
          </p>

          <p className="body-copy">
            Amaliy loyihalarimda admin panellar, CRM tizimlari,
            dashboardlar, responsive interfeyslar va REST API bilan
            ishlash tajribasini orttiryapman. Maqsadim — tajribali
            dasturchilar bilan birga ishlab, bilimlarimni rivojlantirish.
          </p>

          <Link href="#projects" className="text-link">
            Loyihalarim bilan tanishing
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="about-facts">
          {facts.map(({ icon: Icon, label, value }) => (
            <div className="fact-card" key={label}>
              <span className="fact-icon"><Icon size={19} /></span>
              <div>
                <small>{label}</small>
                <b>{value}</b>
              </div>
              <ArrowUpRight size={15} />
            </div>
          ))}

          <div className="fact-note">
            <CheckCircle2 size={19} />
            <span>
              <b>Rivojlanishga tayyorman.</b>
              <br />
              Yangi loyihalar va jamoaviy ishlash imkoniyatlariga ochiqman.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

