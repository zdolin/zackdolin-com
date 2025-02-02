import { iconMap } from '@/components/atoms/Icon';
import { ImageProps } from 'next/image';

export type NavigationItemType = {
  icon: keyof typeof iconMap;
  text: string;
};

export type ChecklistItemType = {
  icon: keyof typeof iconMap;
  text: string;
};

export type StatsItemType = {
  quantity: string;
  text: string;
};

export type SkillItemType = {
  percentage: number;
  label: string;
};

export type EducationItemType = {
  title: string;
  location: string;
  date: string;
  description: string;
};

export type ExperienceItemType = {
  company: string;
} & EducationItemType;

export type PortfolioItemType = {
  heading: string;
  description: string;
  image: ImageProps;
};
