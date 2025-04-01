'use client';

import AlertDialog from '@/components/molecules/AlertDialog';
import ConfirmationDialog from '@/components/molecules/ConfirmationDialog';
import LoadingDialog from '@/components/molecules/LoadingDialog/LoadingDialog';
import ThemePrompt from '@/components/organisms/ThemePrompt';
import { ThemePromptFlowDataType } from '@/types/data';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

type DialogState = 'hidden' | 'idle' | 'loading' | 'success' | 'error';

export interface ThemePromptFlowProps {
  data: ThemePromptFlowDataType;
}

const ThemePromptFlow = ({ data }: ThemePromptFlowProps) => {
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
        heading={data.themePrompt.heading}
        body={data.themePrompt.body}
        suggestions={data.themePrompt.suggestions}
      />

      {/* Loading Modal */}
      <LoadingDialog
        open={dialogState === 'loading'}
        heading={data.loadingDialog.heading}
        message={data.loadingDialog.message}
      />

      {/* Success Modal/Drawer */}
      <ConfirmationDialog
        open={dialogState === 'success'}
        handleClose={handleClose}
        handleAccept={() => setDialogState('idle')}
        handleReject={() => setDialogState('hidden')}
        heading={data.alertDialog.heading}
        body={data.alertDialog.message}
        confirmText={data.alertDialog.confirmButtonText ?? 'Try again'}
        dismissText={data.alertDialog.dismissButtonText ?? 'I like it!'}
      />

      {/* Error Modal */}
      <AlertDialog
        open={dialogState === 'error'}
        onClose={handleClose}
        heading={data.errorDialog.heading}
        description={data.errorDialog.message}
      />
    </>
  );
};

export default ThemePromptFlow;
