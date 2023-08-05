import { Box, BoxProps, Tab, Tabs, TabsProps, useTheme } from "@mui/material";
import React, { ReactNode, SyntheticEvent, useState } from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface CustomPanelProps {
  sx?: BoxProps["sx"];
}

export interface TabGroupProps {
  tabData: { label: string; content: ReactNode }[];
  containerProps?: BoxProps;
  tabProps?: TabsProps;
  tabPanelProps?: CustomPanelProps;
}

function TabPanel(props: TabPanelProps & CustomPanelProps) {
  const { children, value, index, sx, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={sx}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const TabGroup = ({
  tabData,
  containerProps,
  tabProps,
  tabPanelProps,
}: TabGroupProps) => {
  const [value, setValue] = useState(0);

  const theme = useTheme();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box {...containerProps}>
      <div>
        <Tabs
          TabIndicatorProps={{ children: <span /> }}
          value={value}
          onChange={handleChange}
          aria-label="custom tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            marginBottom: "38px",
            marginTop: "31px",
            "& .MuiTabs-flexContainer a": {
              marginBottom: "12px",
            },
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              "& > span": {
                maxWidth: 110,
                width: "100%",
                backgroundColor: `${theme.palette.primary.main}`,
              },
            },
          }}
          {...tabProps}
        >
          {tabData.map((tab, index) => {
            return <Tab label={tab.label} key={index} {...a11yProps(index)} />;
          })}
        </Tabs>
      </div>
      {tabData.map((tab, index) => {
        return (
          <TabPanel value={value} key={index} index={index} {...tabPanelProps}>
            {tab.content}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabGroup;
