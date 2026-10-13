
"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  X,
  ExternalLink,
  FolderCode,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  kind: "shop" | "education";
  features: string[];
};

const projects: Project[] = [
  {
    number: "01",
    name: "BizdaCRM",
    type: "ONLINE SHOP · ADMIN PANEL",
    description:
      "Mahsulotlar, buyurtmalar, mijozlar va katalogni boshqarish uchun ishlab chiqilgan online shop admin paneli.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "REST API"],
    href: "https://github.com/YoldoshevOtabek/bizdaCrm",
    kind: "shop",
    features: [
      "Dashboard va asosiy ko‘rsatkichlar",
      "Buyurtmalarni boshqarish",
      "Mahsulotlar va kategoriyalar",
      "Mijozlar va brendlar",
      "Profil va banner boshqaruvi",
    ],
  },
  {
    number: "02",
    name: "Education CRM",
    type: "EDUCATION · CRM SYSTEM",
    description:
      "O‘quv markazlari ish jarayonlarini boshqarish uchun admin, reception, o‘qituvchi va o‘quvchilar bo‘limlariga ega CRM loyihasi.",
    stack: ["React.js", "TypeScript", "Ant Design", "REST API"],
    href: "https://github.com/YoldoshevOtabek/Education-CRM",
    kind: "education",
    features: [
      "Admin va reception bo‘limlari",
      "O‘qituvchilarni boshqarish",
      "O‘quvchilar ro‘yxati",
      "Guruhlar va yo‘nalishlar",
      "Dashboard interfeyslari",
    ],
  },
];

function ProjectPreview({ kind }: { kind: Project["kind"] }) {
  const education = kind === "education";

  return (
    <div className={`project-preview ${education ? "education" : ""}`}>
      <aside className="mock-sidebar">
        <div className="mock-brand">
          <span className="mock-brand-icon">{education ? "E" : "B"}</span>
          <i />
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className={`mock-nav ${index === 1 ? "active" : ""} ${
              index === 4 ? "short" : ""
            }`}
          />
        ))}
      </aside>

      <div className="mock-content">
        <div className="mock-top">
          <div>
            <small className="mock-eyebrow">ADMINISTRATION / OVERVIEW</small>
            <b>{education ? "Education dashboard" : "Shop dashboard"}</b>
          </div>
          <span className="mock-avatar">OY</span>
        </div>

        <div className="mock-stats">
          {[
            ["Total users", education ? "248" : "1,284"],
            [education ? "Groups" : "Orders", education ? "18" : "356"],
            [education ? "Courses" : "Products", education ? "12" : "92"],
          ].map(([label, value]) => (
            <div key={label}>
              <i />
              <small>{label}</small>
              <b>{value}</b>
              <em>+12.8%</em>
            </div>
          ))}
        </div>

        <div className="mock-chart">
          <div className="mock-chart-head">
            <b>Activity overview</b>
            <span>Last 7 days</span>
          </div>
          <div className="chart-bars">
            {[34, 57, 43, 76, 51, 88, 62, 95, 48, 70, 83, 60].map(
              (height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ),
            )}
          </div>
        </div>

        <div className="mock-table">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="section wrap projects-section" id="projects">
      <div className="section-label">
        <span>03</span> / TANLANGAN LOYIHALAR
      </div>

      <div className="section-heading-row">
        <div>
          <h2 className="section-title">
            Amaliy ishlar<span>.</span>
          </h2>
          <p className="section-subtitle">
            O‘rgangan bilimlarimni real loyihalarda qo‘llash orqali
            shakllantirgan tajribam.
          </p>
        </div>

        <a
          className="heading-aside"
          href="https://github.com/YoldoshevOtabek"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={15} />
          BARCHA REPOSITORYLAR
          <ArrowUpRight size={13} />
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-visual">
              <div className="project-overline">
                <span>PROJECT / {project.number}</span>
                <span className="project-status">
                  <i /> COMPLETED
                </span>
              </div>

              <ProjectPreview kind={project.kind} />

              <button
                type="button"
                className="project-expand"
                aria-label={`${project.name} haqida batafsil`}
                onClick={() => setSelectedProject(project)}
              >
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="project-card-body">
              <div className="project-title-line">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="project-number">{project.number}</span>
              </div>

              <p>{project.description}</p>

              <div className="tag-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.href}
                  className="repo-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={15} />
                  Source code
                  <ExternalLink size={12} />
                </a>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSelectedProject(project)}
                >
                  Batafsil <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-footnote">
        <span className="footnote-star">✳</span>
        <p>
          <b>Jarayonda o‘rganish.</b> Har bir loyiha yangi texnologiyalarni
          o‘rganish, kod sifatini yaxshilash va amaliy tajribani oshirish
          imkonini beradi.
        </p>
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Modalni yopish"
            >
              <X size={18} />
            </button>

            <span className="modal-label">
              PROJECT / {selectedProject.number}
            </span>
            <h2 id="project-modal-title">
              {selectedProject.name}<span>.</span>
            </h2>
            <p className="modal-type">{selectedProject.type}</p>

            <ProjectPreview kind={selectedProject.kind} />

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <h3>Asosiy imkoniyatlar</h3>
            <ul className="modal-features">
              {selectedProject.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={15} />
                  {feature}
                </li>
              ))}
            </ul>

            <h3>Texnologiyalar</h3>
            <div className="tag-list">
              {selectedProject.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={selectedProject.href}
              target="_blank"
              rel="noreferrer"
              className="button primary modal-repo"
            >
              <FolderCode size={16} />
              GitHub repository
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

