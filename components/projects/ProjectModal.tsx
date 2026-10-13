"use client";

import { useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import { FaGithub } from "react-icons/fa";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={19} />
        </button>

        <div className="modal-label">
          CASE STUDY / {project.number}
        </div>

        <h2 id="project-modal-title">
          {project.name}<span>.</span>
        </h2>

        <p className="modal-type">{project.type}</p>

        <ProjectPreview kind={project.kind} />

        <p className="modal-description">{project.description}</p>

        <h3>Key features</h3>
        <ul className="modal-features">
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={15} />
              {feature}
            </li>
          ))}
        </ul>

        <h3>Technologies</h3>
        <div className="tag-list modal-tags">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a
          className="button primary modal-repo"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          Explore repository
          <FaGithub size={16} />
          <ArrowUpRight size={15} />
        </a>
      </section>
    </div>
  );
}