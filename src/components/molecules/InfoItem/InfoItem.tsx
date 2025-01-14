import CircleIcon from '@/components/atoms/CircleIcon';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';

export interface InfoItemProps {
  iconType: keyof typeof iconMap;
  heading: string;
  copy: string;
}

const InfoItem = ({ iconType, heading, copy }: InfoItemProps) => (
  <div className="flex flex-row gap-4 md:flex-col md:items-center lg:flex-row lg:items-start">
    <CircleIcon
      className="h-[2.625rem] w-[2.625rem] p-3 md:h-12 md:w-12 md:p-[0.813rem]"
      type={iconType}
    />
    <div className="flex flex-col">
      <Heading className="md:text-center lg:text-left" level={2}>
        {heading}
      </Heading>
      <p className="text-secondary text-base md:text-center md:text-sm lg:text-left lg:text-lg">
        {copy}
      </p>
    </div>
  </div>
);

export default InfoItem;
