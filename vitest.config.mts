import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    css: true,
    globals: true,
    environment: 'nuxt',
    setupFiles: ['./vitest.setup.ts'],
  },
});
