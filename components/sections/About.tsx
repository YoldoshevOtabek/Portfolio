import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Code2,
  CheckCircle2,
  BookOpen,
  Languages,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import {
  wrap,
  section,
  sectionLabel,
  sectionTitle,
  gradientText,
  btnPrimary,
  btnSecondary,
  card,
} from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

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

const learned = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

const experience = [
  "Komponentli arxitektura",
  "REST API integratsiyasi",
  "Responsive interfeyslar",
  "Git va GitHub",
];

const languages = [
  {
    code: "UZ",
    name: "O‘zbek tili",
    level: "Asosiy",
    style: "bg-[#15394b] text-[#83d7ff]",
  },
  {
    code: "EN",
    name: "Ingliz tili",
    level: "B1",
    style: "bg-[#35213e] text-[#d7a9ff]",
  },
  {
    code: "RU",
    name: "Rus tili",
    level: "O‘rtacha",
    style: "bg-[#24304e] text-[#a8c3ff]",
  },
];

export default function About() {
  return (
    <section className={`${section} ${wrap}`} id="about">
      <div className={sectionLabel}>
        <span className="text-[11px] text-purple">01</span> / MEN HAQIMDA
      </div>

      <Reveal>
      <div className="grid grid-cols-[1.1fr_0.8fr] gap-[100px] pt-[34px] max-[950px]:gap-[45px] max-[680px]:grid-cols-1 max-[680px]:gap-[26px] max-[680px]:pt-[26px]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#343047] bg-[#18152a] px-3 py-1.5 font-mono text-[9px] tracking-[1.2px] text-[#b9b4d8] light:border-[#e0e3ee] light:bg-white light:text-[#5c6276]">
            <Sparkles size={14} className="text-purple" />
            O‘RGANISH VA RIVOJLANISHDA DAVOM ETAMAN
          </div>

          <h2 className={sectionTitle}>
            G‘oyalarni
            <br />
            <span className={gradientText}>real loyihalarga</span>
            <br />
            aylantiraman
          </h2>

          <p className="my-[22px] max-w-[560px] text-[13px] leading-[1.95] text-muted max-[680px]:my-4 max-[680px]:text-xs light:text-[#666b7f]">
            Men Otabek Yo‘ldoshev, Junior Frontend Developerman.
            React.js, TypeScript, Next.js va Tailwind CSS yordamida
            zamonaviy, qulay va responsive web interfeyslar yarataman.
          </p>

          <p className="my-[22px] max-w-[560px] text-[13px] leading-[1.95] text-muted max-[680px]:my-4 max-[680px]:text-xs light:text-[#666b7f]">
            Amaliy loyihalarimda admin panellar, CRM tizimlari,
            dashboardlar va REST API integratsiyasi bilan ishlayman.
            Maqsadim — professional jamoada tajriba orttirish,
            sifatli kod yozish va foydalanuvchilar uchun qulay
            mahsulotlar yaratish.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="#projects" className={btnPrimary}>
              Loyihalarimni ko‘rish
              <ArrowUpRight size={16} />
            </Link>

            <Link href="#contact" className={btnSecondary}>
              Bog‘lanish
            </Link>
          </div>
        </div>

        <div>
          <div className="group rounded-[16px] border border-line bg-[linear-gradient(160deg,#121627,#0c0f18)] p-[22px] light:border-[#e0e3ee] light:bg-[linear-gradient(160deg,#fff,#f6f7fc)]">
            <div className="mb-4 flex items-center gap-3.5">
              <div className="grid size-14 place-items-center overflow-hidden rounded-2xl bg-[#26203f] text-lg font-extrabold text-[#c5b8ff]">
                <Image src="/og.png" alt="my img" width={40} height={40} className="rounded-xl transition-transform duration-500 ease-out motion-safe:group-hover:scale-110"/>
              </div>

              <div className="origin-left transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
                <span className="font-mono text-[9px] tracking-[1.2px] text-[#8b91a7]">
                  FRONTEND DEVELOPER
                </span>
                <h3 className="m-0 text-[18px] font-extrabold tracking-[-0.4px] light:text-[#29283c]">
                  Otabek Yo‘ldoshev
                </h3>
                <p className="m-0 text-[11px] text-muted">Junior Developer</p>
              </div>
            </div>

            <div className="mb-3.5 flex items-center gap-2 rounded-[10px] border border-[#2a3344] bg-[#15221c] px-3 py-2.5 text-[11px] text-[#9ad4b4]">
              <span className="inline-block size-[7px] rounded-full bg-green shadow-[0_0_13px_#81e6b080]" />
              Yangi imkoniyatlarga ochiqman
            </div>

            <div className="grid content-center gap-2.5 max-[680px]:gap-2">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  className="flex min-h-[75px] items-center gap-[13px] rounded-xl border border-line bg-[linear-gradient(130deg,#10131e,#0c0f18)] p-[15px] max-[680px]:min-h-[68px] light:border-[#e0e3ee] light:bg-[linear-gradient(145deg,#fff,#f7f8fc)]"
                  key={label}
                >
                  <span className="grid size-[39px] shrink-0 place-items-center rounded-[10px] bg-[#26203f] text-[#b3a0ff]">
                    <Icon size={19} />
                  </span>

                  <div className="flex-1">
                    <small className="mb-1.5 block font-mono text-[9px] tracking-[1px] text-[#767e96]">
                      {label}
                    </small>
                    <b className="text-xs light:text-[#29283c]">{value}</b>
                  </div>

                  <ArrowUpRight size={15} className="text-[#636b81] light:text-[#777d91]" />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2.5 text-[11px] leading-[1.7] text-[#a8aec3] light:text-[#555a70]">
              <Code2 size={16} className="text-cyan" />
              <span>Kod yozish, o‘rganish va yangi g‘oyalar</span>
            </div>
          </div>
        </div>
      </div>
      </Reveal>

      <Reveal>
      <div className="mt-14" id="education">
        <div className="mb-6 flex items-end justify-between gap-5 max-[680px]:flex-col max-[680px]:items-start">
          <div>
            <span className="font-mono text-[9px] tracking-[1.3px] text-[#858ba2]">
              TA’LIM VA AMALIY TAJRIBA
            </span>

            <h3 className="mt-2 mb-2 text-[28px] font-extrabold tracking-[-1px]">
              Bilimdan <span className={gradientText}>tajribaga</span>
            </h3>

            <p className="m-0 max-w-[460px] text-xs leading-[1.7] text-muted">
              Nazariy bilimlarni amaliy loyihalar orqali mustahkamlab
              boryapman
            </p>
          </div>

          <span className="grid size-12 place-items-center rounded-xl bg-[#25203e] text-[#b7a4ff]">
            <BookOpen size={23} />
          </span>
        </div>

        <div className="grid grid-cols-2 gap-[17px] max-[680px]:grid-cols-1 max-[680px]:gap-3">
          <article className={`${card} p-[23px] max-[680px]:p-[19px]`}>
            <div className="mb-[25px] flex items-center justify-between">
              <span className="grid size-[42px] place-items-center rounded-[11px] bg-[#25203e] text-[#b7a4ff]">
                <GraduationCap size={22} />
              </span>
              <span className="rounded-[7px] border border-[#343047] px-[9px] py-1.5 font-mono text-[8px] tracking-[0.5px] text-[#b4a5ec]">
                2026
              </span>
            </div>

            <div className="origin-left transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
              <span className="font-mono text-[9px] tracking-[1.3px] text-[#858ba2]">
                TA’LIM
              </span>

              <h3 className="mt-2 mb-1 text-[21px] tracking-[-0.5px] light:text-[#29283c]">
                PDP Academy
              </h3>
              <h4 className="m-0 text-[11px] font-semibold text-[#b8a5ff]">
                Frontend Development
              </h4>

              <p className="my-[17px] max-w-[430px] text-[11px] leading-[1.8] text-muted light:text-[#666b7f]">
                Frontend dasturlash bo‘yicha web interfeyslar yaratish,
                JavaScript va React ekotizimi, zamonaviy frontend
                texnologiyalarini o‘rganish.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-[7px]">
              {learned.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-[#1b1d2c] px-[9px] py-[7px] text-[9px] text-[#c2c5d4] light:bg-[#efeff8] light:text-[#555a70]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className={`${card} p-[23px] max-[680px]:p-[19px]`}>
            <div className="mb-[25px] flex items-center justify-between">
              <span className="grid size-[42px] place-items-center rounded-[11px] bg-[#1a2e2c] text-cyan">
                <BriefcaseBusiness size={21} />
              </span>
              <span className="rounded-[7px] border border-[#343047] px-[9px] py-1.5 font-mono text-[8px] tracking-[0.5px] text-[#b4a5ec]">
                DAVOM ETMOQDA
              </span>
            </div>

            <div className="origin-left transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
              <span className="font-mono text-[9px] tracking-[1.3px] text-[#858ba2]">
                AMALIY RIVOJLANISH
              </span>

              <h3 className="mt-2 mb-1 text-[21px] tracking-[-0.5px] light:text-[#29283c]">
                Real loyihalar ustida ishlash
              </h3>
              <h4 className="m-0 text-[11px] font-semibold text-[#b8a5ff]">
                Frontend Development
              </h4>

              <p className="my-[17px] max-w-[430px] text-[11px] leading-[1.8] text-muted light:text-[#666b7f]">
                Online shop admin paneli, Education CRM va Bizda Users
                loyihalari orqali interfeyslar yaratish, API bilan ishlash va
                ma’lumotlarni boshqarish ko‘nikmalarini rivojlantiryapman.
              </p>
            </div>

            <ul className="my-[18px] grid list-none gap-3 p-0">
              {experience.map((item) => (
                <li key={item} className="flex items-center gap-[9px] text-[10px] text-[#b7bdcf] light:text-[#555a70]">
                  <CheckCircle2 size={16} className="text-cyan" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-2 border-t border-[#282b3b] pt-3.5 text-[11px] text-[#9aa0b5] light:border-[#e0e3ee]">
              <Sparkles size={15} className="text-purple" />
              <span>
                Maqsad: professional jamoada ishlab, tajribamni oshirish.
              </span>
            </div>
          </article>
        </div>
      </div>
      </Reveal>

      <Reveal delay={80}>
      <div className="mt-5 rounded-[14px] border border-line p-5 light:border-[#e0e3ee] light:bg-white">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-[#25203e] text-[#b7a4ff]">
            <Languages size={21} />
          </span>

          <div>
            <h3 className="m-0 mb-[5px] text-[13px]">Tillar</h3>
            <p className="m-0 text-[9px] text-[#777e94]">Muloqot uchun</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[680px]:grid-cols-1">
          {languages.map((language) => (
            <div
              className="flex items-center gap-2.5 rounded-[10px] border border-line bg-panel p-3 light:border-[#e0e3ee] light:bg-white"
              key={language.code}
            >
              <span
                className={`grid size-[33px] place-items-center rounded-[9px] font-mono text-[9px] font-medium ${language.style}`}
              >
                {language.code}
              </span>

              <div className="flex-1">
                <b className="block text-[11px] light:text-[#29283c]">
                  {language.name}
                </b>
                <small className="mt-1 block text-[9px] text-[#858ba0]">
                  {language.level}
                </small>
              </div>

              <CheckCircle2 className="text-cyan" size={16} />
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
