// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Heading from './Heading.vue';

describe('<Heading/>', () => {
  it('<Heading />', async () => {
    render(Heading);
    expect(
      screen.getByRole('heading', { name: /wongames/i }),
    ).toBeInTheDocument();
  });
});
