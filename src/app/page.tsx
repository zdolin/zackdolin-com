import tempData from '@/app/data/temp-data.json';
import { iconMap } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import IntroSection from '@/components/organisms/IntroSection';
import SkillsSection from '@/components/organisms/SkillsSection';

export default async function Home() {
  const { introduction, skills, resume, portfolio, testimonials, contact } =
    tempData.sections;
  return (
    <>
      <IntroSection data={introduction} />
      <SkillsSection data={skills} />
      <SectionWrapper
        className="mb-6"
        iconType={resume.categoryIcon as keyof typeof iconMap}
        category={resume.category}
        heading={resume.heading}
        body={resume.body}
      />
      <SectionWrapper
        className="mb-6"
        iconType={portfolio.categoryIcon as keyof typeof iconMap}
        category={portfolio.category}
        heading={portfolio.heading}
        body={portfolio.body}
      />
      <SectionWrapper
        className="mb-6"
        iconType={testimonials.categoryIcon as keyof typeof iconMap}
        category={testimonials.category}
        heading={testimonials.heading}
        body={testimonials.body}
      />
      <SectionWrapper
        className="mb-6"
        iconType={contact.categoryIcon as keyof typeof iconMap}
        category={contact.category}
        heading={contact.heading}
        body={contact.body}
      />
    </>
  );
}
