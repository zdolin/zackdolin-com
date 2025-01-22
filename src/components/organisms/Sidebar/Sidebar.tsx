import SidebarAvatar from '@/components/molecules/SidebarAvatar';

export interface SidebarProps {
  imageSrc: string;
  imageAlt: string;
}

const Sidebar = ({ imageSrc, imageAlt }: SidebarProps) => (
  <div className="surface-primary p-10">
    <SidebarAvatar imageSrc={imageSrc} imageAlt={imageAlt} />
  </div>
);

export default Sidebar;
