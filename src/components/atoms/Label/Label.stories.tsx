import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta = {
  title: 'atoms/Label',
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
      defaultValue: 1,
    },
    className: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

type Story = StoryObj<{
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: string;
}>;

export const DefaultLabel: Story = {
  render: (args) => <Label {...args} />,
  args: {
    level: 1,
    children: 'Default Label',
  },
};

export const LabelCustomClassName: Story = {
  render: (args) => <Label {...args} />,
  args: {
    level: 3,
    className: '!text-red-500',
    children: 'Custom Styled Label',
  },
};
