import { iconMap } from '@/components/atoms/Icon';
import CardProject from '@/components/molecules/CardProject';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { ImageProps } from 'next/image';

export interface ProjectsSectionProps {
  data: any;
}

interface PortfolioCardType {
  image: ImageProps;
  heading: string;
  description: string;
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {data.projectsList.map((card: PortfolioCardType, index: number) => (
        <CardProject key={`project-card-${index}`} {...card} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
