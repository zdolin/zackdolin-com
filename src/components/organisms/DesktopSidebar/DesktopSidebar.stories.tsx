import type { Meta, StoryObj } from '@storybook/react';
import DesktopSidebar from './DesktopSidebar';

const meta: Meta<typeof DesktopSidebar> = {
  title: 'organisms/DesktopSidebar',
  component: DesktopSidebar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DesktopSidebar>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-text-primary">
          Sample Sidebar Content
        </h1>
        <p className="text-text-primary">
          This is some sample content for the desktop sidebar.
        </p>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="text-text-primary hover:underline">
            Link 1
          </a>
          <a href="#" className="text-text-primary hover:underline">
            Link 2
          </a>
          <a href="#" className="text-text-primary hover:underline">
            Link 3
          </a>
        </nav>
      </div>
    ),
  },
};
