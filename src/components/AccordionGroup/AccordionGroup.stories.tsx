import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AccordionGroup from "./AccordionGroup";

const meta = {
  title: "Components/AccordionGroup",
  component: AccordionGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} satisfies Meta<typeof AccordionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const accordionData = [
  {
    label: "Accordion A",
    content: <h2>Accordion 1 content</h2>,
  },
  {
    label: "Accordion B",
    content: <h2>Accordion 2 content</h2>,
  },
  {
    label: "Accordion C",
    content: <h2>Accordion 3 content</h2>,
  },
];

export const Default: Story = {
  args: {
    accordions: accordionData,
  },
};

export const WithStyles: Story = {
  args: {
    accordions: accordionData,
  },
};
