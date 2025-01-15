import { iconMap } from '@/components/atoms/Icon';
import InfoItem from '@/components/molecules/InfoItem';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import clsx from 'clsx';

export interface ContactSectionProps {
  data: any;
}

const ContactSection = ({ data }: ContactSectionProps) => (
  <SectionWrapper
    className="mb-6"
    iconType={data.categoryIcon as keyof typeof iconMap}
    category={data.category}
    heading={data.heading}
    body={data.body}
  >
    <div className="rounded-2xl border border-gray-300 p-8 dark:border-gray-800">
      {data.infoList.map((item: any, index: number) => (
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
  </SectionWrapper>
);

export default ContactSection;
