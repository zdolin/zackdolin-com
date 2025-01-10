import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SingleCard: Story = {
  args: {
    title: 'Card Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2021 - 2023',
    location: 'Location',
  },
};
