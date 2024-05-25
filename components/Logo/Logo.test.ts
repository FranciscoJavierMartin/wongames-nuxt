// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Logo from './Logo.vue';

describe('<Logo/>', () => {
  it('should render a white label by default', async () => {
    render(Logo);

    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-white');
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: 'rgb(250 250 250/1)',
    });
  });

  it('should render a black label when black color is passed', async () => {
    render(Logo, { props: { color: 'black' } });

    expect(screen.getByLabelText(/Won Games/i)).toHaveClass('text-black');
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: 'rgb(3 5 23/1)',
    });
  });

  it('should render a normal logo when size is default', async () => {
    render(Logo);

    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '110px',
      height: '33px',
    });
  });

  it('should render a bigger logo when size is large', async () => {
    render(Logo, { props: { size: 'large' } });

    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '200px',
      height: '59px',
    });
  });
});
