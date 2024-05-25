import type { Meta, StoryObj } from '@storybook/vue3';

import Logo from './Logo.vue';

const meta = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

export const Black: StoryObj<typeof meta> = {
  args: {
    color: 'black',
  },
};

export const White: StoryObj<typeof meta> = {
  args: {
    color: 'white',
  },
};

export const Normal: StoryObj<typeof meta> = {
  args: {
    size: 'normal',
    color: 'black',
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    size: 'large',
    color: 'black',
  },
};

export const ShowOnMobile: StoryObj<typeof meta> = {
  args: {
    color: 'black',
    hideOnMobile: false,
  },
};

export const HideOnMobile: StoryObj<typeof meta> = {
  args: {
    color: 'black',
    hideOnMobile: true,
  },
};
