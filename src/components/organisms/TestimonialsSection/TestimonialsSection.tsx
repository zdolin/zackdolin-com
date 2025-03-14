'use client';

import { iconMap } from '@/components/atoms/Icon';
import CardTestimonial from '@/components/molecules/CardTestimonial';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import Carousel from '@/components/organisms/Carousel';
import { TestimonialItemType } from '@/types/component';
import clsx from 'clsx';

export interface TestimonialsSectionProps {
  data: {
    categoryIcon: string;
    category: string;
    heading: string;
    body: string;
    testimonialList: TestimonialItemType[];
  };
}

const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  return (
    <SectionWrapper
      className="mb-6"
      iconType={data.categoryIcon as keyof typeof iconMap}
      category={data.category}
      heading={data.heading}
      body={data.body}
    >
      <Carousel>
        {data.testimonialList.map((testimonial, index) => (
          <div
            key={index}
            className={clsx(
              'embla__slide flex-[0_0_100%]',
              'lg:flex-[0_0_calc(100%-96px)]'
            )}
          >
            <CardTestimonial {...testimonial} />
          </div>
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
