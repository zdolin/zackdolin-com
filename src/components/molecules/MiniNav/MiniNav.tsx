'use client';

import CircleIcon from '@/components/atoms/CircleIcon';
import { NavigationListItem } from '@/types/component';
import { useState } from 'react';

export interface MiniNavProps {
  navigationList: NavigationListItem[];
}

const MiniNav = ({ navigationList }: MiniNavProps) => {
  const [currentNavigationListItem, setCurrentNavigationListItem] =
    useState<NavigationListItem>(navigationList[0]);
  return (
    <nav className="mt-8 flex w-full list-none space-x-4 rounded-full p-4 shadow-custom">
      {navigationList.map((item) => (
        <li key={item.text}>
          <button onClick={() => setCurrentNavigationListItem(item)}>
            <CircleIcon
              className="h-12 w-12 p-3"
              bgClass={
                currentNavigationListItem === item ? undefined : 'bg-blue-50'
              }
              iconFillClass={
                currentNavigationListItem === item ? undefined : 'fill-sky-600'
              }
              type={item.icon}
            />
          </button>
        </li>
      ))}
    </nav>
  );
};

export default MiniNav;
