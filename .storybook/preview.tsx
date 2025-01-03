import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import clsx from 'clsx';
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
      <div className={clsx('antialiased', 'font-sans')}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
