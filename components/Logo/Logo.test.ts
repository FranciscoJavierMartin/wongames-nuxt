// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Logo from './Logo.vue';

describe('<Logo/>', () => {
  it('should render a white label y default', async () => {
    render(Logo);
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-white');
  });
});
