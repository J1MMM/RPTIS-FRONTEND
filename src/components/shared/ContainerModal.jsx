import { CloseRounded } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const ContainerModal = ({
  children,
  actionButton,
  title,
  open,
  onClose,
  onSubmit,
  maxWidth,
}) => {
  return (
    <Dialog
      component={"form"}
      maxWidth={maxWidth || "md"}
      open={open}
      fullWidth
      onSubmit={onSubmit}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600, // Correct weight for semi-bold
          fontFamily: "Poppins",
          bgcolor: "primary.main",
          color: "#FFF",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {children}
      </DialogContent>

      <DialogActions>{actionButton}</DialogActions>
    </Dialog>
  );
};
