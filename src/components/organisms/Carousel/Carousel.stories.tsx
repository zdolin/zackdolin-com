import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'organisms/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: [
      <div key="1" className="bg-gray-500 p-5">
        Slide 1
      </div>,
      <div key="2" className="bg-gray-500 p-5">
        Slide 2
      </div>,
      <div key="3" className="bg-gray-500 p-5">
        Slide 3
      </div>,
    ],
  },
};
