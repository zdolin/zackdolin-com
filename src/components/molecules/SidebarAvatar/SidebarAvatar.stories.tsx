import tempData from '@/app/data/temp-data.json';
import type { Meta, StoryObj } from '@storybook/react';
import SidebarAvatar from './SidebarAvatar';

const meta: Meta<typeof SidebarAvatar> = {
  title: 'molecules/SidebarAvatar',
  component: SidebarAvatar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarAvatar>;

export const Default: Story = {
  args: {
    imageSrc: tempData.sidebar.imageSrc,
    imageAlt: tempData.sidebar.imageAlt,
  },
};
