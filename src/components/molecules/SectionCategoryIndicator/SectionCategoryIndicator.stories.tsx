import type { Meta, StoryObj } from '@storybook/react';
import SectionCategoryIndicator from './SectionCategoryIndicator';

const meta: Meta<typeof SectionCategoryIndicator> = {
  title: 'molecules/SectionCategoryIndicator',
  component: SectionCategoryIndicator,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionCategoryIndicator>;

export const Default: Story = {
  args: {
    iconType: 'home',
  },
};
