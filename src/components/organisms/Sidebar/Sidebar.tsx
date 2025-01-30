'use client';

import Button from '@/components/atoms/Button';
import CircleIcon from '@/components/atoms/CircleIcon';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';
import HeroAvatar from '@/components/molecules/HeroAvatar';
import clsx from 'clsx';
import { ImageProps } from 'next/image';
import { useState } from 'react';

export interface SidebarProps {
  image: ImageProps;
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
  image,
  name,
  description,
  detailsList,
  navigationList,
  className,
  hideNavigation = false,
}: SidebarProps) => {
  const [currentNavigationListItem, setCurrentNavigationListItem] =
    useState<NavigationListItem>(navigationList[0]);

  return (
    <div
      className={clsx(
        'surface-primary flex flex-col items-center p-10 xl:rounded-2xl xl:shadow-custom',
        className
      )}
    >
      <HeroAvatar image={image} />
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
                <button onClick={() => setCurrentNavigationListItem(item)}>
                  <CircleIcon
                    className="h-12 w-12 p-3"
                    bgClass={
                      currentNavigationListItem === item
                        ? undefined
                        : 'bg-blue-50'
                    }
                    iconFillClass={
                      currentNavigationListItem === item
                        ? undefined
                        : 'fill-sky-600'
                    }
                    type={item.icon}
                  />
                </button>
              </li>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
