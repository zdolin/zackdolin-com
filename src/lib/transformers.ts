import {
  IntroSectionDataType,
  PageDataType,
  PortfolioSectionDataType,
  ResumeSectionDataType,
  SidebarDataType,
  SkillsSectionDataType,
  TestimonalsSectionDataType,
  ContactSectionDataType
} from '@/types/data';
import { navigationList } from '@/app/data/config';

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
    navigationList,
  };
};

const getSectionWrapperData = (section: any): any => {
  return {
    category: section.sectionWrapper?.category || '',
    heading: section.sectionWrapper?.heading || '',
    body: section.sectionWrapper?.body || '',
    categoryIcon: section.sectionWrapper?.categoryIcon?.type || '',
  };
};

const transformIntroSectionData = (introSection: any): IntroSectionDataType => {
  return {
    ...getSectionWrapperData(introSection),
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
    checklist: (introSection.checkListCollection?.items || []).map(
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
    ...getSectionWrapperData(skillsSection),
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
    ...getSectionWrapperData(resumeSection),
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

const transformPortfolioSectionData = (
  portfolioSection: any
): PortfolioSectionDataType => {
  console.log(JSON.stringify(portfolioSection.projectsListCollection?.items, null, 2));
  return {
    ...getSectionWrapperData(portfolioSection),
    projectsList: (portfolioSection.projectsListCollection?.items || []).map(
      (item: any) => ({
        heading: item.heading,
        url: item.url || undefined,
        client: item.client || undefined,
        blurb: item.blurb,
        description: item.description,
        image: {
          src: item.image.url,
          alt: item.image.title,
        },
        thumb: {
          src: item.thumb.url,
          alt: item.thumb.title,
        },
      })
    ),
  };
};

const transformTestimonialsSectionData = (
  testimonalsSection: any
): TestimonalsSectionDataType => {
  return {
    ...getSectionWrapperData(testimonalsSection),
    testimonialList: (
      testimonalsSection.testimonialListCollection?.items || []
    ).map((item: any) => ({
      quote: item.quote,
      author: item.author,
      authorTitle: item.authorTitle,
      date: item.date,
      image: {
        src: item.image?.url,
        alt: item.image?.alt || item.author || '',
      },
    })),
  };
};

const transformContactSectionData = (
  contactSection: any
): ContactSectionDataType => {
  return {
    ...getSectionWrapperData(contactSection),
    infoList: (contactSection.infoListCollection?.items || []).map(
      (item: any) => ({
        heading: item.heading,
        text: item.text,
        icon: item.icon?.type || '',
      })
    ),
  };
};

export const transformPageData = (graphqlData: any): PageDataType => {
  return {
    introduction: transformIntroSectionData(graphqlData.introSection.items[0]),
    skills: transformSkillsSectionData(graphqlData.skillsSection.items[0]),
    resume: transformResumeSectionData(graphqlData.resumeSection.items[0]),
    portfolio: transformPortfolioSectionData(
      graphqlData.portfolioSection.items[0]
    ),
    testimonials: transformTestimonialsSectionData(
      graphqlData.testimonialsSection.items[0]
    ),
    contact: transformContactSectionData(graphqlData.contactSection.items[0]),
  };
};
