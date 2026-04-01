import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Palette, Layout, User, Sparkles } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const themeOptions = [
  { id: 'warm-cream', label: 'Warm Cream', color: 'bg-[hsl(36,33%,97%)]' },
  { id: 'soft-beige', label: 'Soft Beige', color: 'bg-sand' },
  { id: 'dusty-rose', label: 'Dusty Rose', color: 'bg-rose' },
  { id: 'sage-green', label: 'Sage Green', color: 'bg-sage' },
  { id: 'muted-lavender', label: 'Muted Lavender', color: 'bg-lavender' },
];

export default function SettingsPage() {
  const [selectedTheme, setSelectedTheme] = useState('warm-cream');
  const [compactView, setCompactView] = useState(false);
  const [displayName, setDisplayName] = useState('Book Lover');

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-2">
          <Settings className="h-5 w-5 text-primary" />
          <h1 className="font-display text-3xl font-bold text-foreground">Settings</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-8">Customize your Bookish experience</p>
      </motion.div>

      <div className="space-y-8">
        {/* Profile */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Profile</h2>
          </div>
          <div>
            <Label>Display Name</Label>
            <Input value={displayName} onChange={e => setDisplayName(e.target.value)} className="bg-background/50 rounded-xl mt-1" />
          </div>
        </section>

        {/* Theme */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Theme</h2>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {themeOptions.map(theme => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                  selectedTheme === theme.id ? 'ring-2 ring-primary bg-secondary/40' : 'hover:bg-secondary/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${theme.color} border border-border/50`} />
                <span className="text-xs text-muted-foreground">{theme.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Layout */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Layout className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Layout</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Compact View</p>
              <p className="text-xs text-muted-foreground">Show more books with smaller cards</p>
            </div>
            <Switch checked={compactView} onCheckedChange={setCompactView} />
          </div>
        </section>

        {/* Personalization */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Personalization</h2>
          </div>
          <div>
            <Label>Default Library View</Label>
            <Select defaultValue="reading">
              <SelectTrigger className="bg-background/50 rounded-xl mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="reading">Currently Reading</SelectItem>
                <SelectItem value="wishlist">Wishlist</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>
      </div>
    </div>
  );
}
