import { Meta, StoryObj } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: 'symbol',
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

export const withIcon: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
};

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};

export const asLink: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
};

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};
