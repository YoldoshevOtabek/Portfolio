import {
  Code2,
  Palette,
  Database,
  Wrench,
  Check,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interaktiv web interfeyslar",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "UI & Styling",
    description: "Responsive va zamonaviy dizayn",
    icon: Palette,
    skills: ["Tailwind CSS", "CSS Modules", "Responsive UI", "Ant Design"],
  },
  {
    title: "Data & State",
    description: "API va ma’lumotlar bilan ishlash",
    icon: Database,
    skills: ["REST API", "Axios", "React Query", "React Hooks"],
  },
  {
    title: "Tools",
    description: "Kundalik dasturlash vositalari",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "npm", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="section wrap" id="skills">
      <div className="section-label">
        <span>02</span> / KO‘NIKMALAR
      </div>

      <div className="section-heading-row">
        <div>
          <h2 className="section-title">
            Ishlatadigan <span>texnologiyalar.</span>
          </h2>
          <p className="section-subtitle">
            Loyihalarimda foydalanadigan asosiy vositalar va texnologiyalar.
          </p>
        </div>

        <div className="heading-aside">
          <Code2 size={15} />
          MY TOOLKIT
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map(({ title, description, icon: Icon, skills }, index) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-top">
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")} / 04
              </span>
              <span className="skill-card-symbol"><Icon size={17} /></span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="skill-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-mini-icon">
                    {skill.slice(0, 2).toUpperCase()}
                  </span>
                  {skill}
                  <Check className="skill-check" size={13} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

