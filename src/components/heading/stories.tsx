import { Meta, StoryObj } from '@storybook/react';

import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  render: (args: HeadingProps) => <Heading {...args} />,
  args: {
    children: 'Most Populars',
    color: 'white',
    $lineColor: 'primary',
    size: 'medium',
  },
};
