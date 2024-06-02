import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from './Heading.vue';

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: `
      <Heading>
        {{ args.text }}
      </Heading>
    `,
  }),
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello world',
    color: 'black',
  },
};
