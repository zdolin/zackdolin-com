import type { Meta, StoryObj } from '@storybook/react';
import DesktopSidebar from './DesktopSidebar';

const meta: Meta<typeof DesktopSidebar> = {
  title: 'organisms/DesktopSidebar',
  component: DesktopSidebar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DesktopSidebar>;

export const Default: Story = {
  args: {},
};
