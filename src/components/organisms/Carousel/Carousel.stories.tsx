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
    centeredArrows: true,
    showDots: false,
    children: [
      <div
        key="1"
        className="embla__slide mb-6 flex-[0_0_100%] lg:flex-[0_0_calc(100%-96px)]"
      >
        <img
          src="https://picsum.photos/800/400"
          alt="Project image 1"
          className="h-auto w-full"
        />
      </div>,
      <div
        key="2"
        className="embla__slide mb-6 flex-[0_0_100%] lg:flex-[0_0_calc(100%-96px)]"
      >
        <img
          src="https://picsum.photos/800/401"
          alt="Project image 2"
          className="h-auto w-full"
        />
      </div>,
      <div
        key="3"
        className="embla__slide mb-6 flex-[0_0_100%] lg:flex-[0_0_calc(100%-96px)]"
      >
        <img
          src="https://picsum.photos/800/402"
          alt="Project image 3"
          className="h-auto w-full"
        />
      </div>,
    ],
  },
};

export const TextContent: Story = {
  args: {
    centeredArrows: true,
    showDots: true,
    children: [
      <div
        key="1"
        className="embla__slide mb-6 flex-[0_0_100%] rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white lg:flex-[0_0_calc(100%-96px)]"
      >
        <h2 className="mb-4 text-2xl font-bold">Welcome to Our Platform</h2>
        <p className="text-lg">
          Discover amazing features and possibilities with our innovative
          solutions.
        </p>
      </div>,
      <div
        key="2"
        className="embla__slide mb-6 flex-[0_0_100%] rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-8 text-white lg:flex-[0_0_calc(100%-96px)]"
      >
        <h2 className="mb-4 text-2xl font-bold">Easy to Use</h2>
        <p className="text-lg">
          Intuitive interface designed for the best user experience.
        </p>
      </div>,
      <div
        key="3"
        className="embla__slide mb-6 flex-[0_0_100%] rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white lg:flex-[0_0_calc(100%-96px)]"
      >
        <h2 className="mb-4 text-2xl font-bold">Get Started Today</h2>
        <p className="text-lg">
          Join thousands of satisfied users and transform your workflow.
        </p>
      </div>,
    ],
  },
};
