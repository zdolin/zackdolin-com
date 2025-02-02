import tempData from '@/app/data/mock-data.json';
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
    iconType: tempData.sections.introduction
      .categoryIcon as keyof typeof iconMap,
    category: tempData.sections.introduction.category,
    heading: tempData.sections.introduction.heading,
    body: tempData.sections.introduction.body,
  },
};
