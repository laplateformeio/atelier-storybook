import type { Meta, StoryObj } from '@storybook/react';
 
import { TableComponent } from './Table';


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
const meta = {
  title: 'Example/Table',
  component: TableComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    data: invoices,
    columns: [
      { name: "Invoice", className: "w-1/4 whitespace-nowrap" },
      { name: "Payment Status", className: "w-1/4 whitespace-nowrap" },
      { name: "Total Amount", className: "w-1/4 whitespace-nowrap" },
      { name: "Payment Method", className: "w-1/4 whitespace-nowrap" },
    ],
   
  

    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof TableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    data: invoices,
  },
};

export const TableEmpty: Story = {
  args: {
    data: [],
  },
};
