import { Home, Compass, BookOpen, Settings, BookMarked, Film, BarChart3 } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const mainNav = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Explore', url: '/explore', icon: Compass },
  { title: 'My Library', url: '/library', icon: BookOpen },
  { title: 'Movies', url: '/movies', icon: Film },
];

const bottomNav = [
  { title: 'Reading Stats', url: '/stats', icon: BarChart3 },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/30 bg-sidebar/60 backdrop-blur-sm">
      <SidebarContent className="pt-6">
        <div className={`px-4 mb-8 flex items-center gap-2 ${collapsed ? 'justify-center' : ''}`}>
          <BookMarked className="h-6 w-6 text-primary" />
          {!collapsed && (
            <span className="font-display text-xl font-semibold text-foreground tracking-tight">
              Folio
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === '/'}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-full text-muted-foreground hover:bg-secondary/60 transition-colors"
                      activeClassName="bg-secondary text-foreground font-medium shadow-sm"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="font-body text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pinned to the bottom: insights & settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            {!collapsed && (
              <p className="px-4 mb-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/70">
                More
              </p>
            )}
            <SidebarMenu>
              {bottomNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-full text-muted-foreground hover:bg-secondary/60 transition-colors"
                      activeClassName="bg-secondary text-foreground font-medium shadow-sm"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="font-body text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
