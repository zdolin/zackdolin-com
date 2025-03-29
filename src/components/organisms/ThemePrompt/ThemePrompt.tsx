'use client';

import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import Heading from '@/components/atoms/Heading';
import Input from '@/components/atoms/Input';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { FormEvent, useEffect, useMemo, useState } from 'react';

const themeSuggestions = [
  'Sunset desert tones',
  'Ocean breeze with coral accents',
  'Vintage sepia and warm browns',
  'Cyberpunk neon cityscape',
  'Autumn maple forest',
  'Arctic colorscape',
  'Tropical paradise sunset',
  'Peanut butter and bananas',
  'Gingerbread house',
  'Desert oasis with cacti',
  'A lush jurassic rainforest',
];

interface ThemePromptProps {
  open: boolean;
  onClose: () => void;
  prompt: string;
  setPrompt: (value: string) => void;
  onSubmit: (e: FormEvent) => Promise<void>;
  loading: boolean;
}

const ThemePrompt = ({
  open,
  onClose,
  prompt,
  setPrompt,
  onSubmit,
  loading,
}: ThemePromptProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      Cookies.set('hideThemePrompt', 'true', { expires: 365 }); // Cookie expires in 1 year
    }
    onClose();
  };

  const placeholderText = useMemo(() => {
    const shuffled = [...themeSuggestions].sort(() => 0.5 - Math.random());
    return isMobile
      ? `Try "${shuffled[0]}"`
      : `Try "${shuffled[0]}" or "${shuffled[1]}"`;
  }, [isMobile]);

  return (
    <ModalOrDrawer
      open={open}
      onClose={onClose}
      title="Customize this site"
      className="w-full md:max-w-2xl lg:max-w-4xl"
      type="primary"
    >
      <form
        className="space-y-8 pt-1 text-sm text-text-primary md:p-4 lg:space-y-9"
        onSubmit={(e) => {
          onSubmit(e);
          setPrompt('');
        }}
      >
        <div className="space-y-4">
          <Heading className="text-[1.938rem] md:text-2xl lg:text-4xl xl:text-5xl">
            Retheme this site with a prompt!
            <span className="ml-3 xl:ml-4">&#127912;</span>
            <br />
          </Heading>
          <p className="text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl">
            Describe a look or feel, and the site will adapt its color palette
            to match.
          </p>
        </div>
        <Input
          autoComplete="off"
          placeholder={placeholderText}
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          maxLength={100}
        />
        <div
          className={clsx(
            'flex w-full flex-col items-center space-y-4 md:space-y-0',
            'md:flex-row md:justify-between md:space-x-3'
          )}
        >
          <div
            className={clsx(
              'order-2 flex w-full flex-col-reverse items-center md:w-auto md:flex-row',
              'space-y-4 md:space-x-3 md:space-y-0'
            )}
          >
            <Button
              sizeClassName="w-full md:w-auto"
              type="button"
              intent="secondary"
              onClick={handleClose}
              hideArrow
              suppressIntroAnimation
            >
              Maybe later
            </Button>
            <Button
              type="submit"
              disabled={loading}
              loading={loading}
              sizeClassName="w-full md:w-auto pb-5 md:pb-0"
              suppressIntroAnimation
            >
              {loading ? 'Applying...' : 'Apply Theme'}
            </Button>
          </div>
          <div
            className={clsx(
              'order-2 flex w-full items-center justify-center md:order-1 md:w-auto md:justify-start'
            )}
          >
            <button
              type="button"
              role="checkbox"
              aria-checked={dontShowAgain}
              onClick={() => setDontShowAgain(!dontShowAgain)}
              className={clsx(
                'flex cursor-pointer items-center text-base text-text-accent hover:text-text-primary',
                'space-x-3 pt-4 md:pt-0'
              )}
            >
              <Checkbox checked={dontShowAgain} onChange={setDontShowAgain} />
              <span>Don&apos;t show again</span>
            </button>
          </div>
        </div>
      </form>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
