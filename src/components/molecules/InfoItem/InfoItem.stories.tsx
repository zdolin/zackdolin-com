import tempData from '@/app/data/mock-data.json';
import { iconMap } from '@/components/atoms/Icon';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import clsx from 'clsx';
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
  args: { ...tempData.sections.contact.infoList[0], iconType: 'phone' },
};

const ListStory: StoryFn<typeof InfoItem> = () => (
  <div className="flex w-72 flex-col md:w-auto md:flex-row lg:w-72 lg:flex-col">
    {tempData.sections.contact.infoList.map((item: any, index: number) => (
      <InfoItem
        className={clsx(
          '[&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-b',
          '&:not(:last-child)]:dark:border-gray-800 [&:not(:last-child)]:border-gray-300',
          'py-6 md:px-6 md:py-0 lg:px-0 lg:py-6'
        )}
        key={index}
        {...item}
        iconType={item.icon}
        index={index}
      />
    ))}
  </div>
);

export const InfoItemList: StoryFn<typeof InfoItem> = ListStory;
