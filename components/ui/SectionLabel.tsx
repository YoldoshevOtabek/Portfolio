import { ArrowDownRight } from "lucide-react";

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
    <div className="section-label">
      <div className="section-label-top">
        <span className="section-label-number">{number}</span>

        <span className="section-label-name">{label}</span>

        <ArrowDownRight size={18} />
      </div>

      <h2 className="section-label-title">{title}</h2>

      {description && (
        <p className="section-label-description">{description}</p>
      )}
    </div>
  );
}

