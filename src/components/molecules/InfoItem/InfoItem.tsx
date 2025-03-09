import CircleIcon from '@/components/atoms/CircleIcon';
import Heading from '@/components/atoms/Heading';
import { iconMap } from '@/components/atoms/Icon';
import clsx from 'clsx';
import Obfuscate from 'react-obfuscate';

export interface InfoItemProps {
  icon: keyof typeof iconMap;
  heading: string;
  text: string;
  className?: string;
  index: number;
}

const InfoItem = ({ icon, heading, text, className }: InfoItemProps) => {
  // Determine if the text is an email
  const isEmail = text.includes('@');
  // Check if text looks like a phone number: numbers, spaces, parentheses, dashes, and plus signs
  const isPhone = !isEmail && /^\+?[\d\s()-]+$/.test(text.trim());

  return (
    <div
      className={clsx(
        'flex flex-row gap-4 md:flex-col md:items-center xl:flex-row xl:items-start',
        className
      )}
    >
      <CircleIcon
        className="h-[2.625rem] w-[2.625rem] p-[0.813rem] md:h-12 md:w-12 md:p-[0.875rem]"
        type={icon}
      />
      <div className="flex flex-col">
        <Heading className="md:text-center xl:text-left" level={2}>
          {heading}
        </Heading>
        <p className="text-secondary text-base md:text-center md:text-sm xl:text-left xl:text-xl">
          {isEmail ? (
            <Obfuscate email={text} />
          ) : isPhone ? (
            <Obfuscate tel={text} />
          ) : (
            text
          )}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
