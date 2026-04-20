type CvSummaryBlockProps = {
  title: string;
  items: string[];
};

export function CvSummaryBlock({ title, items }: CvSummaryBlockProps) {
  return (
    <section className="surface p-6 md:p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p
            key={item}
            className="text-muted-foreground text-sm leading-6"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
