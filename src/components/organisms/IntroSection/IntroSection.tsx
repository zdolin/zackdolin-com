'use client';

import Button from '@/components/atoms/Button';
import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { EASE_OUT_QUINT } from '@/constants/easing';
import { ChecklistItemType, StatsItemType } from '@/types/component';
import { IntroSectionDataType } from '@/types/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface IntroSectionProps {
  data: IntroSectionDataType;
}

const IntroSection = ({ data }: IntroSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
    isVertical={true}
    heroImage={data.heroImage}
    showSourceLink={true}
  >
    <ul className="mb-8 mt-8 flex w-full space-x-8 md:mt-0">
      {data.checklist.map((item: ChecklistItemType, index: number) => (
        <li key={index} className="flex w-1/2 overflow-hidden sm:w-auto">
          <motion.span
            className="z-20"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: 'backOut',
              delay: 0.3 + 0.2 * index,
            }}
            viewport={{ once: true, margin: '0px 0px -18% 0px' }}
          >
            <CircleIcon
              className="h-6 w-6 p-1"
              type={item.icon as keyof typeof iconMap}
              aria-hidden="true"
            />
          </motion.span>
          <motion.span
            className="md:text-md z-10 ml-3 text-lg text-text-primary lg:text-lg"
            initial={{ opacity: 0, transform: 'translateX(-100%)' }}
            whileInView={{ opacity: 1, transform: 'translateX(0px)' }}
            transition={{
              duration: 0.4,
              ease: EASE_OUT_QUINT,
              delay: 0.5 + 0.2 * index,
            }}
            viewport={{ once: true, margin: '0px 0px -18% 0px' }}
          >
            {item.text}
          </motion.span>
        </li>
      ))}
    </ul>
    <div className="my-2 flex w-full justify-center md:justify-start">
      <Button
        className="w-full md:w-auto"
        animationDelay={0.8}
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/files/Zack-Dolin_Resume.pdf';
          link.download = 'Zack Dolin - Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Download CV
      </Button>
    </div>
    <ul className="mt-8 flex flex-wrap justify-center gap-6 text-center lg:gap-8">
      {data.statsList.map((stat: StatsItemType, index: number) => (
        <motion.li
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{
            duration: 0.4,
            ease: 'backOut',
            delay: 0.65 + 0.1 * index,
          }}
          viewport={{ once: true, margin: '0px 0px -18% 0px' }}
          key={index}
          className={clsx(
            'flex flex-col items-start lg:flex-row',
            index < data.statsList.length - 1
              ? 'border-r border-neutral-500 border-opacity-25 lg:pr-6'
              : ''
          )}
        >
          <motion.span
            className="text-left text-4xl font-medium text-text-primary md:text-[2.625rem] xl:text-6xl"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: 'backOut',
              delay: 0.7 + 0.1 * index,
            }}
            viewport={{ once: true, margin: '0px 0px -18% 0px' }}
          >
            {stat.quantity}
          </motion.span>
          <motion.span
            className="mt-2 max-w-24 text-left text-base text-text-secondary lg:ml-4 lg:mt-0 xl:text-lg"
            initial={{ opacity: 0, y: '-100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: 'backOut',
              delay: 0.7 + 0.1 * index,
            }}
            viewport={{ once: true, margin: '0px 0px -18% 0px' }}
          >
            {stat.text}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  </SectionWrapper>
);

export default IntroSection;
