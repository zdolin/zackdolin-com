import mockData from '@/app/data/mock.json';
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
    image: mockData.sidebar.image,
  },
};
