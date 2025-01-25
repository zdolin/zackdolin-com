'use client';

import Button from '@/components/atoms/Button';
import CircleIcon from '@/components/atoms/CircleIcon';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';
import SidebarAvatar from '@/components/molecules/SidebarAvatar';
import clsx from 'clsx';
//import CircleIcon from './CircleIcon';

export interface SidebarProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  detailsList: DetailListItem[];
  navigationList: NavigationListItem[];
  className?: string;
  hideNavigation?: boolean;
}

type DetailListItem = {
  label: string;
  text: string;
};

type NavigationListItem = {
  icon: keyof typeof iconMap;
  text: string;
};

const Sidebar = ({
  imageSrc,
  imageAlt,
  name,
  description,
  detailsList,
  navigationList,
  className,
  hideNavigation = false,
}: SidebarProps) => (
  <div
    className={clsx(
      'surface-primary flex flex-col items-center p-10 xl:rounded-2xl xl:shadow-custom',
      className
    )}
  >
    <SidebarAvatar imageSrc={imageSrc} imageAlt={imageAlt} />
    <Heading
      className="text-primary pb-3 pt-6 !text-2xl md:pb-2 lg:pb-4 lg:pt-8 lg:text-3xl"
      level={2}
    >
      {name}
    </Heading>
    <p className="text-secondary text-center text-sm md:text-xs lg:text-base">
      {description}
    </p>
    <ul className="my-8 w-full">
      {detailsList.map((item) => (
        <li
          className="flex justify-between border-t border-gray-200 py-4 dark:border-gray-700"
          key={item.label}
        >
          <span className="text-primary text-base md:text-sm lg:text-lg">
            {item.label}
          </span>
          <span className="text-primary text-right text-base font-medium md:text-sm lg:text-lg">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
    <Button className="w-full">Send Message</Button>
    <div>
      {!hideNavigation && (
        <nav className="mt-8 flex w-full list-none space-x-4 rounded-full p-4 shadow-custom">
          {navigationList.map((item) => (
            <li key={item.text}>
              <button className="group" onClick={() => {}}>
                <CircleIcon className="h-12 w-12 p-3" type={item.icon} />
              </button>
            </li>
          ))}
        </nav>
      )}
    </div>
  </div>
);

export default Sidebar;
