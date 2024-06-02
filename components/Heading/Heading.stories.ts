import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from './Heading.vue';

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    text: 'Hello world',
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `
      <Heading v-bind="args">
        {{ args.text }}
      </Heading>
    `,
  }),
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Black: Story = {
  args: {
    color: 'black',
  },
};

export const LineLeft: Story = {
  args: {
    color: 'black',
    lineLeft: true,
  },
};

export const LineBottom: Story = {
  args: {
    color: 'black',
    lineBottom: true,
  },
};
