import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Languages,
} from "lucide-react";

const learned = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

export default function Education() {
  return (
    <section className="section wrap learning-section" id="education">
      <div className="section-label">
        <span>04</span> / TA’LIM VA RIVOJLANISH
      </div>

      <div className="section-heading-row">
        <div>
          <h2 className="section-title">
            Bilimdan <span>tajribaga.</span>
          </h2>
          <p className="section-subtitle">
            Ta’lim va amaliy loyihalar orqali rivojlanishda davom etaman.
          </p>
        </div>
      </div>

      <div className="journey-grid">
        <article className="journey-card">
          <div className="journey-card-head">
            <span className="journey-icon">
              <GraduationCap size={22} />
            </span>
            <span className="year-pill">2026</span>
          </div>

          <span className="journey-overline">TA’LIM</span>
          <h3>PDP Academy</h3>
          <h4>Frontend Development</h4>

          <p>
            Frontend dasturlash yo‘nalishida web interfeyslar yaratish,
            zamonaviy JavaScript texnologiyalari va React ekotizimini
            o‘rganish.
          </p>

          <div className="learned-list">
            {learned.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="journey-card">
          <div className="journey-card-head">
            <span className="journey-icon">
              <BookOpen size={21} />
            </span>
            <span className="year-pill">ONGOING</span>
          </div>

          <span className="journey-overline">AMALIY RIVOJLANISH</span>
          <h3>Real loyihalar ustida ishlash</h3>
          <h4>Frontend Development</h4>

          <p>
            Online shop admin paneli va Education CRM kabi loyihalar
            orqali komponentlar, API integratsiyasi, ma’lumotlarni
            boshqarish va responsive interfeyslar bilan ishlash.
          </p>

          <ul className="check-list">
            <li><CheckCircle2 size={15} /> Komponentli arxitektura</li>
            <li><CheckCircle2 size={15} /> REST API bilan integratsiya</li>
            <li><CheckCircle2 size={15} /> Responsive UI</li>
            <li><CheckCircle2 size={15} /> Git va GitHub</li>
          </ul>

          <small className="honest-note">
            Maqsad: professional jamoada ishlash va tajribani oshirish.
          </small>
        </article>
      </div>

      <div className="languages-row">
        <div className="languages-heading">
          <Languages size={21} />
          <div>
            <h3>Tillar</h3>
            <p>Muloqot va o‘rganish</p>
          </div>
        </div>

        <div className="language-card">
          <span className="language-symbol uz">UZ</span>
          <div><b>O‘zbek tili</b><small>Asosiy</small></div>
          <span className="language-level">Native</span>
        </div>

        <div className="language-card">
          <span className="language-symbol en">EN</span>
          <div><b>Ingliz tili</b><small>B1</small></div>
          <span className="language-level">Intermediate</span>
        </div>

        <div className="language-card">
          <span className="language-symbol ru">RU</span>
          <div><b>Rus tili</b><small>O‘rtacha</small></div>
          <span className="language-level">Intermediate</span>
        </div>
      </div>
    </section>
  );
}

