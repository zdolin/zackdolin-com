import type { Meta, StoryObj } from '@storybook/react';
import MiniNav from './MiniNav';

const meta: Meta<typeof MiniNav> = {
  title: 'molecules/MiniNav',
  component: MiniNav,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof MiniNav>;

export const Default: Story = {
  args: {},
};
