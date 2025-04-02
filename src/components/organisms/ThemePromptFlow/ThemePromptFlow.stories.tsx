import { ThemePromptFlowDataType } from '@/types/data';
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

const sampleData: ThemePromptFlowDataType = {
  themePrompt: {
    heading: 'Customize Your Theme',
    body: "Tell us what kind of theme you'd like to see on this website.",
    suggestions: [
      'Modern minimalist with typography focus',
      'Bold and colorful with gradients',
      'Clean professional with subtle shadows',
      'Dark mode with neon accents',
    ],
  },
  loadingDialog: {
    heading: 'Generating Theme',
    message: 'Please wait while we create your custom theme...',
    confirmButtonText: 'Cancel',
  },
  alertDialog: {
    heading: 'Theme Applied',
    message: 'Your new theme has been successfully applied!',
    confirmButtonText: 'OK',
  },
  errorDialog: {
    heading: 'Error',
    message: 'There was an error generating your theme. Please try again.',
    confirmButtonText: 'OK',
  },
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};
