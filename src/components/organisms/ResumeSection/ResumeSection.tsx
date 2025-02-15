'use client';

import { iconMap } from '@/components/atoms/Icon';
import Card from '@/components/molecules/Card';
import HeadingWithBody from '@/components/molecules/HeadingWithBody';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { EASE_OUT_QUINT } from '@/constants/easing';
import { EducationItemType, ExperienceItemType } from '@/types/component';
import { ResumeSectionDataType } from '@/types/data';
import { motion } from 'framer-motion';

export interface ResumeSectionProps {
  data: ResumeSectionDataType;
}

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: '50%', filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{
      duration: 1,
      ease: EASE_OUT_QUINT,
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const ResumeSection = ({ data }: ResumeSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    {data.experienceList.map((item: ExperienceItemType, index: number) => (
      <MotionWrapper key={item.title.toLowerCase()}>
        <Card className="mb-4" key={index} {...item} index={index} />
      </MotionWrapper>
    ))}
    <HeadingWithBody
      className="pb-4 pt-8 md:pt-10"
      heading={data.heading2}
      body={data.body2}
    />
    {data.educationList.map((item: EducationItemType, index: number) => (
      <MotionWrapper key={item.title.toLowerCase()}>
        <Card className="mb-4" {...item} index={index} />
      </MotionWrapper>
    ))}
  </SectionWrapper>
);

export default ResumeSection;
