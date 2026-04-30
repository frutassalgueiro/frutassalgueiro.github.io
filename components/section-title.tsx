interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="section-subheading">{subtitle}</p> : null}
    </div>
  );
}

