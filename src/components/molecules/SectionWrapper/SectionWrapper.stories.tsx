import mockData from '@/app/data/mock.json';
import { iconMap } from '@/components/atoms/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import SectionWrapper from './SectionWrapper';

const meta: Meta<typeof SectionWrapper> = {
  title: 'molecules/SectionWrapper',
  component: SectionWrapper,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'sky-100',
      values: [{ name: 'sky-100', value: '#dfeef7' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionWrapper>;

export const Default: Story = {
  args: {
    iconType: mockData.sections.introduction
      .categoryIcon as keyof typeof iconMap,
    category: mockData.sections.introduction.category,
    heading: mockData.sections.introduction.heading,
    body: mockData.sections.introduction.body,
  },
};
