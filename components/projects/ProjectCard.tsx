import { ArrowUpRight, ExternalLink} from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import { FaGithub } from "react-icons/fa";

type Props = {
  project: Project;
  onOpen: (name: string) => void;
};

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="project-card">
      <div className="project-card-visual">
        <div className="project-overline">
          <span>PROJECT / {project.number}</span>
          <span className="project-status">
            <i /> PERSONAL PROJECT
          </span>
        </div>

        <ProjectPreview kind={project.kind} />

        <button
          className="project-expand"
          onClick={() => onOpen(project.name)}
          aria-label={`View ${project.name} details`}
        >
          <ArrowUpRight size={20} />
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
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-card-footer">
          <button
            className="text-link"
            onClick={() => onOpen(project.name)}
          >
            View case study <ArrowUpRight size={15} />
          </button>

          <a
            className="repo-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={16} />
            Source code
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
}