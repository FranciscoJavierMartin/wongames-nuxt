// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Logo from './Logo.vue';

describe('<Logo/>', () => {
  it('<Logo />', async () => {
    render(Logo);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
