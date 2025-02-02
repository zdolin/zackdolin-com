import { iconMap } from '@/components/atoms/Icon';

export type NavigationListItem = {
  icon: keyof typeof iconMap;
  text: string;
};

export type ChecklistItemType = {
  icon: keyof typeof iconMap;
  text: string;
};

export type StatslistItemType = {
  quantity: string;
  text: string;
};

export type SkillsListItemType = {
  percentage: number;
  label: string;
}