// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Main from './Main.vue';

describe('<Main/>', () => {
  it('<Main />', async () => {
    render(Main);
    expect(
      screen.getByRole('heading', { name: /wongames/i }),
    ).toBeInTheDocument();
  });
});
