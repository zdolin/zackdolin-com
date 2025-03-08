import type { Meta, StoryObj } from '@storybook/react';
import ModalOrDrawer from './ModalOrDrawer';

const meta: Meta<typeof ModalOrDrawer> = {
  title: 'organisms/ModalOrDrawer',
  component: ModalOrDrawer,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalOrDrawer>;

export const Default: Story = {
  args: {},
};
