import { useState, useEffect } from 'react';

interface GlitchTextOptions {
  duration?: number;
  steps?: number;
  start?: boolean;
}

const useGlitchText = (
  text: string,
  { duration = 500, steps = 20, start = false }: GlitchTextOptions = {}
): string => {
  const [displayText, setDisplayText] = useState<string>(text);

  useEffect(() => {
    if (!start) return;

    const lettersFromText = Array.from(
      new Set(text.split('').filter((ch) => /[a-zA-Z]/.test(ch)))
    );

    const glitchSpecialChars = '❚_';
    
    const getRandomChar = () => {
      if (lettersFromText.length && Math.random() < 0.3) {
        return lettersFromText[Math.floor(Math.random() * lettersFromText.length)];
      }
      return glitchSpecialChars[Math.floor(Math.random() * glitchSpecialChars.length)];
    };

    let step = 0;
    const totalSteps = steps;
    const intervalTime = duration / totalSteps;

    const intervalId = setInterval(() => {
      let newText = '';

      const revealCount = Math.floor((step / totalSteps) * text.length);

      for (let i = 0; i < text.length; i++) {
        if (!/[a-zA-Z]/.test(text[i])) {
          newText += text[i];
        } else if (i < revealCount) {
          newText += text[i];
        } else {
          newText += getRandomChar();
        }
      }
      setDisplayText(newText);
      step++;

      if (step > totalSteps) {
        setDisplayText(text);
        clearInterval(intervalId);
      }
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [start, text, duration, steps]);

  return displayText;
};

export default useGlitchText;
