import tempData from '@/app/data/temp-data.json';
import { iconMapper } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';

export default async function Home() {
  const { introduction, skills, resume } = tempData.sections;
  return (
    <>
      <SectionWrapper
        className="mb-5"
        iconType={introduction.categoryIcon as keyof typeof iconMapper}
        category={introduction.category}
        heading={introduction.heading}
        body={introduction.body}
      />
      <SectionWrapper
        className="mb-5"
        iconType={skills.categoryIcon as keyof typeof iconMapper}
        category={skills.category}
        heading={skills.heading}
        body={introduction.body}
      />
      <SectionWrapper
        className="mb-5"
        iconType={resume.categoryIcon as keyof typeof iconMapper}
        category={resume.category}
        heading={resume.heading}
        body={introduction.body}
      />
    </>
  );
}
