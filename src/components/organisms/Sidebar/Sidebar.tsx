import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import HeroAvatar from '@/components/molecules/HeroAvatar';
import MiniNav from '@/components/molecules/MiniNav';
import gqlClient from '@/lib/contentful/gqlClient';
import { SIDEBAR_QUERY } from '@/lib/queries';
import { transformSidebarData } from '@/lib/transformers';
import { SidebarDataType } from '@/types/data';
import clsx from 'clsx';
import { cache } from 'react';

export type SidebarProps = {
  className?: string;
  hideNavigation?: boolean;
};

const getSidebarData = cache(async (): Promise<SidebarDataType> => {
  const data = await gqlClient.request(SIDEBAR_QUERY);
  return transformSidebarData(data);
});

const Sidebar = async ({ className, hideNavigation = false }: SidebarProps) => {
  const { image, name, description, detailsList, navigationList } =
    await getSidebarData();

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
        {!hideNavigation && <MiniNav navigationList={navigationList} />}
      </div>
    </div>
  );
};

export default Sidebar;
