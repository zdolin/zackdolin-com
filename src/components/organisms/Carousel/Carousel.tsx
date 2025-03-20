'use client';

import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { EASE_OUT_QUART } from '@/constants/easing';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

export interface CarouselProps {
  children: React.ReactNode;
  options?: any;
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  centeredArrows?: boolean;
  showDots?: boolean;
}

const Carousel = ({
  children,
  options,
  className,
  autoplay = false,
  autoplayDelay = 3000,
  centeredArrows = false,
  showDots = true,
}: CarouselProps) => {
  // If autoplay is enabled, use the Autoplay plugin with the specified delay:
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      inViewThreshold: 0.1,
      ...options,
    },
    plugins
  );
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setCurrentSlideIndex(emblaApi.selectedScrollSnap());
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

  const slides = React.Children.toArray(children);

  return (
    <div className={clsx('relative', className)}>
      <div ref={emblaRef} className="embla overflow-hidden">
        <div className={clsx('embla__container flex gap-4 lg:-mx-12')}>
          {slides}
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.div
        className={clsx(
          'absolute left-0 z-10 -mb-6 ml-1',
          centeredArrows ? 'bottom-1/2' : 'bottom-0'
        )}
        initial={{ opacity: 0, x: '100%' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
        viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      >
        <Button
          className={clsx(
            'rounded-full !p-3',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'scale-75 transform lg:scale-90',
            centeredArrows && '!shadow-lg'
          )}
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous"
          hideArrow
        >
          <Icon type="chevronLeft" />
        </Button>
      </motion.div>
      <motion.div
        className={clsx(
          'absolute right-0 z-10 -mb-6 mr-1',
          centeredArrows ? 'bottom-1/2' : 'bottom-0'
        )}
        initial={{ opacity: 0, x: '-100%' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
        viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      >
        <Button
          className={clsx(
            'rounded-full !p-3',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'scale-75 transform lg:scale-90',
            centeredArrows && '!shadow-lg'
          )}
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next"
          hideArrow
        >
          <Icon type="chevronRight" />
        </Button>
      </motion.div>

      {/* Dots Navigation */}
      {showDots && (
        <div className="mt-8 flex justify-center">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scaleX: 0.5 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE_OUT_QUART }}
              viewport={{ once: true, margin: '0px 0px -5% 0px' }}
              className={clsx(
                'mx-2 h-1 w-10 rounded-full md:h-1.5 md:w-6 lg:mx-3 lg:w-[3.75rem]',
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
      )}
    </div>
  );
};

export default Carousel;
