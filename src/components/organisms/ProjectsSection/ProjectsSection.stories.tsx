import type { Meta, StoryObj } from '@storybook/react';
import ProjectsSection from './ProjectsSection';

const meta: Meta<typeof ProjectsSection> = {
  title: 'organisms/ProjectsSection',
  component: ProjectsSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsSection>;

export const Default: Story = {
  args: {},
};
