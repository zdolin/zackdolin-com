import { ImageProps } from 'next/image';
import {
  ChecklistItemType,
  EducationItemType,
  ExperienceItemType,
  NavigationItemType,
  SkillItemType,
  StatsItemType,
} from './component';

type SectionWrapperType = {
  category: string;
  heading: string;
  body: string;
  categoryIcon: string;
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

export type PageDataType = {
  introduction: IntroSectionDataType;
  skills: SkillsSectionDataType;
  resume: ResumeSectionDataType;
};
