import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SwipeableDrawer from "./SwipeableDrawer";

const meta = {
  title: "Components/SwipeableDrawer",
  component: SwipeableDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ padding: "3rem", maxHeight: "600px" }}>{story()}</div>
    ),
  ],
} satisfies Meta<typeof SwipeableDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    children: <div>hello</div>,
  },
};
