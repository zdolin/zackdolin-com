'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Textarea from '@/components/atoms/Textarea';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import { useEffect, useState } from 'react';

const THEME_PROMPT_KEY = 'themePromptDismissed';

const ThemePrompt = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Uncomment this if you want to persist dismissal
    // const dismissed = localStorage.getItem(THEME_PROMPT_KEY);
    // if (!dismissed) {
    const timeout = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timeout);
    // }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(THEME_PROMPT_KEY, 'true');
  };

  const applyThemeVariables = (
    theme: Record<string, Record<string, string>>
  ) => {
    const root = document.documentElement;

    // Remove existing custom properties
    Object.keys(theme.light).forEach((key) => {
      root.style.removeProperty(key);
    });

    // Create or update light theme style
    const lightStyleId = 'dynamic-light-theme';
    let lightStyle = document.getElementById(
      lightStyleId
    ) as HTMLStyleElement | null;

    if (!lightStyle) {
      lightStyle = document.createElement('style');
      lightStyle.id = lightStyleId;
      document.head.appendChild(lightStyle);
    }

    const lightCSS = Object.entries(theme.light || {})
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

    lightStyle.innerHTML = `
      :root {
        ${lightCSS}
      }
    `;

    // Create or update dark theme style
    const darkStyleId = 'dynamic-dark-theme';
    let darkStyle = document.getElementById(
      darkStyleId
    ) as HTMLStyleElement | null;

    if (!darkStyle) {
      darkStyle = document.createElement('style');
      darkStyle.id = darkStyleId;
      document.head.appendChild(darkStyle);
    }

    const darkCSS = Object.entries(theme.dark || {})
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

    darkStyle.innerHTML = `
      :root[class~="dark"] {
        ${darkCSS}
      }
    `;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeDescription: prompt }),
      });

      const theme = await res.json();

      console.log('theme', JSON.stringify(theme, null, 2));

      if (theme?.light && theme?.dark) {
        applyThemeVariables(theme);
        handleClose();
      } else {
        console.error('Unexpected theme format:', theme);
      }
    } catch (err) {
      console.error('Failed to fetch or apply theme:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOrDrawer
      open={open}
      onClose={handleClose}
      title="Customize the Vibe"
      className="w-full md:max-w-2xl lg:max-w-4xl"
      type="primary"
    >
      <form
        className="space-y-8 pt-1 text-sm text-text-primary md:p-4 lg:space-y-9"
        onSubmit={handleSubmit}
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
        <div className="flex w-full justify-end space-x-3">
          <Button
            intent="secondary"
            onClick={handleClose}
            hideArrow
            suppressIntroAnimation
            type="button"
          >
            Not now
          </Button>
          <Button type="submit" disabled={loading} suppressIntroAnimation>
            {loading ? 'Applying Theme...' : 'Apply Theme'}
          </Button>
        </div>
      </form>
    </ModalOrDrawer>
  );
};

export default ThemePrompt;
