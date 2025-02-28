import clsx from 'clsx';
export interface CardProps {
  index?: number;
  title: string;
  description: string;
  date: string;
  location: string;
  company?: string;
  className?: string;
}

const Card = ({
  index,
  title,
  description,
  company,
  date,
  location,
  className = '',
}: CardProps) => (
  <div
    className={clsx(
      index && index % 2 === 1 ? 'surface-accent' : 'surface-tertiary',
      'card-base flex-col-reverse p-4 md:flex-row md:p-6',
      className
    )}
  >
    <div className="md:pr-4">
      <h3
        className={clsx(
          'text-primary text-center text-base font-medium tracking-wide md:font-semibold',
          'md:text-left md:text-lg lg:text-2xl'
        )}
      >
        {title} {company && `· ${company}`}
      </h3>
      <p className="text-secondary text-center text-base md:text-left md:text-sm lg:text-lg">
        {description}
      </p>
    </div>
    <aside className="mb-4 md:mb-0 md:min-w-40">
      <h4 className="text-primary text-center text-sm uppercase md:text-right lg:text-base">
        {date}
      </h4>
      <p className="text-secondary text-center text-sm md:text-right lg:text-base">
        {location}
      </p>
    </aside>
  </div>
);

export default Card;
