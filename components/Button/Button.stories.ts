import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    text: 'Buy Now',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        {{ args.text }}
      </Button>
    `,
  }),
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};

export const Small: StoryObj<typeof meta> = {
  args: {
    size: 'small',
  },
};

export const Medium: StoryObj<typeof meta> = {
  args: {
    size: 'medium',
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    size: 'large',
  },
};
