import { ImageProps } from 'next/image';
import {
  ChecklistItemType,
  NavigationListItem,
  StatslistItemType,
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
  navigationList: NavigationListItem[];
};

export type IntroSectionDataType = {
  title: string;
  heroImage: ImageProps;
  statsList: StatslistItemType[];
  checkList: ChecklistItemType[];
} & SectionWrapperType;

export type PageDataType = {
  introduction: IntroSectionDataType;
};
