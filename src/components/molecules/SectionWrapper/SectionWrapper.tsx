import { iconMap } from '@/components/atoms/Icon';
import HeadingWithBody from '@/components/molecules/HeadingWithBody';
import HeroAvatar from '@/components/molecules/HeroAvatar';
import SectionCategoryIndicator from '@/components/molecules/SectionCategoryIndicator';
import clsx from 'clsx';
import { ImageProps } from 'next/image';

export interface SectionWrapperProps {
  iconType: keyof typeof iconMap;
  category: string;
  heading: string;
  body: string;
  className?: string;
  isVertical?: boolean;
  children?: React.ReactNode;
  heroImage?: ImageProps;
}

const SectionWrapper = ({
  iconType,
  category,
  heading,
  body,
  className = '',
  isVertical = false,
  heroImage,
  children,
}: SectionWrapperProps) => (
  <section
    id={category.toLowerCase()}
    className={clsx('surface-primary w-full rounded-3xl px-8 py-10', className)}
  >
    <div className="flex w-full flex-col items-center md:items-start">
      <SectionCategoryIndicator
        className={clsx(heroImage && 'hidden md:flex')}
        iconType={iconType}
        category={category}
      />
      <div className="flex flex-col-reverse items-center space-x-6 md:flex-row">
        <HeadingWithBody
          heading={heading}
          body={body}
          isVertical={isVertical}
        />
        {heroImage && (
          <>
            <HeroAvatar
              className="mb-4 mt-6 md:mb-0 md:mt-0"
              image={heroImage}
            />{' '}
            <SectionCategoryIndicator
              className="md:hidden"
              iconType={iconType}
              category={category}
            />
          </>
        )}
      </div>
    </div>

    {children && <div className="mt-4">{children}</div>}
  </section>
);

export default SectionWrapper;
