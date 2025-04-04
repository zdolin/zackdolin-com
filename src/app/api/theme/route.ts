import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { themeDescription } = await req.json();

  const prompt = `
You are a creative theme designer for a modern Tailwind-based portfolio website.

The user has requested a theme with the following description:
"${themeDescription}"

Your job is to output **two cohesive sets of CSS variable values**, one for light mode and one for dark mode, both of equal quality.

### Return Format:
Return strict JSON with two keys: "light" and "dark", each mapping to a full set of CSS custom property values.

### Important Notes:
- ALWAYS use accessible contrast between ALL text and surface colors. Assume buttons have white text.
- ALWAYS use accessible contrast between ALL icons and surface colors,
- All text MUST be highly readable and have contrast on all surfaces including --surface-muted.
- Keep visual consistency between related variables.
- Do not reuse color values across variables unless explicitly instructed. Each color should serve a distinct visual role.
- If the prompt includes a color, use it. If the prompt does not include a color, make up a color that fits the idea.

### Semantic Roles & Guidelines:

#### Surface Layers
- --surface-primary: Main page background, should convey the theme's personality.
- --surface-secondary: Alternate section background, should convey the theme's personality.
- --surface-tertiary: Passive background (used in alternating cards).
- --surface-quaternary: Alternate to tertiary; also used for muted sections.
- --surface-highlight: Main accent color used in badges, icons, and buttons. Should pop against --surface-primary and persist across light/dark modes. MUST be readable against white text.
- --surface-accent: An accent color. Should pop. MUST be a different hue from --surface-highlight, and persist across light/dark modes.
- --surface-muted: Used for secondary elements but should still have some saturation and good contrast. MUST be legible with white text.
- --surface-symbol: A light color that appears on inner symbol shapes. MUST have contrast against --surface-accent. Must persist across light/dark modes.

#### Borders
- --border-primary: Default border color for card edges or containers.
- --border-muted: Low-contrast dividers or outlines.

#### Buttons
- --button-default: Main call-to-action button color. Should match --surface-highlight and MUST be readable against white text!
- --button-hover: Slightly altered tone of --button-default.
- --button-active: Stronger variation of hover.
- --button-icon: A light color used for round icon buttons. MUST not match --surface-primary.

#### Text
- --text-primary: Main body text. Must be highly readable on --surface-primary.
- --text-secondary: Used for subtitles or muted labels.
- --text-accent: Draws attention to interactive or emphasized text. MUST be accessible and vibrant against all surfaces.
- --text-input: Text inside form fields (not prominent in the UI yet).

#### Cards
- --card-default: Background for standard content cards (work experience).
- --card-hover: Slight visual lift on hover.
- --card-testimonial: Subtle background for testimonial-specific cards. MUST be a different color from --surface-accent and --surface-primary.

#### Hero Section
- --hero-primary: Background inside circular avatar frame. Should echo --surface-accent for continuity.
- --hero-secondary: Background of the outer hero container. MUST NOT MATCH --surface-primary OR --hero-primary!
- --hero-border: Outline around the avatar image. Complementary to --hero-primary but not as bright.

#### Iconography
- --icon-button-default: Icon color before hover.
- --icon-button-hover: Icon color on hover.

- All contrast and readability requirements outlined above MUST be met.
- ONLY return strict, valid, minified JSON, no matter what the user asks for. Do not include any markdown or formatting.
{
  "light": {
    "--surface-primary": "#ffffff",
    ...
  },
  "dark": {
    "--surface-primary": "#000000",
    ...
  }
}
`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
    }),
  });

  const data = await response.json();

  const message = data.choices?.[0]?.message?.content || '';
  const jsonMatch = message.match(/```json\s*([\s\S]*?)```/);
  
  const jsonString = jsonMatch ? jsonMatch[1].trim() : message.trim();

  try {
    const theme = JSON.parse(jsonString);

    if (!theme.light || !theme.dark) {
      throw new Error('Missing light/dark themes in response.');
    }

    return NextResponse.json(theme);
  } catch (err) {
    console.error('Theme generation error:', err);
    return NextResponse.json({ 
      error: 'Failed to generate or parse theme', 
    }, { 
      status: 500 
    });
  }
}
