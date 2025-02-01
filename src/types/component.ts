import { iconMap } from '@/components/atoms/Icon';

export type NavigationListItem = {
  icon: keyof typeof iconMap;
  text: string;
};