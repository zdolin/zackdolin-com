import type { Meta, StoryObj } from '@storybook/react';
import iconMap from '../Icon';
import CircleIcon from './CircleIcon';

const meta: Meta<typeof CircleIcon> = {
  title: 'atoms/CircleIcon',
  component: CircleIcon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.keys(iconMap),
      },
    },
    className: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CircleIcon>;

export const Default: Story = {
  args: {
    type: 'home',
  },
};
