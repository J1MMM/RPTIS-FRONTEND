export const DATA_GRID_STYLE = {
  "& .MuiDataGrid-row": {
    fontFamily: "Poppins",
    "&:last-child .MuiDataGrid-cell": {
      borderBottom: "none", // Remove bottom border from last row
    },
  },
  ".MuiDataGrid-columnHeaderTitleContainer": {
    bgcolor: "mono.main",
  },

  ".data-grid-header": {
    bgcolor: "mono.main",
    color: "#000",
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "600",
      fontFamily: "Poppins",
    },
    "&.MuiDataGrid-root": {
      border: "none",
      color: "#000",
    },
    ".MuiIconButton-sizeSmall": {
      color: "#000",
    },
  },
  border: "none",
};
