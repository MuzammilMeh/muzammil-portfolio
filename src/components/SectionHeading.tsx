interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
