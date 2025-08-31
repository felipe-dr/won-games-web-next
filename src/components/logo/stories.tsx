import type { Meta, StoryObj } from '@storybook/react';

import Logo, { LogoProps } from '.';

const meta: Meta<LogoProps> = {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['white', 'black'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'large'],
    },
  },
};

export default meta;

export const Default: StoryObj<LogoProps> = {
  args: {
    color: 'white',
    size: 'normal',
  },
};
