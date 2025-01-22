import Heading from '@/components/atoms/Heading';
import SidebarAvatar from '@/components/molecules/SidebarAvatar';

export interface SidebarProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
}

const Sidebar = ({ imageSrc, imageAlt, name, description }: SidebarProps) => (
  <div className="surface-primary flex flex-col items-center p-10">
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
  </div>
);

export default Sidebar;
