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
          className="pb-3 pt-6 !text-2xl text-text-primary md:pb-2 lg:pb-4 lg:pt-8 lg:text-3xl"
          level={2}
        >
          {name}
        </Heading>
      </HeadingWrapper>
      <Description
        className="text-center text-sm text-text-secondary md:text-xs lg:text-base"
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
            className="border-border-muted flex justify-between border-t py-4"
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
            <span className="text-base text-text-primary md:text-sm lg:text-lg">
              {item.label}
            </span>
            <span className="text-right text-base font-medium text-text-primary md:text-sm lg:text-lg">
              {item.text}
            </span>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

export default SidebarInfo;
