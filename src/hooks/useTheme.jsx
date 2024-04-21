import { useEffect, useState } from 'react';

export default function useTheme() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme ?? 'light',
  );

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
