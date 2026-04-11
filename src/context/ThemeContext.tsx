import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ThemeDefinition {
  id: string;
  label: string;
  previewColor: string;
  vars: Record<string, string>;
}

export const themes: ThemeDefinition[] = [
  {
    id: 'warm-cream',
    label: 'Warm Cream',
    previewColor: 'hsl(36, 30%, 94%)',
    vars: {
      '--background': '36 30% 94%',
      '--foreground': '28 12% 15%',
      '--card': '38 26% 92%',
      '--card-foreground': '28 12% 15%',
      '--popover': '36 30% 94%',
      '--popover-foreground': '28 12% 15%',
      '--primary': '24 22% 38%',
      '--primary-foreground': '40 30% 97%',
      '--secondary': '30 18% 85%',
      '--secondary-foreground': '30 12% 20%',
      '--muted': '30 14% 88%',
      '--muted-foreground': '30 10% 42%',
      '--accent': '340 22% 80%',
      '--accent-foreground': '340 32% 25%',
      '--border': '30 14% 82%',
      '--input': '30 14% 82%',
      '--ring': '24 22% 38%',
      '--sidebar-background': '36 26% 91%',
      '--sidebar-foreground': '28 12% 25%',
      '--sidebar-primary': '24 22% 38%',
      '--sidebar-primary-foreground': '40 30% 97%',
      '--sidebar-accent': '30 18% 85%',
      '--sidebar-accent-foreground': '30 12% 20%',
      '--sidebar-border': '30 14% 82%',
    },
  },
  {
    id: 'soft-beige',
    label: 'Soft Beige',
    previewColor: 'hsl(35, 22%, 80%)',
    vars: {
      '--background': '35 24% 91%',
      '--foreground': '30 14% 14%',
      '--card': '34 20% 88%',
      '--card-foreground': '30 14% 14%',
      '--popover': '35 24% 91%',
      '--popover-foreground': '30 14% 14%',
      '--primary': '30 20% 35%',
      '--primary-foreground': '35 28% 96%',
      '--secondary': '32 16% 82%',
      '--secondary-foreground': '32 14% 18%',
      '--muted': '33 12% 86%',
      '--muted-foreground': '32 10% 40%',
      '--accent': '28 18% 74%',
      '--accent-foreground': '28 22% 22%',
      '--border': '32 12% 78%',
      '--input': '32 12% 78%',
      '--ring': '30 20% 35%',
      '--sidebar-background': '34 20% 88%',
      '--sidebar-foreground': '30 14% 20%',
      '--sidebar-primary': '30 20% 35%',
      '--sidebar-primary-foreground': '35 28% 96%',
      '--sidebar-accent': '32 16% 82%',
      '--sidebar-accent-foreground': '32 14% 18%',
      '--sidebar-border': '32 12% 78%',
    },
  },
  {
    id: 'dusty-rose',
    label: 'Dusty Rose',
    previewColor: 'hsl(340, 26%, 83%)',
    vars: {
      '--background': '345 22% 93%',
      '--foreground': '340 14% 14%',
      '--card': '342 20% 90%',
      '--card-foreground': '340 14% 14%',
      '--popover': '345 22% 93%',
      '--popover-foreground': '340 14% 14%',
      '--primary': '340 24% 40%',
      '--primary-foreground': '345 26% 96%',
      '--secondary': '338 18% 84%',
      '--secondary-foreground': '340 14% 20%',
      '--muted': '340 14% 87%',
      '--muted-foreground': '340 10% 42%',
      '--accent': '350 20% 76%',
      '--accent-foreground': '350 28% 24%',
      '--border': '340 14% 80%',
      '--input': '340 14% 80%',
      '--ring': '340 24% 40%',
      '--sidebar-background': '342 20% 90%',
      '--sidebar-foreground': '340 14% 22%',
      '--sidebar-primary': '340 24% 40%',
      '--sidebar-primary-foreground': '345 26% 96%',
      '--sidebar-accent': '338 18% 84%',
      '--sidebar-accent-foreground': '340 14% 20%',
      '--sidebar-border': '340 14% 80%',
    },
  },
  {
    id: 'sage-green',
    label: 'Sage Green',
    previewColor: 'hsl(140, 16%, 74%)',
    vars: {
      '--background': '138 16% 93%',
      '--foreground': '140 14% 13%',
      '--card': '136 14% 90%',
      '--card-foreground': '140 14% 13%',
      '--popover': '138 16% 93%',
      '--popover-foreground': '140 14% 13%',
      '--primary': '140 18% 34%',
      '--primary-foreground': '138 20% 96%',
      '--secondary': '136 14% 84%',
      '--secondary-foreground': '140 14% 18%',
      '--muted': '138 10% 87%',
      '--muted-foreground': '140 10% 40%',
      '--accent': '148 16% 72%',
      '--accent-foreground': '148 22% 22%',
      '--border': '138 12% 80%',
      '--input': '138 12% 80%',
      '--ring': '140 18% 34%',
      '--sidebar-background': '136 14% 90%',
      '--sidebar-foreground': '140 14% 20%',
      '--sidebar-primary': '140 18% 34%',
      '--sidebar-primary-foreground': '138 20% 96%',
      '--sidebar-accent': '136 14% 84%',
      '--sidebar-accent-foreground': '140 14% 18%',
      '--sidebar-border': '138 12% 80%',
    },
  },
  {
    id: 'muted-lavender',
    label: 'Muted Lavender',
    previewColor: 'hsl(260, 22%, 83%)',
    vars: {
      '--background': '258 18% 94%',
      '--foreground': '260 14% 14%',
      '--card': '256 16% 91%',
      '--card-foreground': '260 14% 14%',
      '--popover': '258 18% 94%',
      '--popover-foreground': '260 14% 14%',
      '--primary': '260 20% 38%',
      '--primary-foreground': '258 22% 96%',
      '--secondary': '256 14% 85%',
      '--secondary-foreground': '260 14% 20%',
      '--muted': '258 10% 88%',
      '--muted-foreground': '260 10% 42%',
      '--accent': '268 18% 76%',
      '--accent-foreground': '268 24% 24%',
      '--border': '258 12% 81%',
      '--input': '258 12% 81%',
      '--ring': '260 20% 38%',
      '--sidebar-background': '256 16% 91%',
      '--sidebar-foreground': '260 14% 22%',
      '--sidebar-primary': '260 20% 38%',
      '--sidebar-primary-foreground': '258 22% 96%',
      '--sidebar-accent': '256 14% 85%',
      '--sidebar-accent-foreground': '260 14% 20%',
      '--sidebar-border': '258 12% 81%',
    },
  },
];

interface ThemeContextType {
  currentTheme: string;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({ currentTheme: 'warm-cream', setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('bookish_theme') || 'warm-cream';
  });

  useEffect(() => {
    const theme = themes.find(t => t.id === currentTheme);
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem('bookish_theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
