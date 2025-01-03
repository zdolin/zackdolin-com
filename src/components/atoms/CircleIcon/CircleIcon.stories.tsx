import type { Meta, StoryObj } from '@storybook/react';
import iconMapper from '../Icon';
import CircleIcon from './CircleIcon';

const meta: Meta<typeof CircleIcon> = {
  title: 'atoms/CircleIcon',
  component: CircleIcon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.keys(iconMapper),
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
