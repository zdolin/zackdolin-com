import RatingSVG from '@/assets/images/rating.svg';
import { timeAgo } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image';

export interface CardTestimonialProps {
  quote: string;
  author: string;
  authorTitle: string;
  date: string;
  avatarSrc: string;
  className?: string;
}

const CardTestimonial = ({
  quote,
  author,
  authorTitle,
  date,
  avatarSrc,
  className = '',
}: CardTestimonialProps) => (
  <div
    className={clsx(
      'card-base bg-gray-100 p-6 py-12 dark:bg-gray-900 md:py-6',
      className
    )}
  >
    <div className="flex flex-col">
      <RatingSVG alt="5 star rating" />
      <p className="text-primary py-6 text-sm lg:text-lg">{`“${quote}”`}</p>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex">
          <Image
            className="mr-5 mt-1 h-12 w-12 rounded-full"
            src={avatarSrc}
            alt={author}
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <p className="text-primary text-lg font-semibold lg:text-2xl">
              {author}
            </p>
            <p className="text-secondary text-sm lg:text-lg">{authorTitle}</p>
          </div>
        </div>
        <p className="text-xs md:text-sm lg:text-lg">{timeAgo(date)}</p>
      </div>
    </div>
  </div>
);

export default CardTestimonial;
