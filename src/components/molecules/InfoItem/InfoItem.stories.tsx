import { iconMap } from '@/components/atoms/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import InfoItem from './InfoItem';

const meta: Meta<typeof InfoItem> = {
  title: 'molecules/InfoItem',
  component: InfoItem,
  tags: ['autodocs'],
  argTypes: {
    iconType: {
      control: {
        type: 'select',
        options: Object.keys(iconMap),
      },
    },
  },
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoItem>;

export const Default: Story = {
  args: {
    iconType: 'phone',
    heading: 'Phone',
    text: '(123) 456-7890',
  },
};
