import { Box } from "@mui/material";
import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

const renderHeaderFunction = (
  params: GridColumnHeaderParams<any, any, any>
) => <Box sx={{ fontWeight: "bold" }}>{params.colDef.headerName}</Box>;

let columns: GridColDef[] = [
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
    field: "domain_names",
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

columns = columns.map((column) => {
  column.renderHeader = renderHeaderFunction;
  return column;
});

export default columns
