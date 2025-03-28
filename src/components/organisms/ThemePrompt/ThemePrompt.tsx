'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Textarea from '@/components/atoms/Textarea';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import clsx from 'clsx';
import { FormEvent } from 'react';

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
        onSubmit={onSubmit}
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
        <Textarea
          rows={3}
          placeholder='Try "Sunset desert tones" or "Retro synthwave with forest green"'
          resizable={false}
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div
          className={clsx(
            'flex w-full flex-col-reverse items-center sm:flex-row sm:justify-end sm:space-x-3'
          )}
        >
          <Button
            className="flex items-center justify-between"
            sizeClassName="w-full sm:w-auto"
            intent="secondary"
            onClick={onClose}
            hideArrow
            suppressIntroAnimation
            type="button"
          >
            Maybe later
          </Button>
          <Button
            className="flex items-center justify-between"
            type="submit"
            disabled={loading}
            suppressIntroAnimation
            loading={loading}
            sizeClassName="w-full sm:w-auto my-4 sm:my-0"
          >
            {loading ? 'Applying...' : 'Apply Theme'}
          </Button>
        </div>
      </form>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
