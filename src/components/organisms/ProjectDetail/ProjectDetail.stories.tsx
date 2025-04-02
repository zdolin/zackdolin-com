import mockData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import ProjectDetail from './ProjectDetail';

const meta: Meta<typeof ProjectDetail> = {
  title: 'organisms/ProjectDetail',
  component: ProjectDetail,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {
  args: {
    project: mockData.sections.portfolio.projectsList[0],
  },
};
