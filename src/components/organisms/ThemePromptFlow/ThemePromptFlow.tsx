'use client';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import AlertDialog from '@/components/molecules/AlertDialog';
import LoadingDialog from '@/components/molecules/LoadingDialog/LoadingDialog';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import ThemePrompt from '@/components/organisms/ThemePrompt';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const THEME_PROMPT_KEY = 'themePromptDismissed';

type DialogState = 'hidden' | 'idle' | 'loading' | 'success' | 'error';

const ThemePromptFlow = () => {
  const [prompt, setPrompt] = useState('');
  const [dialogState, setDialogState] = useState<DialogState>('hidden');

  useEffect(() => {
    //const hasBeenDismissed = localStorage.getItem(THEME_PROMPT_KEY) === 'true';
    //if (!hasBeenDismissed) {
    const timeout = setTimeout(() => setDialogState('idle'), 3000);
    return () => clearTimeout(timeout);
    // }
  }, []);

  const handleClose = () => {
    setDialogState('hidden');
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
    setDialogState('loading');

    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeDescription: prompt }),
      });

      const theme = await res.json();

      if (theme?.light && theme?.dark) {
        applyThemeVariables(theme);
        setDialogState('success');
      } else {
        setDialogState('error');
        console.error('Unexpected theme format:', theme);
      }
    } catch (err) {
      setDialogState('error');
      console.error('Failed to fetch or apply theme:', err);
    }
  };

  return (
    <>
      <ThemePrompt
        open={dialogState === 'idle'}
        onClose={handleClose}
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        loading={dialogState === 'loading'}
      />

      <LoadingDialog open={dialogState === 'loading'} />

      {/* Success Modal/Drawer */}
      <ModalOrDrawer
        className="w-full sm:w-[31.25rem] md:w-[28.125rem] lg:w-[40.75rem]"
        open={dialogState === 'success'}
        onClose={handleClose}
        type="primary"
      >
        <div className="flex flex-col items-center justify-center space-y-4 sm:items-start">
          <Heading
            className={clsx(
              'text-center sm:text-left',
              'text-[1.5rem] sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl'
            )}
          >
            Theme applied successfully!
          </Heading>
          <p
            className={clsx(
              'text-center sm:text-left',
              'text-lg leading-[1.875rem] text-text-accent md:text-base lg:text-xl'
            )}
          >
            Your new theme is now active. What do you think?
          </p>
          <div
            className={clsx(
              'flex w-full flex-col-reverse items-center sm:flex-row sm:justify-end sm:space-x-3'
            )}
          >
            <Button
              className="flex items-center justify-between"
              sizeClassName="w-full sm:w-auto"
              onClick={() => setDialogState('idle')}
              intent="secondary"
              suppressIntroAnimation
              noScale
            >
              Try again
            </Button>
            <Button
              className="flex items-center justify-between"
              sizeClassName="w-full sm:w-auto my-4 sm:my-0"
              onClick={() => setDialogState('hidden')}
              suppressIntroAnimation
              noScale
            >
              I like it!
            </Button>
          </div>
        </div>
      </ModalOrDrawer>

      {/* Error Dialog */}
      <AlertDialog
        open={dialogState === 'error'}
        onClose={handleClose}
        title="Hmm, there was an error."
        description="Occassionally, the AI will fail to generate a theme. If this happens, try again in a minute or two."
      />
    </>
  );
};

export default ThemePromptFlow;
