import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookProvider } from "@/context/BookContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SettingsProvider } from "@/context/SettingsContext";
import { AppLayout } from "@/components/AppLayout";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import ExplorePage from "./pages/ExplorePage";
import MoviesPage from "./pages/MoviesPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <SettingsProvider>
        <BookProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </BookProvider>
        </SettingsProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
