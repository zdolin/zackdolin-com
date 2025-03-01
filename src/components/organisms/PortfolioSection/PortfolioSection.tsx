'use client';

import { iconMap } from '@/components/atoms/Icon';
import CardProject from '@/components/molecules/CardProject';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { EASE_OUT_QUINT } from '@/constants/easing';
import { PortfolioItemType } from '@/types/component';
import { PortfolioSectionDataType } from '@/types/data';
import { motion } from 'framer-motion';

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
        <motion.div
          key={`project-card-${index}`}
          initial={{
            opacity: 0,
            x:
              Math.random() *
              (typeof window !== 'undefined' ? window.innerWidth / 4 : 200),
            y: 400,
            rotate: Math.random() * 30 - 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.5,
            ease: EASE_OUT_QUINT,
            delay: 0.2 * index,
          }}
          viewport={{ once: true, margin: '0px 0px 30% 0px' }}
        >
          <CardProject {...card} />
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PortfolioSection;
