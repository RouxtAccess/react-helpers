import MUISwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { ReactNode } from "react";

const SwipeableDrawer = ({
  open,
  toggleDrawer,
  onClose,
  onOpen,
  children,
  anchor = "left",
  width = "85vw",
  ...rest
}: {
  open: boolean;
  toggleDrawer: (arg: boolean) => void;
  children: ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  anchor?: "left" | "bottom" | "right" | "top";
  width?: string;
  [other: string]: any;
}) => {
  // The following code is from https://mui.com/components/drawers/#swipeable-drawer
  // iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <MUISwipeableDrawer
      {...rest}
      sx={{
        "& > .MuiPaper-root": {
          width: width,
          boxSizing: "border-box",
        },
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor={anchor}
      open={open}
      onClose={() => onClose ?? toggleDrawer(false)}
      onOpen={() => onOpen ?? toggleDrawer(true)}
      ModalProps={{
        // This may have performance impacts if a lot of items are opened quickly.
        // But improves performance if only a few items are opened.
        keepMounted: true,
      }}
    >
      {children}
    </MUISwipeableDrawer>
  );
};

export default SwipeableDrawer;
