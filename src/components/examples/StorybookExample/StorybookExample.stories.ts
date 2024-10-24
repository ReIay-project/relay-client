import type { Meta, StoryObj } from '@storybook/vue3';
import StorybookExample from './StorybookExample.vue';

const meta: Meta<typeof StorybookExample> = {
  title: 'Ui/StorybookExample',
  component: StorybookExample,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The title of the component',
    }
  }
};

export default meta;

type Story = StoryObj<typeof StorybookExample>

export const Primary: Story = {
  args: {
    title: 'Hello, World Title!',
    item: {
      name: 'Item Name'
    },
    list: [
      { name: 'Item 1' }
    ]
  }
};

export const Secondary: Story = {
  args: {
    title: 'Hello, World Title!',
    item: {
      name: 'Item Name'
    },
    list: [
      { name: 'Item 1' }
    ]
  }
};