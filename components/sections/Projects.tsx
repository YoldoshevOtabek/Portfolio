"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import {
  wrap,
  section,
  sectionLabel,
  sectionTitle,
  headingRow,
  subtitle,
  headingAside,
} from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={`${section} ${wrap} pb-3`} id="projects">
      <div className={sectionLabel}>
        <span className="text-[11px] text-purple">03</span> / TANLANGAN LOYIHALAR
      </div>

      <div className={headingRow}>
        <div>
          <h2 className={sectionTitle}>
            Amaliy ishlar
          </h2>
          <p className={subtitle}>
            O‘rgangan bilimlarimni real loyihalarda qo‘llash orqali
            shakllantirgan tajribam
          </p>
        </div>

        <a
          className={headingAside}
          href="https://github.com/YoldoshevOtabek"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={15} className="text-purple" />
          BARCHA REPOSITORYLAR
          <ArrowUpRight size={13} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 max-[680px]:gap-[15px]">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 100} className="h-full">
            <ProjectCard
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
      <div className="mt-5 flex items-center gap-3 rounded-[10px] border border-[#29243e] bg-[#12101d] px-[17px] py-[15px] text-[10px] leading-[1.7] text-[#8e93a9] max-[680px]:items-start light:border-[#ddd5ff] light:bg-[#f0edff] light:text-[#5e5d77]">
        <span className="text-[18px] text-purple">✳</span>
        <p className="m-0">
           Har bir loyiha yangi texnologiyalarni
          o‘rganish, kod sifatini yaxshilash va amaliy tajribani oshirish
          imkonini beradi.
        </p>
      </div>
      </Reveal>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
