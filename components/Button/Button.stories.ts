import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';
import AddShoppingCart from '../icons/AddShoppingCart.vue';

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
        <span>{{ args.text }}</span>
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

export const FullWidth: StoryObj<typeof meta> = {
  args: {
    fullWidth: true,
  },
};

export const WithIcon: StoryObj<typeof meta> = {
  args: {},
  render: (args) => ({
    components: { Button, AddShoppingCart },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <template #icon>
          <AddShoppingCart />
        </template>
        <template #default>
          <span>{{ args.text }}</span>
        </template>
      </Button>
    `,
  }),
};
