import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
  },
};
