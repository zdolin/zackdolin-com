import Heading from '@/components/atoms/Heading';
import { iconMapper } from '@/components/atoms/Icon';
import SectionCategoryIndicator from '@/components/molecules/SectionCategoryIndicator';

export interface SectionWrapperProps {
  iconType: keyof typeof iconMapper;
  category: string;
  heading: string;
}

const SectionWrapper = ({ iconType, category, heading }: SectionWrapperProps) => (
  <div className="surface-primary w-1/2 w-full rounded-3xl p-8">
    <SectionCategoryIndicator iconType={iconType} category={category} />
    <Heading className="mt-2 lg:mt-3">{heading}</Heading>
  </div>
);

export default SectionWrapper;
