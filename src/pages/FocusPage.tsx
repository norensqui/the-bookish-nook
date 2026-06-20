import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, Flame, Clock, Library, Timer, Trophy, BookOpen, Calendar } from 'lucide-react';
import { useBooks } from '@/context/BookContext';
import { PageBanner } from '@/components/PageBanner';
import focusBanner from '@/assets/illustrations/cozy-nook.jpg';

const SESSIONS_KEY = 'bookish_focus_sessions';
const ACTIVE_KEY = 'bookish_focus_active';

interface FocusSession {
  id: string;
  mode: string;
  minutes: number;
  date: string;
  ts: number;
  bookId?: string;
  bookTitle?: string;
}

interface ActiveState {
  phase: 'running' | 'paused';
  endTs?: number;
  remaining: number;
  targetSec: number;
  modeId: string;
  custom: boolean;
  customMin: number;
  bookId: string;
}

const MODES = [
  { id: 'reading', label: 'Reading', minutes: 20, desc: 'A cozy reading sit-down' },
  { id: 'pomodoro', label: 'Pomodoro', minutes: 25, desc: '25-minute focus' },
  { id: 'deep', label: 'Deep Reading', minutes: 45, desc: 'Long-form focus' },
  { id: 'immersive', label: 'Immersive', minutes: 60, desc: 'Lose yourself in it' },
];

const spineColors = ['hsl(var(--primary))', 'hsl(var(--sage))', 'hsl(var(--rose))', 'hsl(var(--accent))', 'hsl(var(--sand))'];

function todayStr(d = new Date()) {
  const tz = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return tz.toISOString().split('T')[0];
}
function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function FocusPage() {
  const { books } = useBooks();
  const readingBooks = useMemo(() => books.filter(b => b.status === 'reading'), [books]);

  const [sessions, setSessions] = useState<FocusSession[]>(() => loadJSON<FocusSession[]>(SESSIONS_KEY, []));
  const [modeId, setModeId] = useState('reading');
  const [custom, setCustom] = useState(false);
  const [customMin, setCustomMin] = useState(30);
  const [bookId, setBookId] = useState('');

  const targetMin = custom ? Math.max(1, Math.round(customMin) || 1) : MODES.find(m => m.id === modeId)!.minutes;
  const targetSec = targetMin * 60;

  const [phase, setPhase] = useState<'idle' | 'running' | 'paused' | 'done'>('idle');
  const [remaining, setRemaining] = useState(targetSec);
  const endTsRef = useRef<number | null>(null);
  const [reward, setReward] = useState<FocusSession | null>(null);

  useEffect(() => {
    try { localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions)); } catch { /* ignore */ }
  }, [sessions]);

  useEffect(() => {
    if (phase === 'idle') setRemaining(targetSec);
  }, [targetSec, phase]);

  const recordSession = useCallback((minutes: number, modeUsed: string, bId: string) => {
    const book = readingBooks.find(b => b.id === bId);
    const s: FocusSession = {
      id: Date.now().toString(),
      mode: modeUsed,
      minutes,
      date: todayStr(),
      ts: Date.now(),
      bookId: bId || undefined,
      bookTitle: book?.title,
    };
    setSessions(prev => [...prev, s]);
    return s;
  }, [readingBooks]);

  const clearActive = () => { try { localStorage.removeItem(ACTIVE_KEY); } catch { /* ignore */ } };

  const completeNow = useCallback((mins: number, modeUsed: string, bId: string) => {
    endTsRef.current = null;
    clearActive();
    const s = recordSession(mins, modeUsed, bId);
    setReward(s);
    setPhase('done');
    setRemaining(0);
  }, [recordSession]);

  useEffect(() => {
    const active = loadJSON<ActiveState | null>(ACTIVE_KEY, null);
    if (!active) return;
    setModeId(active.modeId);
    setCustom(active.custom);
    setCustomMin(active.customMin);
    setBookId(active.bookId);
    if (active.phase === 'running' && active.endTs) {
      const rem = Math.round((active.endTs - Date.now()) / 1000);
      if (rem <= 0) {
        completeNow(Math.round(active.targetSec / 60), active.custom ? 'custom' : active.modeId, active.bookId);
      } else {
        endTsRef.current = active.endTs;
        setRemaining(rem);
        setPhase('running');
      }
    } else if (active.phase === 'paused') {
      setRemaining(active.remaining);
      setPhase('paused');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== 'running') return;
    const tick = () => {
      if (endTsRef.current == null) return;
      const rem = Math.max(0, Math.round((endTsRef.current - Date.now()) / 1000));
      setRemaining(rem);
      if (rem <= 0) {
        const modeUsed = custom ? 'custom' : modeId;
        completeNow(targetMin, modeUsed, bookId);
      }
    };
    const id = window.setInterval(tick, 1000);
    const onVis = () => { if (document.visibilityState === 'visible') tick(); };
    document.addEventListener('visibilitychange', onVis);
    tick();
    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [phase, custom, modeId, targetMin, bookId, completeNow]);

  const persistActive = (next: ActiveState) => {
    try { localStorage.setItem(ACTIVE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const start = () => {
    const rem = phase === 'paused' ? remaining : targetSec;
    const endTs = Date.now() + rem * 1000;
    endTsRef.current = endTs;
    setRemaining(rem);
    setPhase('running');
    setReward(null);
    persistActive({ phase: 'running', endTs, remaining: rem, targetSec, modeId, custom, customMin, bookId });
  };
  const pause = () => {
    endTsRef.current = null;
    setPhase('paused');
    persistActive({ phase: 'paused', remaining, targetSec, modeId, custom, customMin, bookId });
  };
  const end = () => {
    const elapsedMin = Math.round((targetSec - remaining) / 60);
    endTsRef.current = null;
    clearActive();
    if (elapsedMin >= 1) {
      const s = recordSession(elapsedMin, custom ? 'custom' : modeId, bookId);
      setReward(s);
      setPhase('done');
    } else {
      setPhase('idle');
      setRemaining(targetSec);
    }
  };
  const dismissReward = () => { setReward(null); setPhase('idle'); setRemaining(targetSec); };

  const stats = useMemo(() => {
    const today = todayStr();
    const weekAgo = todayStr(new Date(Date.now() - 6 * 86400000));
    const todayMin = sessions.filter(s => s.date === today).reduce((a, s) => a + s.minutes, 0);
    const weekMin = sessions.filter(s => s.date >= weekAgo).reduce((a, s) => a + s.minutes, 0);
    const totalMin = sessions.reduce((a, s) => a + s.minutes, 0);
    const avg = sessions.length ? Math.round(totalMin / sessions.length) : 0;
    const dates = new Set(sessions.map(s => s.date));
    let streak = 0;
    const d = new Date();
    while (dates.has(todayStr(d))) { streak++; d.setDate(d.getDate() - 1); }
    return { todayMin, weekMin, totalMin, avg, streak, count: sessions.length };
  }, [sessions]);

  const progress = phase === 'idle' ? 0 : 1 - remaining / targetSec;
  const R = 96;
  const CIRC = 2 * Math.PI * R;

  const shelfCount = Math.min(sessions.length, 24);
  const overflow = sessions.length - shelfCount;
  const recent = [...sessions].reverse().slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <PageBanner
        image={focusBanner}
        icon={Library}
        title="Focus Sessions"
        subtitle="Settle in, read, and grow your little library"
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <section className="lg:col-span-3 glass-card p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-accent/15 pointer-events-none" />
          <div className="relative">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {MODES.map(m => (
                <button
                  key={m.id}
                  disabled={phase === 'running' || phase === 'paused'}
                  onClick={() => { setCustom(false); setModeId(m.id); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors disabled:opacity-50 ${
                    !custom && modeId === m.id ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  {m.label}
                </button>
              ))}
              <button
                disabled={phase === 'running' || phase === 'paused'}
                onClick={() => setCustom(true)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors disabled:opacity-50 ${
                  custom ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
              >
                Custom
              </button>
            </div>

            {custom && phase === 'idle' && (
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-muted-foreground">Minutes:</span>
                <input
                  type="number"
                  min={1}
                  max={240}
                  value={customMin}
                  onChange={e => setCustomMin(+e.target.value)}
                  className="w-20 h-9 rounded-full border border-input bg-background/60 px-4 text-foreground"
                />
              </div>
            )}

            <div className="relative w-60 h-60 mx-auto my-2">
              <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
                <circle cx="110" cy="110" r={R} fill="none" stroke="hsl(var(--secondary))" strokeWidth="10" />
                <motion.circle
                  cx="110" cy="110" r={R} fill="none" stroke="hsl(var(--primary))" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={CIRC}
                  animate={{ strokeDashoffset: CIRC * (1 - progress) }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <AnimatePresence>
                  {(phase === 'running' || phase === 'paused') && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      <BookOpen className="h-5 w-5 text-primary/60 mb-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="font-display text-5xl font-bold text-foreground tabular-nums">{fmt(remaining)}</span>
                <span className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                  {phase === 'running' ? 'reading…' : phase === 'paused' ? 'paused' : custom ? 'custom' : MODES.find(m => m.id === modeId)!.label}
                </span>
              </div>
            </div>

            {phase === 'idle' && readingBooks.length > 0 && (
              <div className="flex items-center justify-center gap-2 mb-4 text-sm flex-wrap">
                <span className="text-muted-foreground">Reading:</span>
                <select
                  value={bookId}
                  onChange={e => setBookId(e.target.value)}
                  className="h-9 rounded-full border border-input bg-background/60 px-4 text-foreground max-w-[200px]"
                >
                  <option value="">Anything</option>
                  {readingBooks.map(b => <option key={b.id} value={b.id}>{b.title}</option>)}
                </select>
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              {phase === 'running' ? (
                <>
                  <button onClick={pause} className="flex items-center gap-2 px-6 h-11 rounded-full bg-primary text-primary-foreground font-medium">
                    <Pause className="h-4 w-4" /> Pause
                  </button>
                  <button onClick={end} className="flex items-center gap-2 px-5 h-11 rounded-full bg-secondary text-secondary-foreground font-medium">
                    <Square className="h-4 w-4" /> End
                  </button>
                </>
              ) : phase === 'paused' ? (
                <>
                  <button onClick={start} className="flex items-center gap-2 px-6 h-11 rounded-full bg-primary text-primary-foreground font-medium">
                    <Play className="h-4 w-4" /> Resume
                  </button>
                  <button onClick={end} className="flex items-center gap-2 px-5 h-11 rounded-full bg-secondary text-secondary-foreground font-medium">
                    <Square className="h-4 w-4" /> End
                  </button>
                </>
              ) : (
                <button onClick={start} className="flex items-center gap-2 px-8 h-12 rounded-full bg-primary text-primary-foreground font-medium text-base">
                  <Play className="h-4 w-4" /> Begin reading
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="lg:col-span-2 space-y-4">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-5 w-5 text-accent-foreground" />
              <h2 className="font-display text-lg font-semibold text-foreground">{stats.streak}-day streak</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Stat icon={Clock} label="Today" value={`${stats.todayMin}m`} />
              <Stat icon={Calendar} label="This week" value={`${Math.floor(stats.weekMin / 60)}h ${stats.weekMin % 60}m`} />
              <Stat icon={Timer} label="Avg session" value={`${stats.avg}m`} />
              <Stat icon={Trophy} label="Sessions" value={`${stats.count}`} />
            </div>
            <div className="mt-3 glass-card p-3 bg-secondary/30 flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-display font-bold">{Math.floor(stats.totalMin / 60)}h {stats.totalMin % 60}m</span>
                <span className="text-muted-foreground"> read all-time</span>
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="glass-card p-6 mt-6">
        <div className="flex items-center gap-2 mb-1">
          <Library className="h-5 w-5 text-primary" />
          <h2 className="font-display text-lg font-semibold text-foreground">Your growing library</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-5">Every finished session adds a book to your shelf.</p>
        {shelfCount === 0 ? (
          <p className="text-sm text-muted-foreground">Your shelf is empty for now — finish your first session to place a book here.</p>
        ) : (
          <div className="flex flex-wrap items-end gap-[3px] px-1">
            {Array.from({ length: shelfCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: Math.min(i * 0.02, 0.4) }}
                className="w-[13px] rounded-t-[3px]"
                style={{ background: spineColors[i % spineColors.length], height: 30 + ((i * 7) % 22) }}
                title="A finished reading session"
              />
            ))}
            {overflow > 0 && <span className="text-xs text-muted-foreground self-center ml-2">+{overflow} more</span>}
          </div>
        )}
        <div className="shelf-ledge mt-0" />
      </section>

      <section className="mt-6">
        <h2 className="section-title mb-4">Recent sessions</h2>
        {recent.length === 0 ? (
          <div className="glass-card p-8 text-center text-sm text-muted-foreground">No sessions yet — your reading log will appear here.</div>
        ) : (
          <div className="space-y-2 max-w-3xl">
            {recent.map(s => (
              <div key={s.id} className="glass-card p-4 flex items-center gap-4">
                <div className="p-2 rounded-xl bg-secondary/50 shrink-0">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {s.minutes} min · <span className="capitalize text-muted-foreground">{s.mode}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{s.date}{s.bookTitle ? ` · ${s.bookTitle}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <AnimatePresence>
        {reward && phase === 'done' && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={dismissReward}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
              className="glass-card p-8 max-w-sm w-full text-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                initial={{ rotate: -8, y: 6 }} animate={{ rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                className="mx-auto mb-4 w-12 h-16 rounded-md"
                style={{ background: 'hsl(var(--rose))' }}
              />
              <h3 className="font-display text-xl font-bold text-foreground">A new book on your shelf</h3>
              <p className="text-sm text-muted-foreground mt-2">
                You read for <span className="font-medium text-foreground">{reward.minutes} minutes</span>
                {reward.bookTitle ? <> of <span className="font-medium text-foreground">{reward.bookTitle}</span></> : ''}. Lovely work.
              </p>
              <button onClick={dismissReward} className="mt-5 px-6 h-10 rounded-full bg-primary text-primary-foreground font-medium">
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="glass-card p-3 flex items-center gap-2.5">
      <Icon className="h-4 w-4 text-primary shrink-0" />
      <div className="min-w-0">
        <p className="font-display text-lg font-bold text-foreground leading-none">{value}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}
