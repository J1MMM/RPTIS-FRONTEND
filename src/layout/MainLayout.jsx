import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import {
  DRAWER_WIDTH_CLOSED,
  DRAWER_WIDTH_OPEN,
  HEADER_HEIGHT,
} from "../utils/constant";
import useAuth from "../hooks/useAuth";
import NavDrawer from "../components/layout/NavDrawer";
import { Header } from "../components/layout/Header";

const styleLayout = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  overflow: "hidden",
  transitionDuration: "500ms",
};

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const auth = useAuth();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styleLayout}>
      <Header handleDrawerOpen={handleDrawerOpen} />
      <Stack direction="row" width="100vw">
        <NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Box
          sx={{
            flexGrow: 1,
            mt: HEADER_HEIGHT,
            width: `calc(100% - ${
              open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED
            }px)`,
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};

export default MainLayout;
