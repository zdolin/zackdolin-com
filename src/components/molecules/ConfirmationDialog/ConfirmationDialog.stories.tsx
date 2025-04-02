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
    handleConfirm: () => {},
    handleDismiss: () => {},
    heading: 'Confirmation Dialog',
    body: 'This is a confirmation dialog',
    confirmText: 'Option 2',
    dismissText: 'Option 1',
  },
};
