'use client';

import Button from '@/components/atoms/Button';
import { iconMap } from '@/components/atoms/Icon';
import RadialChart from '@/components/molecules/RadialChart';
import SectionWrapper from '@/components/molecules/SectionWrapper';

export interface SkillsSectionProps {
  data: any;
}

interface SkillsListItemType {
  percentage: number;
  label: string;
}

const SkillsSection = ({ data }: SkillsSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    <div className="mt-6 flex flex-row">
      {data.skillslist.map((item: SkillsListItemType, index: number) => (
        <RadialChart
          key={`radial-chart-${index}`}
          percentage={item.percentage}
          label={item.label}
          delay={index * 0.15}
        />
      ))}
    </div>
    <div className="mt-10 flex flex-row justify-center xl:mt-12">
      <Button>View all skills</Button>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
