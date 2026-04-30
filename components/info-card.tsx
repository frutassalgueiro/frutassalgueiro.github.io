import Image from 'next/image';

interface InfoCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  descriptionStyle?: 'plain' | 'ingredients';
}

export function InfoCard({ image, alt, title, description, descriptionStyle = 'plain' }: InfoCardProps) {
  const ingredients = description
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="card group p-3">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold leading-tight text-leaf">{title}</h3>
      {descriptionStyle === 'ingredients' ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <span
              key={`${title}-${ingredient}`}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900"
            >
              {ingredient}
            </span>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{description}</p>
      )}
    </article>
  );
}

