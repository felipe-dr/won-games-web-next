import { Meta, StoryObj } from '@storybook/react';

import Banner, { BannerProps } from '.';
import { RibbonProps } from '../ribbon';

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string',
    },
    ribbonColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    ribbonSize: {
      control: { type: 'select' },
      options: ['small', 'normal'],
    },
  },
  args: {
    img: 'https://images.unsplash.com/photo-1745750747043-da33e463f361?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<BannerProps>;

export const Default: StoryObj<BannerProps> = {
  render: (args: BannerProps) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  ),
};

export const WithRibbon: StoryObj<BannerProps & RibbonProps> = (
  args: BannerProps & RibbonProps,
) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
