import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import { FaGithub } from "react-icons/fa";
import { tag } from "@/components/ui/primitives";

type Props = {
  project: Project;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="h-full overflow-hidden rounded-[15px] border border-line bg-[linear-gradient(145deg,#10131e,#0c0f18)] transition duration-200 hover:-translate-y-[5px] hover:border-[#4b416e] light:border-[#e0e3ee] light:bg-[linear-gradient(145deg,#fff,#f7f8fc)]">
      <div className="relative h-[270px] overflow-hidden border-b border-line bg-[#0b0e17] px-[18px] pt-[18px] max-[950px]:h-[245px] max-[680px]:h-[250px] max-[680px]:px-3.5 max-[680px]:pt-[15px] max-[370px]:h-[220px] light:border-[#e0e3ee] light:bg-[#f0f1f8]">
        <div className="relative z-[3] flex items-center justify-between font-mono text-[8px] tracking-[1px] text-[#777e95]">
          <span>PROJECT / {project.number}</span>
          <span className="flex items-center gap-1.5 text-[#7c9f8e]">
            <i className="size-[5px] rounded-full bg-[#70d8a2]" /> COMPLETED
          </span>
        </div>

        <ProjectPreview kind={project.kind} />

        <button
          type="button"
          className="absolute right-[25px] bottom-3.5 z-[4] grid size-9 cursor-pointer place-items-center rounded-[10px] border-0 bg-[#9b7aff] text-white transition hover:translate-x-0.5 hover:-translate-y-0.5"
          aria-label={`${project.name} haqida batafsil`}
          onClick={onOpen}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="p-[22px] max-[680px]:p-[18px]">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[9px] text-[#8b91a7] light:text-[#777d91]">
              {project.type}
            </span>
            <h3 className="mt-[7px] mb-0 text-[22px] tracking-[-0.8px] max-[680px]:text-[21px]">
              {project.name}
            </h3>
          </div>
          <span className="font-mono text-xs text-[#565d74] light:text-[#777d91]">
            {project.number}
          </span>
        </div>

        <p className="my-[15px] text-[11px] leading-[1.8] text-muted light:text-[#666b7f]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <span key={technology} className={tag}>
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-[21px] flex flex-wrap items-center justify-between gap-3 border-t border-[#25293a] pt-[17px] max-[370px]:gap-2.5 light:border-[#e0e3ee]">
          <a
            href={project.href}
            className="flex items-center gap-[7px] text-[10px] text-[#9ca2b6] hover:text-white max-[370px]:text-[9px] light:text-[#555a70]"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={15} />
            Source code
            <ExternalLink size={12} />
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-[9px] border-0 bg-transparent p-0 text-xs font-bold text-[#c3b4ff] hover:text-white"
              onClick={onOpen}
            >
              Batafsil <ArrowUpRight size={14} />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#9b7aff] px-2.5 py-1.5 text-[10px] font-bold text-white hover:bg-[#8a6af0]"
              >
                Loyihani ko‘rish
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
