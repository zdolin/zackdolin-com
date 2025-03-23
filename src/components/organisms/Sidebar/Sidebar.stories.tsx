import mockData from '@/app/data/mock.json';
import { iconMap } from '@/components/atoms/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import { graphql, HttpResponse } from 'msw';
import { Suspense } from 'react';
import Sidebar from './Sidebar';

const transformedSidebar = {
  ...mockData.sidebar,
  navigationList: mockData.sidebar.navigationList.map((item: any) => ({
    ...item,
    icon: item.icon as keyof typeof iconMap,
  })),
};

const meta: Meta<typeof Sidebar> = {
  title: 'organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <Story />
      </Suspense>
    ),
  ],
  parameters: {
    msw: {
      handlers: [
        graphql.query('SidebarQuery', () => {
          return HttpResponse.json({
            data: transformedSidebar,
          });
        }),
      ],
    },
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
};

export const Mobile: Story = {
  args: {
    isMobile: true,
  },
};
