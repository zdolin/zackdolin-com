import Icon from '@/components/atoms/Icon';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const themeCookie = Cookies.get('theme');
    setEnabled(themeCookie === 'light');
  }, []);

  useEffect(() => {
    if (enabled === null) return; // Ensure that effect logic only runs after initialization
    const htmlEl = document.documentElement;
    if (enabled) {
      htmlEl.classList.remove('dark');
      Cookies.set('theme', 'light', { expires: 365, sameSite: 'Strict' });
    } else {
      htmlEl.classList.add('dark');
      Cookies.set('theme', 'dark', { expires: 365, sameSite: 'Strict' });
    }
  }, [enabled]);

  if (enabled === null) return null;

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        'group',
        'h-9 w-16 lg:h-12 lg:w-20',
        'relative inline-flex items-center rounded-full shadow-md',
        'bg-white transition-colors duration-300'
      )}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={clsx(
          'absolute inset-0 rounded-full transition-colors duration-300',
          'bg-surface-highlight ease-out-quart group-hover:bg-button-hover'
        )}
      />
      <span
        className={clsx(
          'relative z-10 rounded-full bg-surface-accent transition-transform duration-200 ease-in-out',
          'ml-1 inline-flex h-7 w-7 items-center justify-center lg:h-10 lg:w-10',
          enabled ? 'translate-x-[1.75rem] lg:translate-x-8' : 'translate-x-0',
          'transition-scale duration-300 ease-out-back group-hover:scale-[0.75]'
        )}
      >
        <Icon
          className="fill-surface-highlight"
          type={enabled ? 'sun' : 'moon'}
        />
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
