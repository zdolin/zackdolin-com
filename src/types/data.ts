import { ImageProps } from 'next/image';
import { NavigationListItem } from './component';

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
