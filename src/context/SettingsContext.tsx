import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Settings {
  displayName: string;
  username: string;
  fontSize: number;
  compactView: boolean;
  gridColumns: string;
  cardStyle: string;
  showCovers: boolean;
  showRatings: boolean;
  showMoodQuotes: boolean;
  animationsEnabled: boolean;
  defaultView: 'read' | 'reading' | 'wishlist';
}

const defaultSettings: Settings = {
  displayName: 'Book Lover',
  username: '@booklover',
  fontSize: 16,
  compactView: false,
  gridColumns: 'auto',
  cardStyle: 'rounded',
  showCovers: true,
  showRatings: true,
  showMoodQuotes: true,
  animationsEnabled: true,
  defaultView: 'reading',
};

const SETTINGS_KEY = 'bookish_settings';

interface SettingsContextType {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) return { ...defaultSettings, ...JSON.parse(raw) };
    } catch {
      /* ignore */
    }
    return defaultSettings;
  });

  // Persist + apply global settings (font size, animations) to the document.
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      /* ignore */
    }
    const root = document.documentElement;
    root.style.fontSize = `${settings.fontSize}px`;
    root.classList.toggle('no-animations', !settings.animationsEnabled);
  }, [settings]);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
