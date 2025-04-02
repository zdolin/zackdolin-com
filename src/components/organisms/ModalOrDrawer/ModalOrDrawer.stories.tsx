import Button from '@/components/atoms/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import ModalOrDrawer from './ModalOrDrawer';

const meta: Meta<typeof ModalOrDrawer> = {
  title: 'organisms/ModalOrDrawer',
  component: ModalOrDrawer,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalOrDrawer>;

const ModalOrDrawerDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-[400px]">
      <Button onClick={() => setIsOpen(true)} suppressIntroAnimation hideArrow>
        Open Modal/Drawer
      </Button>

      <ModalOrDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal/Drawer"
        className="sm:w-full sm:max-w-lg sm:align-middle"
      >
        <div className="space-y-4 p-4">
          <h2 className="mb-4 text-xl font-bold text-text-primary">
            Modal/Drawer Content
          </h2>
          <p className="text-text-primary">
            This is an example of the ModalOrDrawer component.
          </p>
          <p className="text-text-primary">
            On mobile devices, it will appear as a drawer.
          </p>
          <p className="text-text-primary">
            On desktop devices, it will appear as a modal.
          </p>
        </div>
      </ModalOrDrawer>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalOrDrawerDemo />,
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <ModalOrDrawerDemo />,
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => <ModalOrDrawerDemo />,
};
