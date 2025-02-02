import tempData from '@/app/data/mock.json';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import CardTestimonial from './CardTestimonial';

const meta: Meta<typeof CardTestimonial> = {
  title: 'molecules/CardTestimonial',
  component: CardTestimonial,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardTestimonial>;

export const Default: Story = {
  args: tempData.sections.testimonials.testimonialList[0],
};

const ListStory: StoryFn<typeof CardTestimonial> = () => (
  <>
    {tempData.sections.testimonials.testimonialList.map(
      (item: any, index: number) => (
        <CardTestimonial className="mb-4" key={index} {...item} index={index} />
      )
    )}
  </>
);

export const CardList: StoryFn<typeof CardTestimonial> = ListStory;
