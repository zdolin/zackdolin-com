'use client';

import { useEffect, useState } from 'react';
import ThemePrompt from '../ThemePrompt/ThemePrompt';

const THEME_PROMPT_KEY = 'themePromptDismissed';

const ThemePromptFlow = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setError(null);
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
        handleClose();
      } else {
        setError('Unexpected theme format received');
        console.error('Unexpected theme format:', theme);
      }
    } catch (err) {
      setError('Failed to apply theme. Please try again.');
      console.error('Failed to fetch or apply theme:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemePrompt
      open={open}
      onClose={handleClose}
      prompt={prompt}
      setPrompt={setPrompt}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default ThemePromptFlow;
