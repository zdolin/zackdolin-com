import mockData from '@/app/data/mock.json';
import type { Meta, StoryObj } from '@storybook/react';
import ContactSection from './ContactSection';

const meta: Meta<typeof ContactSection> = {
  title: 'organisms/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    data: mockData.sections.contact,
  },
};
