interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">
      <h2 className="title-font text-4xl md:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-neutral-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}