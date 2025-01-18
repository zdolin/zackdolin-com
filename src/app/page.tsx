import tempData from '@/app/data/temp-data.json';
import ContactSection from '@/components/organisms/ContactSection';
import IntroSection from '@/components/organisms/IntroSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
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
      <ProjectsSection data={portfolio} />
      <TestimonialsSection data={testimonials} />
      <ContactSection data={contact} />
    </>
  );
}
