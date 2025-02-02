import { iconMap } from '@/components/atoms/Icon';
import Card from '@/components/molecules/Card';
import HeadingWithBody from '@/components/molecules/HeadingWithBody';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { EducationItemType, ExperienceItemType } from '@/types/component';

export interface ResumeSectionProps {
  data: any;
}

const ResumeSection = ({ data }: ResumeSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    {data.experienceList.map((item: ExperienceItemType, index: number) => (
      <Card className="mb-4" key={index} {...item} index={index} />
    ))}
    <HeadingWithBody
      className="pb-4 pt-8 md:pt-10"
      heading={data.heading2}
      body={data.body2}
    />
    {data.educationList.map((item: EducationItemType, index: number) => (
      <Card className="mb-4" key={index} {...item} index={index} />
    ))}
  </SectionWrapper>
);

export default ResumeSection;
