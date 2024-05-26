import type { Config } from 'tailwindcss';
import wongamesTheme from './assets/wongames-theme';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  presets: [wongamesTheme],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
