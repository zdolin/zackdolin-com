import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';
import './font-face.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className="min-h-screen bg-surface-primary p-6 font-sans antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
