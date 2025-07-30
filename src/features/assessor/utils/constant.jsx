import { Button, Chip, Stack } from "@mui/material";

export const ASSESSMENT_ROLL_COLUMN = [
  {
    field: "ArpNo",
    headerName: "ARP NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },

  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "Address",
    headerName: "ADDRESS",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "kind",
    headerName: "KIND",
    width: 250,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      return (
        <Stack flexDirection="row" gap={1}>
          <span>
            {" "}
            {params?.row?.Boundaries?.land == true && (
              <Chip size="small" label="LAND" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.building == true && (
              <Chip size="small" label="BUILDING" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.machinery == true && (
              <Chip size="small" label="MACHINERY" />
            )}
          </span>
          <span>
            {params?.row?.Boundaries?.others == true && (
              <Chip size="small" label="OTHERS" />
            )}
          </span>
        </Stack>
      );
    },
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const block = params.row?.BLOCK;
      const brgy = params.row?.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    flex: 1,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row?.classification || [];
      return <span>{classification[0]?.assessedValue}</span>;
    },
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    flex: 1,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",

    renderCell: (params, i) => {
      const TAXABILITY = params.row?.TAXABILITY;
      return <span>{TAXABILITY?.toUpperCase()}</span>;
    },
  },

  {
    field: "actions",
    headerName: "ACTIONS",
    flex: 1,
    sortable: false,
    filterable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params) => (
      <Button variant="outlined" size="small">
        View
      </Button>
    ),
  },
];

export const rows = [
  {
    id: 1,
    fname: "Juan",
    mname: "S.",
    lname: "Dela Cruz",
    PID: "PID-001",
    ArpNo: "ARP-2024-0001",
    oldArp: "ARP-2020-0001",
    Address: "123 Mabini St, San Pablo City",
    Boundaries: {
      land: true,
      building: false,
      machinery: true,
      others: false,
    },
    classification: [
      {
        classification: "Residential",
        assessedValue: "₱500,000",
      },
    ],
    BLOCK: "Block 12",
    Brgy: "Barangay 4",
    LocationOfProperty: "Block 12 Barangay 4", // Optional if not used directly
    AssessedValue: "₱500,000", // Optional if not used directly
    TAXABILITY: "taxable",
    dateOfEffectivity: "2025-01-01",
  },
  {
    id: 2,
    fname: "Maria",
    mname: "L.",
    lname: "Reyes",
    PID: "PID-002",
    ArpNo: "ARP-2024-0002",
    oldArp: "ARP-2019-0002",
    Address: "456 Bonifacio Ave, San Pablo City",
    Boundaries: {
      land: true,
      building: true,
      machinery: false,
      others: false,
    },
    classification: [
      {
        classification: "Commercial",
        assessedValue: "₱1,200,000",
      },
      {
        classification: "Industrial",
        assessedValue: "₱300,000",
      },
    ],
    BLOCK: "Block 9",
    Brgy: "Barangay 2",
    TAXABILITY: "exempt",
    dateOfEffectivity: "2024-06-15",
  },
];

export const ASSESSOR_TAB_LINKS = [
  {
    to: "",
    label: "Active Records",
  },
  {
    to: "cancels",
    label: "Archived Records",
  },
  {
    to: "pending",
    label: "Pending",
  },
];
