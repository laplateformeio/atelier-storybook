import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import reactLogo from "../../assets/react.svg";
 
import { SidebarComponent } from './Sidebar';

const meta = {
  title: 'Example/Sidebar',
  component: SidebarComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    children: 'Sidebar content',
    items: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        icon: Search,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
    name: "My App",
    logo: reactLogo,
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof SidebarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    items: [
      {
        title: "Home",
        url: "",
        icon: Home,
      },
      {
        title: "Log In",
        url: "#",
      },
      {
        title: "Signup",
        url: "#",
      },
    ],
    name: "My App",
    logo: reactLogo,
  },
};

export const LoggedIn: Story = {
  args: {
    onLogout: () => {
      alert("Logged out");
    },
    user: {
      name: "Jane Doe",
      items: [{
        title: "Account",
        url: "#account",
      },{
        title: "Billing",
        url: "#billing",
      },
    ],
    },
  },
};
