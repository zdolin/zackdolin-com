'use client';

import Button from '@/components/atoms/Button';
import Icon, { iconMap } from '@/components/atoms/Icon';
import CardTestimonial from '@/components/molecules/CardTestimonial';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import { TestimonialItemType } from '@/types/component';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export interface TestimonialsSectionProps {
  data: any;
}

const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    inViewThreshold: 0.1,
  });
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
    setCurrentSlideIndex(emblaApi?.selectedScrollSnap() ?? 0);
  };
  const scrollNext = () => {
    emblaApi?.scrollNext();
    setCurrentSlideIndex(emblaApi?.selectedScrollSnap() ?? 0);
  };

  return (
    <SectionWrapper
      className="mb-6"
      iconType={data.categoryIcon as keyof typeof iconMap}
      category={data.category}
      heading={data.heading}
      body={data.body}
    >
      <div className="relative">
        {/* Embla Carousel */}
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className={clsx('embla__container flex', 'gap-4', 'lg:-mx-12')}>
            {data.testimonialList.map(
              (testimonial: TestimonialItemType, index: number) => (
                <div
                  className={clsx(
                    'embla__slide flex-[0_0_100%]',
                    'lg:flex-[0_0_calc(100%-96px)]'
                  )}
                  key={index}
                >
                  <CardTestimonial {...testimonial} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          className={clsx(
            'absolute bottom-0 left-0 z-10 -mb-6 rounded-full !p-3',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'scale-75 transform lg:scale-90'
          )}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous"
          hideArrow
        >
          <Icon type="chevronLeft" />
        </Button>
        <Button
          className={clsx(
            'absolute bottom-0 right-0 z-10 -mb-6 rounded-full !p-3',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'scale-75 transform lg:scale-90'
          )}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next"
          hideArrow
        >
          <Icon type="chevronRight" />
        </Button>

        {/* Dots Navigation */}
        <div className="mt-8 flex justify-center">
          {data.testimonialList.map((_: any, index: number) => (
            <button
              key={index}
              className={clsx(
                'mx-2 h-1 w-12 rounded-full md:h-1.5 md:w-6 lg:mx-3 lg:w-[3.75rem]',
                currentSlideIndex === index
                  ? 'bg-blue-500'
                  : 'bg-gray-400 dark:bg-gray-600'
              )}
              onClick={() => {
                emblaApi?.scrollTo(index);
                setCurrentSlideIndex(emblaApi?.selectedScrollSnap() ?? 0);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
