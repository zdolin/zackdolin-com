import mockData from '@/app/data/mock.json';
import { iconMap } from '@/components/atoms/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    ...mockData.sidebar,
    navigationList: mockData.sidebar.navigationList.map((item: any) => ({
      ...item,
      icon: item.icon as keyof typeof iconMap,
    })),
  },
};
