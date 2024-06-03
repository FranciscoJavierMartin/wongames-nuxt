// @vitest-environment nuxt
import { screen, render } from '@testing-library/vue';
import Heading from './Heading.vue';

describe('<Heading/>', () => {
  it('should render a white heading by default', () => {
    render(Heading, { slots: { default: 'Hello world' } });
    expect(
      screen.getByRole('heading', { name: /Hello world/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Hello world/i })).toHaveStyle({
      color: 'rgb(250 250 250/1)',
    });
  });

  it('should render a black heading when color is passed', () => {
    render(Heading, {
      slots: { default: 'Hello world' },
      props: { color: 'black' },
    });

    expect(screen.getByRole('heading', { name: /Hello world/i })).toHaveStyle({
      color: 'rgb(3 5 23/1)',
    });
  });

  it('should render a heading with a line to the left side', () => {
    render(Heading, {
      slots: { default: 'Hello world' },
      props: { lineLeft: true },
    });

    expect(screen.getByRole('heading', { name: /Hello world/i })).toHaveStyle({
      borderLeft: '0.7rem solid rgb(60 211 193/1)',
    });
  });

  it('should render a heading with a line at the bottom', () => {
    render(Heading, {
      slots: { default: 'Hello world' },
      props: { lineBottom: true },
    });

    expect(screen.getByRole('heading', { name: /Hello world/i })).toHaveStyle({
      borderBottom: '0.5rem solid rgb(242 49 165/1)',
    });
  });
});
