import type { Meta, StoryObj } from '@storybook/react';
import ButtonArrow from './ButtonArrow';

const meta: Meta<typeof ButtonArrow> = {
  title: 'atoms/ButtonArrow',
  component: ButtonArrow,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonArrow>;

export const Default: Story = {
  args: {},
};
