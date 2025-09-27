import type { Meta, StoryObj } from '@storybook/react';

import Menu, { MenuProps } from '.';

const meta: Meta = {
  title: 'Menu',
  component: Menu,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<MenuProps> = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};
