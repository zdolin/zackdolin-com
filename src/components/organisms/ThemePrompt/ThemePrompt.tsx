'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Textarea from '@/components/atoms/Textarea';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import { useEffect, useState } from 'react';

const THEME_PROMPT_KEY = 'themePromptDismissed';

const ThemePrompt = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <ModalOrDrawer
      open={open}
      onClose={handleClose}
      title="Customize the Vibe"
      className="w-full md:max-w-2xl lg:max-w-4xl"
    >
      <form
        className="space-y-7 p-4 text-sm text-text-primary lg:space-y-9"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2 lg:space-y-4">
          <Heading>
            Retheme this site with a prompt! 🎨
            <br />
          </Heading>
          <p className="text-sm text-text-accent md:text-base lg:text-xl">
            Describe a look or feel, and the site will adapt its color palette
            to match.
          </p>
        </div>
        <Textarea
          rows={3}
          placeholder={
            'Try "Sunset desert tones" or "Retro synthwave with forest green"'
          }
          resizable={false}
          required
        />
        <div className="flex justify-end space-x-3">
          <Button intent="secondary" onClick={handleClose} hideArrow>
            Not now
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Applying Theme...' : 'Apply Theme'}
          </Button>
        </div>
      </form>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
