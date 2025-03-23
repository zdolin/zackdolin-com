'use client';
import Heading from '@/components/atoms/Heading';
import { EASE_OUT_QUINT } from '@/constants/easing';
import { motion } from 'framer-motion';

interface SidebarInfoProps {
  name: string;
  description: string;
  detailsList: { label: string; text: string }[];
  isMobile?: boolean;
}

const SidebarInfo = ({
  name,
  description,
  detailsList,
  isMobile = false,
}: SidebarInfoProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0 },
  };

  const HeadingWrapper = isMobile ? motion.div : 'div';
  const Description = isMobile ? motion.p : 'p';
  const ListItem = isMobile ? motion.li : 'li';

  return (
    <>
      <HeadingWrapper
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
      >
        <Heading
          className="text-primary pb-3 pt-6 !text-2xl md:pb-2 lg:pb-4 lg:pt-8 lg:text-3xl"
          level={2}
        >
          {name}
        </Heading>
      </HeadingWrapper>
      <Description
        className="text-secondary text-center text-sm md:text-xs lg:text-base"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_QUINT }}
      >
        {description}
      </Description>
      <ul className="my-8 w-full">
        {detailsList.map((item, index) => (
          <ListItem
            className="flex justify-between border-t border-gray-200 py-4 dark:border-gray-700"
            key={item.label}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              duration: 0.7,
              delay: 0.3 + index * 0.1,
              ease: EASE_OUT_QUINT,
            }}
          >
            <span className="text-primary text-base md:text-sm lg:text-lg">
              {item.label}
            </span>
            <span className="text-primary text-right text-base font-medium md:text-sm lg:text-lg">
              {item.text}
            </span>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default SidebarInfo;
