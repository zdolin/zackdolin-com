import type { Meta, StoryObj } from '@storybook/react';
import Icon, { iconMapper } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'atoms/Icon',
  component: Icon,
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

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    type: 'home',

    className: 'h-5 w-5 lg:h-6 lg:w-6 fill-blue-500',
  },
};
