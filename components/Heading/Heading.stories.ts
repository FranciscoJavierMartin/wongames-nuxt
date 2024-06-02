import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from './Heading.vue';

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    text: 'Test',
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      console.log(args);
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
    text: 'Hell',
    color: 'black',
  },
};
