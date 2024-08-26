import { Box } from "@mui/material";
import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import styles from "./dataGridColumns.module.css"

const renderHeaderFunction = (
  params: GridColumnHeaderParams<any, any, any>
) => <Box sx={{ fontWeight: "bold" }}>{params.colDef.headerName}</Box>;

const getExpirationDateClass = (date: string) => {
  const currentDate = new Date();
  const expirationDate = new Date(date);
  const diffTime = expirationDate.getTime() - currentDate.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); 

  if (diffDays <= 0) {
    return styles.expired;
  } else if (diffDays <= 15) {
    return styles.almostExpired;  
  } else if (diffDays <= 30) {
    return styles.expiring; 
  } else {
    return styles.valid;
  }
};

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
    cellClassName: (params) => getExpirationDateClass(params.value),
  },
];

columns = columns.map((column) => {
  column.renderHeader = renderHeaderFunction;
  return column;
});

export default columns;
