import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: (() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('luxetheme');
      return storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : 'light';
    }
    return 'light';
  })(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('luxetheme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
      return { theme: newTheme };
    }),
}));
