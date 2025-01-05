import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMap } from '@/components/atoms/Icon';
import Label from '@/components/atoms/Label';
import clsx from 'clsx';

export interface SectionCategoryIndicatorProps {
  iconType: keyof typeof iconMap;
  category: string;
  className?: string;
}

const SectionCategoryIndicator = ({
  iconType,
  category,
  className = '',
}: SectionCategoryIndicatorProps) => (
  <div className={clsx('flex flex-row items-center', className)}>
    <CircleIcon type={iconType} />
    <Label className="ml-3">{category}</Label>
    <hr className="ml-3 w-12 border border-sky-600" />
  </div>
);

export default SectionCategoryIndicator;
