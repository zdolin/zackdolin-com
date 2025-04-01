import { ImageProps } from 'next/image';
import {
  ChecklistItemType,
  EducationItemType,
  ExperienceItemType,
  NavigationItemType,
  PortfolioItemType,
  SkillItemType,
  StatsItemType,
  TestimonialItemType,
  InfoItemType,
} from './component';

type SectionWrapperType = {
  category: string;
  categoryIcon: string;
  heading: string;
  body: string;
};

export type SidebarDataType = {
  name: string;
  description: string;
  image: ImageProps;
  detailsList: {
    label: string;
    text: string;
  }[];
  navigationList: NavigationItemType[];
};

export type ThemePromptType = {
  suggestions: string[];
  heading: string;
  body: string;
};

export type DialogType = {
  heading: string;
  message: string;
  confirmButtonText?: string;
  dismissButtonText?: string;
};

export type AlertDialogItemType = {
  heading: string;
  message: string;
  confirmButtonText: string;
  dismissButtonText: string;
};
export type ThemePromptFlowDataType = {
  themePrompt: ThemePromptType;
  loadingDialog: DialogType;
  alertDialog: DialogType;
  errorDialog: DialogType;
};


export type IntroSectionDataType = {
  heroImage: ImageProps;
  statsList: StatsItemType[];
  checklist: ChecklistItemType[];
} & SectionWrapperType;

export type SkillsSectionDataType = {
  skillsList: SkillItemType[];
} & SectionWrapperType;

export type ResumeSectionDataType = {
  heading2: string;
  body2: string;
  experienceList: ExperienceItemType[];
  educationList: EducationItemType[];
} & SectionWrapperType;

export type PortfolioSectionDataType = {
  projectsList: PortfolioItemType[];
} & SectionWrapperType;

export type TestimonalsSectionDataType = {
  testimonialList: TestimonialItemType[];
} & SectionWrapperType;

export type ContactSectionDataType = {
  infoList: InfoItemType[];
} & SectionWrapperType;

export type PageDataType = {
  introduction: IntroSectionDataType;
  skills: SkillsSectionDataType;
  resume: ResumeSectionDataType;
  portfolio: PortfolioSectionDataType;
  testimonials: TestimonalsSectionDataType;
  contact: ContactSectionDataType;
  themePromptFlow: ThemePromptFlowDataType;
};
