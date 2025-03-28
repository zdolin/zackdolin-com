import type { Meta, StoryObj } from '@storybook/react';
import ThemePromptFlow from './ThemePromptFlow';

const meta: Meta<typeof ThemePromptFlow> = {
  title: 'organisms/ThemePromptFlow',
  component: ThemePromptFlow,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemePromptFlow>;

export const Default: Story = {
  args: {},
};
