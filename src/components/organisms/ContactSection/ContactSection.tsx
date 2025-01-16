'use client';

import Button from '@/components/atoms/Button';
import { iconMap } from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
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
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="mb-8 flex grow flex-col rounded-2xl border border-gray-300 p-8 dark:border-gray-800 md:flex-row lg:mb-0 lg:mr-8 lg:flex-col">
        {data.infoList.map((item: any, index: number) => (
          <InfoItem
            className={clsx(
              '[&:not(:last-child)]:border-b',
              'md:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-b',
              '[&:not(:last-child)]:border-gray-300 [&:not(:last-child)]:dark:border-gray-800',
              'py-6 md:px-6 md:py-0 lg:px-0 lg:py-6'
            )}
            key={index}
            {...item}
            iconType={item.icon}
            index={index}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-gray-300 p-8 dark:border-gray-800">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Form submitted');
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              type="text"
              className="col-span-1"
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              className="col-span-1"
              placeholder="Email"
              required
            />
          </div>
          <Textarea placeholder="Message" rows={5} resizable={false} required />
          <Button className="w-full md:w-auto" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactSection;
