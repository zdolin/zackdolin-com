import HeroAvatar from '@/components/molecules/HeroAvatar';
import MiniNav from '@/components/molecules/MiniNav';
import gqlClient from '@/lib/contentful/gqlClient';
import { SIDEBAR_QUERY } from '@/lib/queries';
import { transformSidebarData } from '@/lib/transformers';
import { SidebarDataType } from '@/types/data';
import clsx from 'clsx';
import { cache } from 'react';
import SidebarButton from './SidebarButton';
import SidebarInfo from './SidebarInfo';

export type SidebarProps = {
  className?: string;
  isMobile?: boolean;
};

const getSidebarData = cache(async (): Promise<SidebarDataType> => {
  const data = await gqlClient.request(SIDEBAR_QUERY);
  return transformSidebarData(data);
});

const Sidebar = async ({ className, isMobile = false }: SidebarProps) => {
  const { image, name, description, detailsList, navigationList } =
    await getSidebarData();

  return (
    <div
      className={clsx(
        'flex flex-col items-center bg-surface-primary p-10 xl:rounded-2xl xl:pt-0 xl:shadow-custom',
        className
      )}
    >
      <HeroAvatar isMobile={isMobile} image={image} />
      <SidebarInfo
        name={name}
        description={description}
        detailsList={detailsList}
        isMobile={isMobile}
      />
      <SidebarButton isMobile={isMobile} />
      <div>{!isMobile && <MiniNav navigationList={navigationList} />}</div>
    </div>
  );
};

export default Sidebar;
