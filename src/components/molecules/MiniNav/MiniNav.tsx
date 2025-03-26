'use client';

import CircleIcon from '@/components/atoms/CircleIcon';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NavigationItemType } from '@/types/component';

export interface MiniNavProps {
  navigationList: NavigationItemType[];
}

const MiniNav = ({ navigationList }: MiniNavProps) => {
  const activeSection = useActiveSection();
  return (
    <nav className="mt-8 flex w-full list-none space-x-4 rounded-full p-4 shadow-custom">
      {navigationList.map((item) => (
        <li key={item.text}>
          <a className="group" href={item.href}>
            <CircleIcon
              className="h-12 w-12 p-3"
              bgClass={
                activeSection === item.href.slice(1)
                  ? undefined
                  : 'bg-blue-50 group-hover:bg-sky-500'
              }
              iconFillClass={
                activeSection === item.href.slice(1)
                  ? undefined
                  : 'fill-surface-highlight group-hover:fill-white'
              }
              type={item.icon}
            />
          </a>
        </li>
      ))}
    </nav>
  );
};

export default MiniNav;
