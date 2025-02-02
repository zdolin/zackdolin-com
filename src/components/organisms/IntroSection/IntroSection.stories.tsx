import tempData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import IntroSection from './IntroSection';

const meta: Meta<typeof IntroSection> = {
  title: 'organisms/IntroSection',
  component: IntroSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IntroSection>;

export const Default: Story = {
  args: {
    data: tempData.sections.introduction,
  },
};
