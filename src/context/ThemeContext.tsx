import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ThemeDefinition {
  id: string;
  label: string;
  previewColor: string;
  vars: Record<string, string>;
}

export const themes: ThemeDefinition[] = [
  {
    id: 'light',
    label: 'Light',
    previewColor: 'linear-gradient(135deg, #F7CBCA, #BDD7D8)',
    vars: {
      '--background': '180 26% 94%',
      '--foreground': '167 8% 22%',
      '--card': '180 27% 97%',
      '--card-foreground': '167 8% 22%',
      '--popover': '180 27% 97%',
      '--popover-foreground': '167 8% 22%',
      '--primary': '180 8% 39%',
      '--primary-foreground': '180 27% 97%',
      '--secondary': '180 24% 87%',
      '--secondary-foreground': '180 9% 28%',
      '--muted': '180 20% 90%',
      '--muted-foreground': '180 7% 44%',
      '--accent': '1 74% 88%',
      '--accent-foreground': '350 24% 32%',
      '--border': '182 20% 80%',
      '--input': '182 20% 80%',
      '--ring': '180 8% 39%',
      '--sage': '182 26% 79%',
      '--sage-foreground': '180 9% 26%',
      '--rose': '1 74% 88%',
      '--rose-foreground': '350 24% 32%',
      '--lavender': '180 24% 87%',
      '--lavender-foreground': '180 9% 26%',
      '--sand': '0 60% 91%',
      '--sand-foreground': '350 18% 32%',
      '--taupe': '180 7% 50%',
      '--cream': '180 27% 97%',
      '--bg-gradient-from': '1 74% 88%',
      '--bg-gradient-to': '182 30% 80%',
      '--sidebar-background': '180 24% 92%',
      '--sidebar-foreground': '180 9% 28%',
      '--sidebar-primary': '180 8% 39%',
      '--sidebar-primary-foreground': '180 27% 97%',
      '--sidebar-accent': '180 24% 87%',
      '--sidebar-accent-foreground': '180 9% 28%',
      '--sidebar-border': '182 20% 80%',
    },
  },
  {
    id: 'dark',
    label: 'Dark',
    previewColor: 'linear-gradient(135deg, #2C3B3B, #161E1E)',
    vars: {
      '--background': '182 9% 11%',
      '--foreground': '180 12% 90%',
      '--card': '182 9% 15%',
      '--card-foreground': '180 12% 90%',
      '--popover': '182 9% 15%',
      '--popover-foreground': '180 12% 90%',
      '--primary': '182 24% 64%',
      '--primary-foreground': '182 10% 12%',
      '--secondary': '180 8% 20%',
      '--secondary-foreground': '180 12% 88%',
      '--muted': '182 8% 17%',
      '--muted-foreground': '180 7% 62%',
      '--accent': '1 34% 64%',
      '--accent-foreground': '0 30% 94%',
      '--border': '180 8% 23%',
      '--input': '180 8% 23%',
      '--ring': '182 24% 64%',
      '--sage': '182 22% 58%',
      '--sage-foreground': '180 12% 90%',
      '--rose': '1 38% 66%',
      '--rose-foreground': '0 30% 94%',
      '--lavender': '182 18% 56%',
      '--lavender-foreground': '180 12% 90%',
      '--sand': '180 8% 28%',
      '--sand-foreground': '180 12% 88%',
      '--taupe': '180 7% 56%',
      '--cream': '182 9% 18%',
      '--bg-gradient-from': '182 14% 14%',
      '--bg-gradient-to': '182 12% 9%',
      '--sidebar-background': '182 9% 12%',
      '--sidebar-foreground': '180 12% 86%',
      '--sidebar-primary': '182 24% 64%',
      '--sidebar-primary-foreground': '182 10% 12%',
      '--sidebar-accent': '180 8% 20%',
      '--sidebar-accent-foreground': '180 12% 88%',
      '--sidebar-border': '180 8% 23%',
    },
  },
];

interface ThemeContextType {
  currentTheme: string;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({ currentTheme: 'light', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('bookish_theme');
    // Fall back to Light if an old (removed) theme id was stored.
    return themes.some(t => t.id === saved) ? (saved as string) : 'light';
  });

  useEffect(() => {
    const theme = themes.find(t => t.id === currentTheme) || themes[0];
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    // Toggle the `dark` class so Tailwind dark: utilities and components follow.
    root.classList.toggle('dark', theme.id === 'dark');
    localStorage.setItem('bookish_theme', theme.id);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
