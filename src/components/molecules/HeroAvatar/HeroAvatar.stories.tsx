import tempData from '@/app/data/mock-data.json';
import HeroAvatar from '@/components/molecules/HeroAvatar/HeroAvatar';
import type { Meta, StoryObj } from '@storybook/react';

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
    image: tempData.sidebar.image,
  },
};
