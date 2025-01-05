import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';

export interface IntroSectionProps {
  data: any;
}

const IntroSection = ({ data }: IntroSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
    isVertical={true}
  />
);

export default IntroSection;
