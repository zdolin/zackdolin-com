import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import SidebarAvatar from '@/components/molecules/SidebarAvatar';
import clsx from 'clsx';

export interface SidebarProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  detailsList: DetailListItem[];
  className?: string;
}

type DetailListItem = {
  label: string;
  text: string;
};

const Sidebar = ({
  imageSrc,
  imageAlt,
  name,
  description,
  detailsList,
  className,
}: SidebarProps) => (
  <div
    className={clsx(
      'surface-primary flex flex-col items-center p-10',
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
  </div>
);

export default Sidebar;
