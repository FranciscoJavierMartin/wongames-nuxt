import type { Meta, StoryObj } from '@storybook/vue3';

import Main from './Main.vue';

const meta = {
  title: 'Main',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
