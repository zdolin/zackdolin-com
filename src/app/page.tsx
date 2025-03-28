import ContactSection from '@/components/organisms/ContactSection';
import IntroSection from '@/components/organisms/IntroSection';
import PortfolioSection from '@/components/organisms/PortfolioSection';
import ResumeSection from '@/components/organisms/ResumeSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';
import ThemePromptFlow from '@/components/organisms/ThemePromptFlow';
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
      <ThemePromptFlow />
      <IntroSection data={introduction} />
      <SkillsSection data={skills} />
      <PortfolioSection data={portfolio} />
      <ResumeSection data={resume} />
      <TestimonialsSection data={testimonials} />
      <ContactSection data={contact} />
      <div
        className={clsx(
          'flex w-full items-center justify-center py-4 text-text-primary',
          'text-base sm:text-sm lg:text-lg'
        )}
      >
        <div>
          © {new Date().getFullYear()} Zack Dolin. All rights reserved.
          {/*
          <span className="block md:hidden"></span> Check out my music on{' '}
          <a
            className="text-sky-500"
            href="https://scryingglass.bandcamp.com"
            target="_blank"
            rel="noopener"
          >
            Bandcamp
          </a>
          .
          */}
        </div>
      </div>
    </>
  );
}
