'use client';

import CircleIcon from '@/components/atoms/CircleIcon';
import { NavigationItemType } from '@/types/component';
import { useState } from 'react';

export interface MiniNavProps {
  navigationList: NavigationItemType[];
}

const MiniNav = ({ navigationList }: MiniNavProps) => {
  const [currentNavigationItemType, setCurrentNavigationItemType] =
    useState<NavigationItemType>(navigationList[0]);
  return (
    <nav className="mt-8 flex w-full list-none space-x-4 rounded-full p-4 shadow-custom">
      {navigationList.map((item) => (
        <li key={item.text}>
          <button onClick={() => setCurrentNavigationItemType(item)}>
            <CircleIcon
              className="h-12 w-12 p-3"
              bgClass={
                currentNavigationItemType === item ? undefined : 'bg-blue-50'
              }
              iconFillClass={
                currentNavigationItemType === item ? undefined : 'fill-sky-600'
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
