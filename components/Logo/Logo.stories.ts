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
