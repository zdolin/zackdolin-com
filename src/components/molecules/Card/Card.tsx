import clsx from 'clsx';
export interface CardProps {
  index?: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

const Card = ({ index, title, description, date, location }: CardProps) => (
  <div
    className={clsx(
      index && index % 2 === 0 ? 'surface-secondary' : 'surface-tertiary',
      'flex flex-col-reverse justify-between rounded-lg p-4 md:flex-row'
    )}
  >
    <div>
      <h3 className="text-primary text-center text-base font-medium md:text-left md:text-lg md:font-semibold lg:text-2xl">
        {title}
      </h3>
      <p className="text-secondary text-center text-base md:text-left md:text-sm lg:text-lg">
        {description}
      </p>
    </div>
    <aside className="mb-4 md:mb-0">
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
