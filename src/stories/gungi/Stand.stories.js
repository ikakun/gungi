import Stand from './Stand.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Gungi/Stand',
  component: Stand,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Default = {
  args: {
  },
};
