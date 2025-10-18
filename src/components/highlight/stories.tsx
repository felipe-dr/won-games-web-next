import { Meta, StoryObj } from '@storybook/react';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    $backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    alignment: 'left',
  },
} as Meta<HighlightProps>;

export const Default: StoryObj<HighlightProps> = {
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
};

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
};

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
