import tempData from '@/app/data/mock.json';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SingleCard: Story = {
  args: tempData.sections.resume.experienceList[0],
};

const ListStory: StoryFn<typeof Card> = () => (
  <>
    {tempData.sections.resume.experienceList.map((item: any, index: number) => (
      <Card className="mb-4" key={index} {...item} index={index} />
    ))}
  </>
);

export const CardList: StoryFn<typeof Card> = ListStory;
