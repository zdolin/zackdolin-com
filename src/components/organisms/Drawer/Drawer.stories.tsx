import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'organisms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
};
