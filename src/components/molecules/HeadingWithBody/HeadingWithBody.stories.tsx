import type { Meta, StoryObj } from '@storybook/react';
import HeadingWithBody from './HeadingWithBody';

const meta: Meta<typeof HeadingWithBody> = {
  title: 'molecules/HeadingWithBody',
  component: HeadingWithBody,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeadingWithBody>;

export const Default: Story = {
  args: {
    heading: 'Heading ipsum dolor',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
  },
};

export const IsVertical: Story = {
  args: {
    heading: 'Heading ipsum dolor',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    isVertical: true,
  },
};
