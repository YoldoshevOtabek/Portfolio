"use client";

import { useEffect } from "react";
import { ArrowUpRight, CheckCircle2, X, FolderCode, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import { btnPrimary, btnGhost, tag } from "@/components/ui/primitives";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="motion-fade fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#03040bd9] p-6 backdrop-blur-[10px] max-[680px]:p-3"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="motion-pop relative max-h-[90vh] w-[min(620px,100%)] overflow-y-auto rounded-[17px] border border-[#35314f] bg-panel p-7 shadow-[0_30px_100px_#000a] max-[680px]:max-h-[94vh] max-[680px]:px-[17px] max-[680px]:py-[22px] light:border-[#e0e3ee] light:bg-white light:text-[#1b1b2b]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="absolute top-5 right-5 grid size-[35px] cursor-pointer place-items-center rounded-[9px] border border-[#303348] bg-[#171a28] light:bg-[#f2f3f9] light:text-[#333]"
          onClick={onClose}
          aria-label="Modalni yopish"
        >
          <X size={18} />
        </button>

        <span className="font-mono text-[9px] tracking-[1.4px] text-[#a795ff]">
          PROJECT / {project.number}
        </span>
        <h2
          id="project-modal-title"
          className="mt-[13px] mb-[5px] text-[34px] tracking-[-1px] max-[680px]:text-[29px]"
        >
          {project.name}
          <span className="text-purple">.</span>
        </h2>
        <p className="mb-[18px] text-xs text-muted">{project.type}</p>
        <p className="mb-[18px] text-xs text-muted">{project?.login} </p>

        <div className="mb-5 [&_[aria-label]]:mt-0 [&_[aria-label]]:h-[240px] max-[680px]:[&_[aria-label]]:h-[205px]">
          <ProjectPreview kind={project.kind} />
        </div>

        <p className="text-xs leading-[1.9] text-[#aeb3c6] light:text-[#555a70]">
          {project.description}
        </p>

        <h3 className="mt-[22px] mb-3 text-xs">Asosiy imkoniyatlar</h3>
        <ul className="grid list-none grid-cols-2 gap-[11px] p-0 max-[680px]:grid-cols-1">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[10px] leading-[1.6] text-[#b9bed0] light:text-[#555a70]"
            >
              <CheckCircle2 size={15} className="shrink-0 text-cyan" />
              {feature}
            </li>
          ))}
        </ul>

        <h3 className="mt-[22px] mb-3 text-xs">Texnologiyalar</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <span key={technology} className={tag}>
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-[23px] flex flex-wrap gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              Loyihani ko‘rish
              <ExternalLink size={15} />
            </a>
          )}

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={project.liveUrl ? btnGhost : btnPrimary}
          >
            <FolderCode size={16} />
            GitHub repository
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
