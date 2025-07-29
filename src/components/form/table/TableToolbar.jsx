import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";
import TableFilterBtn from "./TableFilterBtn";

export const TableToolbar = ({ titleText, subText, actionBtn }) => {
  return (
    <Stack
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      {/* <Stack>
        <Typography variant="h6" fontWeight={600}>
          {titleText}
        </Typography>
        <Typography variant="body2">{subText}</Typography>
      </Stack> */}
      <ButtonGroup sx={{ backgroundColor: "#FFF" }} variant="outlined">
        <Button
          disabled
          sx={{
            padding: "8px 24px",
            fontFamily: "Poppins",
            borderColor: "#e3e3e3",
            color: "#000",
          }}
        >
          Land
        </Button>
        <Button
          sx={{
            padding: "8px 24px",
            fontFamily: "Poppins",
            borderColor: "#e3e3e3",
            color: "#000",
          }}
        >
          Building
        </Button>
        <Button
          sx={{
            padding: "8px 24px",
            fontFamily: "Poppins",
            borderColor: "#e3e3e3",
            color: "#000",
          }}
        >
          Machinery
        </Button>
      </ButtonGroup>

      <Stack direction="row" gap={1} alignItems="center">
        <TableFilterBtn />
        {actionBtn}
      </Stack>
    </Stack>
  );
};
