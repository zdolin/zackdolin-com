import Button from '@/components/atoms/Button';
import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import clsx from 'clsx';

export interface IntroSectionProps {
  data: any;
}

interface ChecklistItemType {
  icon: keyof typeof iconMap;
  text: string;
}

interface StatslistItemType {
  quantity: string;
  text: string;
}

const IntroSection = ({ data }: IntroSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
    isVertical={true}
    heroImage={data.heroImage}
  >
    <ul className="mb-8 mt-8 flex w-full space-x-8 md:mt-0">
      {data.checklist.map((item: ChecklistItemType, index: number) => (
        <li key={index} className="flex">
          <span aria-hidden="true">
            <CircleIcon
              className="h-6 w-6 p-1"
              type={item.icon as keyof typeof iconMap}
              aria-hidden="true"
            />
          </span>
          <span className="md:text-md text-primary ml-3 text-lg lg:text-lg">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
    <Button className="w-full md:w-auto">Hire me</Button>
    <ul className="mt-8 flex flex-wrap justify-center gap-6 text-center lg:gap-8">
      {data.statslist.map((stat: StatslistItemType, index: number) => (
        <li
          key={index}
          className={clsx(
            'flex flex-col items-start lg:flex-row',
            index < data.statslist.length - 1
              ? 'border-r border-neutral-500 border-opacity-25 lg:pr-6'
              : ''
          )}
        >
          <span className="text-primary text-left text-4xl font-medium md:text-[2.625rem] xl:text-6xl">
            {stat.quantity}
          </span>
          <span className="text-secondary mt-2 max-w-24 text-left text-base lg:ml-4 lg:mt-0 xl:text-lg">
            {stat.text}
          </span>
        </li>
      ))}
    </ul>
  </SectionWrapper>
);

export default IntroSection;
