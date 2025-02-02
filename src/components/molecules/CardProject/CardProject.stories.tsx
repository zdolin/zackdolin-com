import tempData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import CardProject from './CardProject';

const meta: Meta<typeof CardProject> = {
  title: 'molecules/CardProject',
  component: CardProject,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    ...tempData.sections.portfolio.projectsList[0],
  },
};
