import Button from '@/components/atoms/Button';
import { iconMap } from '@/components/atoms/Icon';
import RadialChart from '@/components/molecules/RadialChart';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { SkillsSectionDataType } from '@/types/data';
import clsx from 'clsx';

export interface SkillsSectionProps {
  data: SkillsSectionDataType;
}

interface SkillItemType {
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
    <div className="mt-6 grid grid-cols-12 justify-center gap-4 lg:grid-cols-5">
      {data.skillsList.map((item: SkillItemType, index: number) => (
        <RadialChart
          key={`radial-chart-${index}`}
          className={clsx(
            index < 3 ? 'col-span-4' : 'col-span-6',
            index === 3 ? 'pl-12' : '',
            index === 4 ? 'pr-12' : '',
            'lg:col-span-1 lg:p-0'
          )}
          percentage={item.percentage}
          label={item.label}
          delay={index * 0.15}
        />
      ))}
    </div>
    <div className="mt-10 flex justify-center xl:mt-12">
      <Button>
        <a
          className="py-3"
          href="/files/Zack-Dolin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
      </Button>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
