import type { Meta, StoryObj } from '@storybook/react';
import HeaderNavItem from './HeaderNavItem';

const meta: Meta<typeof HeaderNavItem> = {
  title: 'molecules/HeaderNavItem',
  component: HeaderNavItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeaderNavItem>;

export const Default: Story = {
  args: {
    text: 'Home',
    href: '#',
  },
};
