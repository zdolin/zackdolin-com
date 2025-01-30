import tempData from '@/app/data/temp-data.json';
import type { Meta, StoryObj } from '@storybook/react';
import HeroAvatar from './HeroAvatar';

const meta: Meta<typeof HeroAvatar> = {
  title: 'molecules/HeroAvatar',
  component: HeroAvatar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroAvatar>;

export const Default: Story = {
  args: {
    imageSrc: tempData.sidebar.imageSrc,
    imageAlt: tempData.sidebar.imageAlt,
  },
};
