import type { Meta, StoryObj } from '@storybook/react';
import RadialChart from './RadialChart';

const meta: Meta<typeof RadialChart> = {
  title: 'molecules/RadialChart',
  component: RadialChart,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadialChart>;

export const Default: Story = {
  args: {
    percentage: 88,
  },
};
