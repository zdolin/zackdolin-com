'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Input from '@/components/atoms/Input';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import clsx from 'clsx';
import { FormEvent, useEffect, useMemo, useState } from 'react';

const themeSuggestions = [
  'Sunset desert tones',
  'Ocean breeze with coral accents',
  'Vintage sepia and warm browns',
  'Cyberpunk neon cityscape',
  'Autumn maple forest',
  'Arctic colorscape',
  'Tropical paradise sunset',
  'Peanut butter and jelly',
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          <Heading>
            Retheme this site with a prompt! 🎨
            <br />
          </Heading>
          <p className="text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl">
            Describe a look or feel, and the site will adapt its color palette
            to match.
          </p>
        </div>
        <Input
          placeholder={placeholderText}
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          maxLength={100}
        />
        <div
          className={clsx(
            'flex w-full flex-col-reverse items-center sm:flex-row sm:justify-end sm:space-x-3'
          )}
        >
          <Button
            sizeClassName="w-full sm:w-auto"
            type="button"
            intent="secondary"
            onClick={onClose}
            hideArrow
            suppressIntroAnimation
          >
            Maybe later
          </Button>
          <Button
            type="submit"
            disabled={loading}
            loading={loading}
            sizeClassName="w-full sm:w-auto my-4 sm:my-0"
            suppressIntroAnimation
            noScale
          >
            {loading ? 'Applying...' : 'Apply Theme'}
          </Button>
        </div>
      </form>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
