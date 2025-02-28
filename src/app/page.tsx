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
import clsx from 'clsx';
import { cache } from 'react';

const getPageData = cache(async (): Promise<PageDataType> => {
  const data = await gqlClient.request(PAGE_QUERY);
  return transformPageData(data);
});

export default async function Home() {
  const { introduction, skills, resume, portfolio, testimonials, contact } =
    await getPageData();

  return (
    <>
      <IntroSection data={introduction} />
      <SkillsSection data={skills} />
      <ResumeSection data={resume} />
      <PortfolioSection data={portfolio} />
      <TestimonialsSection data={testimonials} />
      <ContactSection data={contact} />
      <div
        className={clsx(
          'text-primary flex w-full items-center justify-center py-4',
          'text-base sm:text-sm lg:text-lg'
        )}
      >
        © {new Date().getFullYear()} Zack Dolin. All rights reserved.
      </div>
    </>
  );
}
