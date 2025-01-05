import { iconMap } from '@/components/atoms/Icon';
import SectionCategoryIndicator from '@/components/molecules/SectionCategoryIndicator';
import clsx from 'clsx';
import HeadingWithBody from '../HeadingWithBody';

export interface SectionWrapperProps {
  iconType: keyof typeof iconMap;
  category: string;
  heading: string;
  body: string;
  className?: string;
  isVertical?: boolean;
  children?: React.ReactNode;
}

const SectionWrapper = ({
  iconType,
  category,
  heading,
  body,
  className = '',
  isVertical = false,
  children,
}: SectionWrapperProps) => (
  <section
    id={category.toLowerCase()}
    className={clsx('surface-primary w-full rounded-3xl p-8', className)}
  >
    <div className="flex w-full flex-col items-center md:items-start">
      <SectionCategoryIndicator iconType={iconType} category={category} />
      <HeadingWithBody heading={heading} body={body} isVertical={isVertical} />
    </div>
    {children && <div className="mt-4">{children}</div>}
  </section>
);

export default SectionWrapper;
