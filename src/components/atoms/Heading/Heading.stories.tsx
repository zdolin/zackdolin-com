import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta = {
  title: 'atoms/Heading',
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

type Story = StoryObj<{ level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string; children: string }>;

export const DefaultHeading: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    level: 1,
    children: 'Default Heading',
  },
};

export const HeadingCustomClassName: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    level: 3,
    className: '!text-red-500',
    children: 'Custom Styled Heading',
  },
};
