import type { Meta, StoryObj } from '@storybook/react';
import ThemePrompt from './ThemePrompt';

const meta: Meta<typeof ThemePrompt> = {
  title: 'organisms/ThemePrompt',
  component: ThemePrompt,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemePrompt>;

export const Default: Story = {
  args: {},
};
