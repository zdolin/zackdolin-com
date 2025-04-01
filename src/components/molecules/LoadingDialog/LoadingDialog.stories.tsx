import type { Meta, StoryObj } from '@storybook/react';
import LoadingDialog from './LoadingDialog';

const meta: Meta<typeof LoadingDialog> = {
  title: 'Molecules/LoadingDialog',
  component: LoadingDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingDialog>;

export const Default: Story = {
  args: {
    open: true,
    heading: 'Loading...',
    message: 'Please wait while we process your request',
  },
};

export const Processing: Story = {
  args: {
    open: true,
    heading: 'Processing',
    message: 'We are processing your data',
  },
};

export const Uploading: Story = {
  args: {
    open: true,
    heading: 'Uploading',
    message: 'Your files are being uploaded',
  },
};
