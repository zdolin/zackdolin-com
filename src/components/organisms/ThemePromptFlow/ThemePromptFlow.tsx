'use client';

import LoadingDialog from '@/components/molecules/LoadingDialog/LoadingDialog';
import ModalOrDrawer from '@/components/organisms/ModalOrDrawer';
import ThemePrompt from '@/components/organisms/ThemePrompt';
import { useEffect, useState } from 'react';

const THEME_PROMPT_KEY = 'themePromptDismissed';

type DialogState = 'idle' | 'loading' | 'success' | 'error';

const ThemePromptFlow = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [dialogState, setDialogState] = useState<DialogState>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const timeout = setTimeout(() => setOpen(true), 3000);
    // return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setError(null);
    setDialogState('idle');
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
    setError(null);

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
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setError('Unexpected theme format received');
        setDialogState('error');
        console.error('Unexpected theme format:', theme);
      }
    } catch (err) {
      setError('Failed to apply theme. Please try again.');
      setDialogState('error');
      console.error('Failed to fetch or apply theme:', err);
    }
  };

  return (
    <>
      <ThemePrompt
        open={open}
        onClose={handleClose}
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        loading={dialogState === 'loading'}
        error={error}
      />

      <LoadingDialog open={dialogState === 'loading'} />

      {/* Success Modal/Drawer */}
      <ModalOrDrawer
        open={dialogState === 'success'}
        onClose={handleClose}
        type="primary"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-success/10 rounded-full p-3">
            <svg
              className="text-success h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-center text-lg">Theme applied successfully!</p>
          <p className="text-center text-sm text-text-secondary">
            Your new theme is now active
          </p>
        </div>
      </ModalOrDrawer>

      {/* Error Modal/Drawer */}
      <ModalOrDrawer
        open={dialogState === 'error'}
        onClose={handleClose}
        type="primary"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-error/10 rounded-full p-3">
            <svg
              className="text-error h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <p className="text-center text-lg">Failed to apply theme</p>
          <p className="text-center text-sm text-text-secondary">
            {error || 'An unexpected error occurred'}
          </p>
        </div>
      </ModalOrDrawer>
    </>
  );
};

export default ThemePromptFlow;
