import Heading from '@/components/atoms/Heading';
import { iconMapper } from '@/components/atoms/Icon';
import SectionCategoryIndicator from '@/components/molecules/SectionCategoryIndicator';
import clsx from 'clsx';

export interface SectionWrapperProps {
  iconType: keyof typeof iconMapper;
  category: string;
  heading: string;
  body: string;
  className?: string;
}

const SectionWrapper = ({
  iconType,
  category,
  heading,
  body,
  className = '',
}: SectionWrapperProps) => (
  <section
    id={category.toLowerCase()}
    className={clsx('surface-primary w-full rounded-3xl p-8', className)}
  >
    <div className="flex w-full flex-col items-center md:items-start">
      <SectionCategoryIndicator iconType={iconType} category={category} />
      <Heading className="my-2 w-full text-center md:w-3/5 md:text-left lg:my-3">{heading}</Heading>
      <p className="w-full text-sm text-neutral-500 md:w-3/5 lg:text-lg">{body}</p>
    </div>
  </section>
);

export default SectionWrapper;
