import { DataGrid } from "@mui/x-data-grid";
import { PageContainer } from "../../../components/layout/PageContainer";
import { rows } from "../utils/constant";
import { DATA_GRID_STYLE } from "../../../utils/datagrid";
import { TableToolbar } from "../../../components/form/table/TableToolbar";
import { Button, Stack } from "@mui/material";
import { Add, Shuffle } from "@mui/icons-material";
import { useState } from "react";
import Tab from "../../../components/layout/Tab";
import LandActiveTable from "../components/land/LandActiveTable";

function ActiveFaasPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedArpNos, setSelectedArpNos] = useState([]);

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
        <Button variant="contained" startIcon={<Add />}>
          Add FAAS
        </Button>
      </Stack>
    );
  };

  return (
    <>
      <PageContainer>
        <LandActiveTable />
      </PageContainer>
    </>
  );
}

export default ActiveFaasPage;
