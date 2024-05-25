// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Logo from './Logo.vue';

describe('<Logo/>', () => {
  it('should render a white label by default', async () => {
    render(Logo);
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-white');
  });

  it('should render a black label when black color is passed', async () => {
    render(Logo, { props: { color: 'black' } });
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-black');
  });
});
