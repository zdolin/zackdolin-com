'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Textarea from '@/components/atoms/Textarea';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import { useEffect, useState } from 'react';

const THEME_PROMPT_KEY = 'themePromptDismissed';

const ThemePrompt = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //const dismissed = localStorage.getItem(THEME_PROMPT_KEY);
    //if (!dismissed) {
    const timeout = setTimeout(() => setOpen(true), 3000); // Delay before showing
    return () => clearTimeout(timeout);
    //}
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(THEME_PROMPT_KEY, 'true');
  };

  return (
    <ModalOrDrawer
      open={open}
      onClose={handleClose}
      title="Customize the Vibe"
      className="w-full md:max-w-2xl lg:max-w-4xl"
    >
      <div className="space-y-8 p-4 text-sm text-text-primary lg:space-y-10">
        <div className="space-y-2 lg:space-y-4">
          <Heading>
            This site adapts to your style! 🎨
            <br />
          </Heading>
          <p className="text-sm text-text-accent md:text-base lg:text-xl">
            Describe a theme you&apos;d like to see, and watch the colors shift
            to match your mood.
          </p>
        </div>
        <Textarea
          rows={3}
          placeholder={
            'Try "Retro synthwave with forest green" or "A light and airy seaside vibe"'
          }
          resizable={false}
        />
        <div className="flex justify-end space-x-3">
          <Button intent="secondary" onClick={handleClose} hideArrow>
            Not now
          </Button>
          <Button
            onClick={() => {
              // TODO: Trigger theme generation here
              handleClose();
            }}
          >
            Apply Theme
          </Button>
        </div>
      </div>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
