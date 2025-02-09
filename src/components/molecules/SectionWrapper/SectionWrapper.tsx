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
  headingClass?: string;
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
  headingClass = '',
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
          headingClass={headingClass}
        />
        {heroImage && (
          <>
            <HeroAvatar
              className="mb-4 mt-12 md:mb-0 md:mt-0"
              sizeClass="w-[14.125rem] h-[14.125rem] md:w-[11.313rem] md:h-[11.313rem] lg:w-[18.5rem] lg:h-[18.5rem]"
              circleClass={clsx(
                'border-[1.5rem] border-yellow-50 bg-yellow-300 dark:border-yellow-950 dark:bg-yellow-800',
                'outline-dashed outline-[0.75px] outline-offset-[0.75rem] outline-yellow-300 dark:outline-yellow-800'
              )}
              imageClass="-mt-10"
              image={heroImage}
            />
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
