// @vitest-environment nuxt
import { renderSuspended } from '@nuxt/test-utils/runtime';
import Main from './Main.vue';
import { screen } from '@testing-library/vue';

describe('<Main/>', () => {
  it('<Main />', async () => {
    await renderSuspended(Main);
    expect(screen.getByRole('heading', { name: /wongames/i })).toBeDefined();
  });
});
