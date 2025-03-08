import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalWithState = (args: any) => {
  const [open, setOpen] = useState(true);
  return <Modal {...args} open={open} onClose={() => setOpen(false)} />;
};

export const Default: Story = {
  render: (args) => <ModalWithState {...args} />,
};
