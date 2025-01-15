'use client';

import { iconMap } from '@/components/atoms/Icon';
import CardTestimonial from '@/components/molecules/CardTestimonial';
import SectionWrapper from '@/components/molecules/SectionWrapper';
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
    inViewThreshold: 0.1, // Adjusts how much of the side is visible
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
          <div
            className={clsx(
              'embla__container flex',
              'gap-4', // Adjust spacing between slides
              'lg:-mx-12' // Adds peek effect on larger screens
            )}
          >
            {data.testimonialList.map((testimonial: any, index: number) => (
              <div
                className={clsx(
                  'embla__slide flex-[0_0_100%]', // Full width for mobile
                  'lg:flex-[0_0_calc(100%-96px)]' // Peek on desktop (adjust -96px for more/less peek)
                )}
                key={index}
              >
                <CardTestimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className={clsx(
            'absolute bottom-0 left-0 z-10',
            'rounded-full bg-white p-2 shadow-lg dark:bg-gray-700',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <button
          className={clsx(
            'absolute bottom-0 right-0 z-10',
            'rounded-full bg-white p-2 shadow-lg dark:bg-gray-700',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next"
        >
          <span className="material-icons">chevron_right</span>
        </button>

        {/* Dots Navigation */}
        <div className="mt-6 flex justify-center">
          {data.testimonialList.map((_: any, index: number) => (
            <button
              key={index}
              className={clsx(
                'mx-1 h-3 w-3 rounded-full',
                emblaApi?.selectedScrollSnap() === index
                  ? 'bg-blue-500'
                  : 'bg-gray-400 dark:bg-gray-600'
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
