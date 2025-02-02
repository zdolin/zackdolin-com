import {
  IntroSectionDataType,
  PageDataType,
  ResumeSectionDataType,
  SidebarDataType,
  SkillsSectionDataType,
} from '@/types/data';

export const transformSidebarData = (graphqlData: any): SidebarDataType => {
  if (!graphqlData?.sidebarCollection?.items?.length) {
    throw new Error('No sidebar data found in Contentful response.');
  }

  const sidebar = graphqlData.sidebarCollection.items[0];

  return {
    name: sidebar.name,
    description: sidebar.description,
    image: {
      src: sidebar.image?.url ? sidebar.image.url : '',
      alt: sidebar.image?.title || '',
    },
    detailsList: (sidebar.detailsListCollection?.items || []).map(
      (detail: any) => ({
        label: detail.label,
        text: detail.value,
      })
    ),
    navigationList: (sidebar.miniNavListCollection?.items || []).map(
      (navItem: any) => ({
        id: navItem.id,
        icon: navItem.icon?.type,
        text: navItem.text,
      })
    ),
  };
};

const transformIntroSectionData = (introSection: any): IntroSectionDataType => {
  return {
    ...{
      category: introSection.sectionWrapper?.category || '',
      heading: introSection.sectionWrapper?.heading || '',
      body: introSection.sectionWrapper?.body || '',
      categoryIcon: introSection.sectionWrapper?.categoryIcon?.type || '',
    },
    heroImage: {
      src: introSection.heroImage?.url,
      alt: introSection.heroImage?.title || '',
    },
    statsList: (introSection.statsListCollection?.items || []).map(
      (item: any) => ({
        quantity: item.quantity,
        text: item.text,
      })
    ),
    checklist: (introSection.checklistCollection?.items || []).map(
      (item: any) => ({
        text: item.text,
        icon: item.icon?.type || '',
      })
    ),
  };
};

const transformSkillsSectionData = (
  skillsSection: any
): SkillsSectionDataType => {
  return {
    ...{
      category: skillsSection.sectionWrapper?.category || '',
      heading: skillsSection.sectionWrapper?.heading || '',
      body: skillsSection.sectionWrapper?.body || '',
      categoryIcon: skillsSection.sectionWrapper?.categoryIcon?.type || '',
    },
    skillsList: (skillsSection.skillsListCollection?.items || []).map(
      (item: any) => ({
        percentage: item.percentage,
        label: item.label,
      })
    ),
  };
};

const transformResumeSectionData = (
  resumeSection: any
): ResumeSectionDataType => {
  return {
    ...{
      category: resumeSection.sectionWrapper?.category || '',
      heading: resumeSection.sectionWrapper?.heading || '',
      body: resumeSection.sectionWrapper?.body || '',
      categoryIcon: resumeSection.sectionWrapper?.categoryIcon?.type || '',
    },
    heading2: resumeSection.heading2,
    body2: resumeSection.body2,
    experienceList: (resumeSection.experienceListCollection?.items || []).map(
      (item: any) => ({
        title: item.title,
        company: item.company,
        location: item.location,
        date: item.date,
        description: item.description,
      })
    ),
    educationList: (resumeSection.educationListCollection?.items || []).map(
      (item: any) => ({
        title: item.title,
        location: item.location,
        date: item.date,
        description: item.description,
      })
    ),
  };
};

export const transformPageData = (graphqlData: any): PageDataType => {
  return {
    introduction: transformIntroSectionData(graphqlData.introSection.items[0]),
    skills: transformSkillsSectionData(graphqlData.skillsSection.items[0]),
    resume: transformResumeSectionData(graphqlData.resumeSection.items[0]),
  };
};
