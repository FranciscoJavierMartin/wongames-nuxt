import type { Meta, StoryObj } from '@storybook/vue3';

import Heading from './Heading.vue';

const meta = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    text: 'Hello world',
  },
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Hello world',
      description: 'Text to show',
    },
    color: {
      options: ['white', 'black'],
      control: { type: 'radio' },
      defaultValue: 'black',
      description: 'Text color',
    },
    lineLeft: {
      type: 'boolean',
      defaultValue: false,
      description: 'Add line to left',
    },
    lineBottom: {
      type: 'boolean',
      defaultValue: false,
      description: 'Add line to bottom',
    },
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
} satisfies Meta<typeof Heading | { text: string }>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'white',
  },
};

export const Black: Story = {
  args: {},
};

export const LineLeft: Story = {
  args: {
    lineLeft: true,
  },
};

export const LineBottom: Story = {
  args: {
    lineBottom: true,
  },
};
