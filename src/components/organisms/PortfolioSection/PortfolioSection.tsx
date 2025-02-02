import { iconMap } from '@/components/atoms/Icon';
import CardProject from '@/components/molecules/CardProject';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { PortfolioItemType } from '@/types/component';
import { PortfolioSectionDataType } from '@/types/data';

export interface PortfolioSectionProps {
  data: PortfolioSectionDataType;
}

const PortfolioSection = ({ data }: PortfolioSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {data.projectsList.map((card: PortfolioItemType, index: number) => (
        <CardProject key={`project-card-${index}`} {...card} />
      ))}
    </div>
  </SectionWrapper>
);

export default PortfolioSection;
