import type { Meta, StoryObj } from '@storybook/react';
import ArrowCircle from './ArrowCircle';

const meta: Meta<typeof ArrowCircle> = {
  title: 'atoms/ArrowCircle',
  component: ArrowCircle,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArrowCircle>;

export const Default: Story = {
  args: {},
};
