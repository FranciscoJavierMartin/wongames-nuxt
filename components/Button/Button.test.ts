// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Button from './Button.vue';

describe('<Button/>', () => {
  it('<Button />', async () => {
    render(Button);
    expect(
      screen.getByRole('heading', { name: /wongames/i }),
    ).toBeInTheDocument();
  });
});
