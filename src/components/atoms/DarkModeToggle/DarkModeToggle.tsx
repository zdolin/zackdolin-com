import Icon from '@/components/atoms/Icon';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (enabled) {
      htmlEl.classList.remove('dark');
    } else {
      htmlEl.classList.add('dark');
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        'h-9 w-16 lg:h-12 lg:w-20',
        'relative inline-flex items-center rounded-full shadow-md',
        'bg-white transition-colors duration-300'
      )}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={clsx(
          'absolute inset-0 rounded-full transition-colors duration-300',
          'bg-sky-600'
        )}
      />
      <span
        className={clsx(
          'relative z-10 rounded-full bg-yellow-400 transition-transform duration-200 ease-in-out',
          'ml-1 inline-flex h-7 w-7 items-center justify-center lg:h-10 lg:w-10',
          enabled ? 'translate-x-[28px] lg:translate-x-[32px]' : 'translate-x-0'
        )}
      >
        <Icon className="fill-sky-600" type={enabled ? 'sun' : 'moon'} />
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
