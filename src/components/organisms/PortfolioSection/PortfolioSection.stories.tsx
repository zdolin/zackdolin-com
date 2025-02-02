import type { Meta, StoryObj } from '@storybook/react';
import PortfolioSection from './PortfolioSection';

const meta: Meta<typeof PortfolioSection> = {
  title: 'organisms/PortfolioSection',
  component: PortfolioSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof PortfolioSection>;

export const Default: Story = {
  args: {},
};
