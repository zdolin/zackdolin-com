import tempData from '@/app/data/mock-data.json';
import ContactSection from '@/components/organisms/ContactSection';
import IntroSection from '@/components/organisms/IntroSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import ResumeSection from '@/components/organisms/ResumeSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';
import gqlClient from '@/lib/contentful/gqlClient';
import { PAGE_QUERY } from '@/lib/queries';
import { transformPageData } from '@/lib/transformers';
import { PageDataType } from '@/types/data';
import { cache } from 'react';

const getPageData = cache(async (): Promise<PageDataType> => {
  const data = await gqlClient.request(PAGE_QUERY);
  return transformPageData(data);
});

export default async function Home() {
  const { testimonials, contact } = tempData.sections;
  const { introduction, skills, resume, portfolio } = await getPageData();

  return (
    <>
      <IntroSection data={introduction} />
      <SkillsSection data={skills} />
      <ResumeSection data={resume} />
      <PortfolioSection data={portfolio} />
      <TestimonialsSection data={testimonials} />
      <ContactSection data={contact} />
    </>
  );
}
