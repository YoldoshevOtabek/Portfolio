import { ArrowDownRight } from "lucide-react";
import { sectionLabel, sectionTitle } from "@/components/ui/primitives";

interface SectionLabelProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionLabel({
  number,
  label,
  title,
  description,
}: SectionLabelProps) {
  return (
    <div>
      <div className={`${sectionLabel} mb-4`}>
        <span className="text-[11px] text-purple">{number}</span>
        <span>{label}</span>
        <ArrowDownRight size={18} />
      </div>

      <h2 className={sectionTitle}>{title}</h2>

      {description && (
        <p className="mt-3 max-w-[560px] text-xs leading-[1.7] text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
