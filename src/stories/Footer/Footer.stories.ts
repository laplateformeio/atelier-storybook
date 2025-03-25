import type { Meta, StoryObj } from '@storybook/react';

import { FooterComponent } from './Footer';

const meta = {
  title: 'Example/Footer',
  component: FooterComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//   },
// };

export const Footer: Story = {};
