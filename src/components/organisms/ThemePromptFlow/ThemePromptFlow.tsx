'use client';

import AlertDialog from '@/components/molecules/AlertDialog';
import ConfirmationDialog from '@/components/molecules/ConfirmationDialog';
import LoadingDialog from '@/components/molecules/LoadingDialog/LoadingDialog';
import ThemePrompt from '@/components/organisms/ThemePrompt';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

type DialogState = 'hidden' | 'idle' | 'loading' | 'success' | 'error';

const ThemePromptFlow = () => {
  const [prompt, setPrompt] = useState('');
  const [dialogState, setDialogState] = useState<DialogState>('hidden');

  useEffect(() => {
    const hasBeenDismissed = Cookies.get('hideThemePrompt') === 'true';
    if (!hasBeenDismissed) {
      const timeout = setTimeout(() => setDialogState('idle'), 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClose = () => {
    setDialogState('hidden');
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

      {/* Loading Modal */}
      <LoadingDialog open={dialogState === 'loading'} />

      {/* Success Modal/Drawer */}
      <ConfirmationDialog
        open={dialogState === 'success'}
        handleClose={handleClose}
        handleAccept={() => setDialogState('idle')}
        handleReject={() => setDialogState('hidden')}
        heading="Theme applied successfully!"
        body="Your new theme is now active. What do you think? Try switching
            between light and dark modes!"
        acceptText="Try again"
        rejectText="I like it!"
      />

      {/* Error Modal */}
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
