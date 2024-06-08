// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Button from './Button.vue';

describe('<Button/>', () => {
  it('should render the medium size by default', async () => {
    render(Button, {
      slots: {
        default: 'Buy Now',
      },
    });
    expect(
      screen.getByRole('button', { name: /buy now/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '40px',
      // padding: '0.8rem 3.2rem',
      'font-size': '14px',
    });
  });

  it('should render the small size', async () => {
    render(Button, {
      slots: {
        default: 'Buy Now',
      },
      props: {
        size: 'small',
      },
    });
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '30px',
      'font-size': '12px',
    });
  });

  it('should render the large size', async () => {
    render(Button, {
      slots: {
        default: 'Buy Now',
      },
      props: {
        size: 'large',
      },
    });
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '50px',
      // padding: '8px 48px',
      'font-size': '16px',
    });
  });
});
