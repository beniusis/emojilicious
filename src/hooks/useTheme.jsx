import { useEffect, useState } from 'react';

const usersPreference =
  localStorage.theme ??
  (!('theme' in localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');

export default function useTheme() {
  const [currentTheme, setCurrentTheme] = useState(usersPreference);

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.theme = currentTheme;
  }, [currentTheme]);

  return { currentTheme, setCurrentTheme };
}
