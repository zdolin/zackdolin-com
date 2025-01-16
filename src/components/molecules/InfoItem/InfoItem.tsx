import CircleIcon from '@/components/atoms/CircleIcon';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';
import clsx from 'clsx';

export interface InfoItemProps {
  iconType: keyof typeof iconMap;
  heading: string;
  text: string;
  className?: string;
}

const InfoItem = ({ iconType, heading, text, className }: InfoItemProps) => (
  <div
    className={clsx(
      'flex flex-row gap-4 md:flex-col md:items-center xl:flex-row xl:items-start',
      className
    )}
  >
    <CircleIcon
      className="h-[2.625rem] w-[2.625rem] p-[0.813rem] md:h-12 md:w-12 md:p-[0.875rem]"
      type={iconType}
    />
    <div className="flex flex-col">
      <Heading className="md:text-center xl:text-left" level={2}>
        {heading}
      </Heading>
      <p className="text-secondary text-base md:text-center md:text-sm xl:text-left xl:text-xl">
        {text}
      </p>
    </div>
  </div>
);

export default InfoItem;
