import tempData from '@/app/data/temp-data.json';
import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import ContactSection from '@/components/organisms/ContactSection';
import IntroSection from '@/components/organisms/IntroSection';
import ResumeSection from '@/components/organisms/ResumeSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';

export default async function Home() {
  const { introduction, skills, resume, portfolio, testimonials, contact } =
    tempData.sections;
  return (
    <>
      <IntroSection data={introduction} />
      <SkillsSection data={skills} />
      <ResumeSection data={resume} />
      <SectionWrapper
        className="mb-6"
        iconType={portfolio.categoryIcon as keyof typeof iconMap}
        category={portfolio.category}
        heading={portfolio.heading}
        body={portfolio.body}
      />
      <TestimonialsSection data={testimonials} />
      <ContactSection data={contact} />
    </>
  );
}
