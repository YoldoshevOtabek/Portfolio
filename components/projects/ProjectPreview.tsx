"use client";

import type { ProjectKind } from "@/data/projects";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

type Props = {
  kind: ProjectKind;
};


const previewIndex = { shop: 0, education: 1, users: 2 } as const;

export default function ProjectPreview({ kind }: Props) {
  const { t } = useI18n();
  const alt = t.projects.items[previewIndex[kind]].previewAlt;

  return (
    <div
      className="relative mt-[22px] flex h-[215px] w-full origin-bottom overflow-hidden rounded-t-lg border border-[#252a3b] bg-[#f5f6fb] shadow-[0_15px_45px_#0005] [transform:perspective(1000px)_rotateX(2deg)] max-[950px]:h-[190px] max-[680px]:mt-5 max-[680px]:h-[197px] max-[370px]:h-[167px]"
      aria-label={`${kind} application preview`}
    >
      
        
      <Image
      src={
        kind === "users"
          ? "/bizdaUsers.png"
          : kind === "shop"
            ? "/BizdaCrm.png"
            : "/G_Crm.png"
      }
      alt={alt}
      fill
      className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
      sizes="(max-width: 680px) 100vw, 50vw"
    />

      
      
       
     
    </div>
  );
}
