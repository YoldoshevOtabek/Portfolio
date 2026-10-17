import { Code2, Palette, Database, Wrench, Check } from "lucide-react";
import {
  wrap,
  section,
  sectionLabel,
  sectionTitle,
  gradientText,
  headingRow,
  subtitle,
  headingAside,
  card,
} from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

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
    <section className={`${section} ${wrap}`} id="skills">
      <div className={sectionLabel}>
        <span className="text-[11px] text-purple">02</span> / KO‘NIKMALAR
      </div>

      <div className={headingRow}>
        <div>
          <h2 className={sectionTitle}>
            Ishlatadigan <span className={gradientText}>texnologiyalar</span>
          </h2>
          <p className={subtitle}>
            Loyihalarimda foydalanadigan asosiy vositalar va texnologiyalar
          </p>
        </div>

        <div className={headingAside}>
          <Code2 size={15} className="text-purple" />
          MY TOOLKIT
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3.5 max-[950px]:grid-cols-2 max-[680px]:gap-2.5 max-[370px]:grid-cols-1">
        {skillGroups.map(({ title, description, icon: Icon, skills }, index) => (
          <Reveal key={title} delay={index * 90} className="h-full">
          <article
            className={`${card} h-full px-[18px] pt-5 pb-4 max-[680px]:px-3 max-[680px]:py-[15px]`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#777e95]">
                {String(index + 1).padStart(2, "0")} / 04
              </span>
              <span className="grid size-[31px] place-items-center rounded-[9px] bg-[#26203f] text-[17px] text-[#bba8ff]">
                <Icon size={17} />
              </span>
            </div>

            <div className="origin-left transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
              <h3 className="mt-[17px] mb-[5px] text-[15px] max-[680px]:text-[13px]">
                {title}
              </h3>
              <p className="mb-[18px] text-[10px] text-[#767d93] max-[680px]:min-h-[22px] max-[680px]:text-[9px] max-[370px]:min-h-0">
                {description}
              </p>
            </div>

            <div className="grid gap-[5px]">
              {skills.map((skill) => (
                <div
                  className="flex items-center gap-[9px] rounded-[7px] bg-white/[0.01] px-[7px] py-2 text-[10px] text-[#c6cad8] max-[680px]:gap-1.5 max-[680px]:px-[5px] max-[680px]:py-[7px] max-[680px]:text-[9px] light:bg-[#f3f4fa] light:text-[#29283c]"
                  key={skill}
                >
                  <span className="grid size-[22px] place-items-center rounded-md border border-[#30334a] font-mono text-[9px] font-medium text-[#b3a1ff] max-[680px]:size-5 max-[680px]:text-[8px] light:border-[#dedff0]">
                    {skill.slice(0, 2).toUpperCase()}
                  </span>
                  {skill}
                  <Check className="ml-auto text-[#64708a] opacity-80 max-[680px]:size-[11px]" size={13} />
                </div>
              ))}
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
