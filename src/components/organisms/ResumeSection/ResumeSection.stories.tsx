import type { Meta, StoryObj } from '@storybook/react';
import ResumeSection from './ResumeSection';

const meta: Meta<typeof ResumeSection> = {
  title: 'organisms/ResumeSection',
  component: ResumeSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResumeSection>;

export const Default: Story = {
  args: {},
};
