export const timeAgo = (isoDate: string): string => {
  const now = new Date();
  const past = new Date(isoDate);
  const diffMs = now.getTime() - past.getTime();

  // Convert milliseconds to days
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return 'today';
  } else if (diffDays === 1) {
    return '1 day ago';
  } else if (diffDays > 60) {
    return `${Math.floor(diffDays / 30)} months ago`;
  } else {
    return `${diffDays} days ago`;
  }
};

// Apply theme variables to the document based on API response
export const applyThemeVariables = (
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