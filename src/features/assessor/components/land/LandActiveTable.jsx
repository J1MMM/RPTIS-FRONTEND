import { DataGrid } from "@mui/x-data-grid";
import { ASSESSMENT_ROLL_COLUMN, rows } from "../../utils/constant";
import { DATA_GRID_STYLE } from "../../../../utils/datagrid";
import { TableToolbar } from "../../../../components/form/table/TableToolbar";
import { Button, Stack } from "@mui/material";
import { Add, Shuffle } from "@mui/icons-material";
import { useState } from "react";
import LandFaasForm from "./LandFaasForm";

function LandActiveTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedArpNos, setSelectedArpNos] = useState([]);
  const [formActive, setFormActive] = useState(false);

  const handleSelectionChange = (newSelection) => {
    // Get only the ArpNo field for the selected IDs
    const selectedArpNosData = newSelection?.map((id) => {
      const selectedRow = rows?.find((row) => row.id === id);
      return selectedRow ? selectedRow?.ArpNo : null; // Return only the ArpNo
    });
    setSelectedArpNos(selectedArpNosData);
  };

  const PageButton = () => {
    return (
      <Stack direction="row" gap={1}>
        <Button
          disabled={Boolean(selectedArpNos.length < 2)}
          variant="outlined"
          startIcon={<Shuffle />}
        >
          consolidate
        </Button>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setFormActive(true)}
        >
          Add FAAS
        </Button>
      </Stack>
    );
  };

  return (
    <>
      <DataGrid
        columns={ASSESSMENT_ROLL_COLUMN}
        rows={rows}
        // rowCount={rowCount}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        // onCellDoubleClick={onCellDoubleClick}
        // paginationModel={{ page: page, pageSize: pageSize }}
        // onFilterModelChange={onFilterModelChange}
        // onPaginationModelChange={onPaginationModelChange}
        // onStateChange={onStateChange}
        // loading={loading}
        onRowSelectionModelChange={handleSelectionChange}
        disableRowSelectionOnClick
        checkboxSelection
        showCellVerticalBorder
        // getRowClassName={getRowClassName}
        // paginationMode={paginationMode || "client"}
        // sortingMode={sortingMode || "client"}
        // filterMode={filterMode || "client"}
        // onSortModelChange={onSortModelChange}
        sx={DATA_GRID_STYLE}
        slots={{
          // noRowsOverlay: EmptyRowsOverlay,
          // loadingOverlay: LoadingComp,
          toolbar: () => (
            <TableToolbar
              titleText="ASSESSOR OFFICE"
              subText="Office of the Property Appraiser"
              actionBtn={<PageButton />}
            />
          ),
        }}
        slotProps={{
          panel: { placement: "bottom-end" },
        }}
      />

      <LandFaasForm open={formActive} onClose={() => setFormActive(false)} />
    </>
  );
}

export default LandActiveTable;
