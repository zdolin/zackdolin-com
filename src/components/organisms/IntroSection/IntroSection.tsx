import CircleIcon from '@/components/atoms/CircleIcon';
import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';

export interface IntroSectionProps {
  data: any;
}

interface ChecklistItemType {
  icon: string;
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
  >
    <div className="flex w-full">
      {data.checklist.map((item: ChecklistItemType, index: number) => (
        <div key={index} className="flex last:ml-5">
          <span aria-hidden="true">
            <CircleIcon
              className="h-6 w-6 p-1"
              type={item.icon as keyof typeof iconMap}
              aria-hidden="true"
            />
          </span>
          <span className="md:text-md ml-3 text-lg text-black dark:text-white lg:text-lg">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default IntroSection;
