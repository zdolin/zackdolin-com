import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-backgrounds',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (config?.module?.rules) {
      // Remove existing SVG rules to ensure type safety
      config.module.rules = config.module.rules.filter((rule) => {
        if (rule && typeof rule === 'object' && 'test' in rule) {
          return !(rule.test instanceof RegExp && rule.test.test('.svg'));
        }
        return true;
      });
      // Apply SVGR for handling SVGs
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  },
};

export default config;
