import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TabGroup from "./TabGroup";

const meta = {
  title: "Components/TabGroup",
  component: TabGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} satisfies Meta<typeof TabGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const tabData = [
  {
    label: "Tab A",
    content: <h2>Tab 1 content</h2>,
  },
  {
    label: "Tab B",
    content: <h2>Tab 2 content</h2>,
  },
  {
    label: "Tab C",
    content: <h2>Tab 3 content</h2>,
  },
];

export const Default: Story = {
  args: {
    tabData: tabData,
  },
};

export const WithStyles: Story = {
  args: {
    tabData: tabData,
    containerProps: { sx: { background: "#b3b8ff", padding: "3em" } },
    tabProps: {
      sx: { background: "#e2e4ff" },
      TabIndicatorProps: {
        sx: {
          backgroundColor: "#3d009e",
        },
      },
    },
    tabPanelProps: { sx: { background: "#898bac", padding: "12px" } },
  },
};
