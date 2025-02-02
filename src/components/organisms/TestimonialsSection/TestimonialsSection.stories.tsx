import mockData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import TestimonialsSection from './TestimonialsSection';

const meta: Meta<typeof TestimonialsSection> = {
  title: 'organisms/TestimonialsSection',
  component: TestimonialsSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TestimonialsSection>;

export const Default: Story = {
  args: { data: mockData.sections.testimonials },
};
