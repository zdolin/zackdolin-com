import tempData from '@/app/data/temp-data.json';
import { iconMapper } from '@/components/atoms/Icon';
import SectionWrapper from '@/components/molecules/SectionWrapper';

export default async function Home(data: any) {
  console.log(data);
  const { introduction } = tempData.sections;
  return (
    <>
      <SectionWrapper
        iconType={introduction.categoryIcon as keyof typeof iconMapper}
        category={introduction.category}
        heading={introduction.heading}
      />
    </>
  );
}
