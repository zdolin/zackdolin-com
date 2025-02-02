import type { Meta, StoryObj } from '@storybook/react';
import DarkModeToggle from './DarkModeToggle';

const meta: Meta<typeof DarkModeToggle> = {
  title: 'atoms/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  args: {},
};
