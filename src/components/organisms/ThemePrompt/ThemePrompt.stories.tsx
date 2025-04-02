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
  args: {
    open: true,
    onClose: () => console.log('Close clicked'),
    heading: 'Customize Your Theme',
    body: "Tell us what kind of theme you'd like to see on this website.",
    suggestions: [
      'Modern minimalist with typography focus',
      'Bold and colorful with gradients',
      'Clean professional with subtle shadows',
      'Dark mode with neon accents',
    ],
    setPrompt: (value: string) => console.log('Prompt changed:', value),
    onSubmit: async (e) => {
      e.preventDefault();
      console.log('Form submitted');
    },
    loading: false,
  },
};
