import RatingSVG from '@/assets/images/rating.svg';
import { timeAgo } from '@/utils';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export interface CardTestimonialProps {
  quote: string;
  author: string;
  authorTitle: string;
  date: string;
  image: ImageProps;
  className?: string;
}

const CardTestimonial = ({
  quote,
  author,
  authorTitle,
  date,
  image,
  className = '',
}: CardTestimonialProps) => (
  <div
    className={clsx(
      'card-base bg-card-testimonial p-6 py-12 md:py-6',
      className
    )}
  >
    <div className="flex w-full flex-col">
      <RatingSVG alt="5 star rating" />
      <p className="py-6 text-sm text-text-primary lg:text-lg">{`“${quote}”`}</p>
      <div
        className={clsx(
          'flex w-full flex-col sm:flex-row',
          'items-center justify-between'
        )}
      >
        <div className="flex gap-5">
          <Image
            className="mt-1 h-12 w-12 rounded-full"
            src={image.src}
            alt={image.alt}
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-text-primary lg:text-2xl">
              {author}
            </p>
            <p className="text-sm text-text-secondary lg:text-lg">
              {authorTitle}
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-text-secondary md:text-sm lg:text-lg">
          {timeAgo(date)}
        </p>
      </div>
    </div>
  </div>
);

export default CardTestimonial;
