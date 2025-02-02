import mockData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import SkillsSection from './SkillsSection';

const meta: Meta<typeof SkillsSection> = {
  title: 'organisms/SkillsSection',
  component: SkillsSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {
  args: {
    data: mockData.sections.skills,
  },
};
