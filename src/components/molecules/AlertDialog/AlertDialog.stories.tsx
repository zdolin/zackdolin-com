import type { Meta, StoryObj } from '@storybook/react';
import AlertDialog from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Molecules/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log('Dialog closed'),
  },
};

export const CustomTitle: Story = {
  args: {
    open: true,
    onClose: () => console.log('Dialog closed'),
    heading: 'Custom Title',
  },
};

export const CustomDescription: Story = {
  args: {
    open: true,
    onClose: () => console.log('Dialog closed'),
    description: 'This is a custom description for the alert dialog.',
  },
};
