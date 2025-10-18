import { Meta, StoryObj } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
  },
} as Meta<HighlightProps>;

export const Default: StoryObj<HighlightProps> = {};
