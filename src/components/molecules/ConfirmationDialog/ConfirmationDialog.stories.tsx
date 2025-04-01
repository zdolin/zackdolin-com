import type { Meta, StoryObj } from '@storybook/react';
import ConfirmationDialog from './ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'molecules/ConfirmationDialog',
  component: ConfirmationDialog,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Default: Story = {
  args: {
    open: true,
    handleClose: () => {},
    handleAccept: () => {},
    handleReject: () => {},
    heading: 'Confirmation Dialog',
    body: 'This is a confirmation dialog',
    confirmText: 'Confirm',
  },
};
