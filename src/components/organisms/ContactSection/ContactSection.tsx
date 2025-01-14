import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';

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
  />
);

export default ContactSection;
