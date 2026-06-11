import { motion } from 'framer-motion';
import { Settings, Palette, Layout, User, Sparkles, Type, Eye } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useTheme, themes } from '@/context/ThemeContext';
import { useSettings } from '@/context/SettingsContext';

export default function SettingsPage() {
  const { currentTheme, setTheme } = useTheme();
  const { settings, updateSettings } = useSettings();

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
          <div className="space-y-4">
            <div>
              <Label>Display Name</Label>
              <Input value={settings.displayName} onChange={e => updateSettings({ displayName: e.target.value })} className="bg-background/50 rounded-xl mt-1" />
            </div>
            <div>
              <Label>Username</Label>
              <Input value={settings.username} onChange={e => updateSettings({ username: e.target.value })} className="bg-background/50 rounded-xl mt-1" placeholder="@yourusername" />
              <p className="text-xs text-muted-foreground mt-1">This is your unique identifier</p>
            </div>
          </div>
        </section>

        {/* Theme */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Theme</h2>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all clickable-card ${
                  currentTheme === theme.id ? 'ring-2 ring-primary bg-secondary/40' : 'hover:bg-secondary/30'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full border border-border/50"
                  style={{ backgroundColor: theme.previewColor }}
                />
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
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Compact View</p>
                <p className="text-xs text-muted-foreground">Show more books with smaller cards</p>
              </div>
              <Switch checked={settings.compactView} onCheckedChange={v => updateSettings({ compactView: v })} />
            </div>
            <div>
              <Label>Grid Columns</Label>
              <Select value={settings.gridColumns} onValueChange={v => updateSettings({ gridColumns: v })}>
                <SelectTrigger className="bg-background/50 rounded-xl mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto (Responsive)</SelectItem>
                  <SelectItem value="3">3 Columns</SelectItem>
                  <SelectItem value="4">4 Columns</SelectItem>
                  <SelectItem value="5">5 Columns</SelectItem>
                  <SelectItem value="6">6 Columns</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Card Style</Label>
              <Select value={settings.cardStyle} onValueChange={v => updateSettings({ cardStyle: v })}>
                <SelectTrigger className="bg-background/50 rounded-xl mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="rounded">Rounded (Default)</SelectItem>
                  <SelectItem value="sharp">Sharp Corners</SelectItem>
                  <SelectItem value="minimal">Minimal (No Shadow)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Type className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Typography</h2>
          </div>
          <div>
            <Label>Font Size: {settings.fontSize}px</Label>
            <Slider value={[settings.fontSize]} onValueChange={v => updateSettings({ fontSize: v[0] })} min={12} max={20} step={1} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Adjust the base font size for readability</p>
          </div>
        </section>

        {/* Display */}
        <section className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="h-4 w-4 text-primary" />
            <h2 className="font-display text-lg font-semibold">Display Features</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Book Covers</p>
                <p className="text-xs text-muted-foreground">Show auto-fetched real book covers</p>
              </div>
              <Switch checked={settings.showCovers} onCheckedChange={v => updateSettings({ showCovers: v })} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Ratings Display</p>
                <p className="text-xs text-muted-foreground">Show star ratings on book cards</p>
              </div>
              <Switch checked={settings.showRatings} onCheckedChange={v => updateSettings({ showRatings: v })} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Mood Quotes</p>
                <p className="text-xs text-muted-foreground">Show auto-generated mood quotes on reviews</p>
              </div>
              <Switch checked={settings.showMoodQuotes} onCheckedChange={v => updateSettings({ showMoodQuotes: v })} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Animations</p>
                <p className="text-xs text-muted-foreground">Enable smooth transitions and micro-animations</p>
              </div>
              <Switch checked={settings.animationsEnabled} onCheckedChange={v => updateSettings({ animationsEnabled: v })} />
            </div>
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
            <Select value={settings.defaultView} onValueChange={v => updateSettings({ defaultView: v as 'read' | 'reading' | 'wishlist' })}>
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
