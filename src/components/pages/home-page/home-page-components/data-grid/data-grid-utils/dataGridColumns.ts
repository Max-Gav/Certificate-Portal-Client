import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {
      field: "cert_name",
      headerName: "שם תעודה",
      flex: 200,
    },
    {
      field: "common_name",
      headerName: "שם מארח",
      flex: 150,
    },
    {
      field: "subject_alternative_names",
      headerName: "שמות חלופיים",
      flex: 300,
      renderCell: (params) => params.value.join(", "),
    },
    {
      field: "expiration_date",
      headerName: "תאריך תפוגה",
      flex: 200,
    },
  ];

export default columns