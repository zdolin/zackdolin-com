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

export const Secondary: Story = {
  args: {
    open: true,
    onClose: () => console.log('Drawer closed'),
    children: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">
          Secondary Drawer
        </h2>
        <p className="text-text-primary">
          This a secondary drawer. You can put any content here.
        </p>
        <p className="text-text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <p className="text-text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
    ),
  },
};

export const Primary: Story = {
  args: {
    open: true,
    onClose: () => console.log('Drawer closed'),
    type: 'primary',
    children: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">
          Primary Drawer
        </h2>
        <p className="text-text-primary">
          This is a primary drawer with a different background color.
        </p>
        <p className="text-text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <p className="text-text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
    ),
  },
};
