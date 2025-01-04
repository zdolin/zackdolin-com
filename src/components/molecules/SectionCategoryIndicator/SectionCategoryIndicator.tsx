import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMapper } from '@/components/atoms/Icon';

export interface SectionCategoryIndicatorProps {
  iconType: keyof typeof iconMapper;
  category: string;
  className?: string;
  circleClassName?: string;
  iconClassName?: string;
  fillClass?: string;
  iconFillClass?: string;
}

const SectionCategoryIndicator = ({
  iconType,
  category,
  circleClassName = '',
  iconClassName = '',
  fillClass = '',
  iconFillClass = '',
}: SectionCategoryIndicatorProps) => (
  <div className="flex flex-row items-center">
    <CircleIcon
      type={iconType}
      className={circleClassName}
      iconClassName={iconClassName}
      fillClass={fillClass}
      iconFillClass={iconFillClass}
    />
  </div>
);

export default SectionCategoryIndicator;
