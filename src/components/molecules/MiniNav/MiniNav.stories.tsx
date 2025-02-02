import mockData from '@/app/data/mock.json';
import { iconMap } from '@/components/atoms/Icon';
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
  args: {
    navigationList: mockData.sidebar.navigationList.map((item) => ({
      ...item,
      icon: item.icon as keyof typeof iconMap,
    })),
  },
};
