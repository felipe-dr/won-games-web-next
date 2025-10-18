import { Meta, StoryObj } from '@storybook/react';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'normal'],
    },
  },
  args: {
    children: 'Best Seller',
  },
} as Meta<RibbonProps>;

export const Default: StoryObj<RibbonProps> = {
  render: (args: RibbonProps) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888',
      }}
    >
      <Ribbon {...args} />
    </div>
  ),
};
