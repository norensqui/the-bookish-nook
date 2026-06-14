import { Monitor, Sun, Moon } from 'lucide-react';
import { useTheme, ThemePreference } from '@/context/ThemeContext';

const options: { id: ThemePreference; label: string; Icon: typeof Sun }[] = [
  { id: 'system', label: 'System', Icon: Monitor },
  { id: 'light', label: 'Light', Icon: Sun },
  { id: 'dark', label: 'Dark', Icon: Moon },
];

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm p-0.5 ${className}`}
      role="group"
      aria-label="Theme"
    >
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          title={label}
          aria-label={label}
          aria-pressed={currentTheme === id}
          className={`flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
            currentTheme === id
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
          }`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
