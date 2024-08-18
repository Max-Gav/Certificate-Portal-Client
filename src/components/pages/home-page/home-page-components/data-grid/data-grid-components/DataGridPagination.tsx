import { Box } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";
import React from "react";

const DataGridPagination: React.FC = () => {
  return (
    <GridPagination
      labelRowsPerPage={"מספר שורות בעמוד"}
      labelDisplayedRows={({ from, to, count }) => {
        return (
          <Box
            component={"span"}
            sx={{
              direction: "rtl",
              padding: "2px 7px",
              borderRadius: "5px",
              border: "2px solid black",
            }}
          >
            {`${from}-${to} of ${count}`}{" "}
          </Box>
        );
      }}
    />
  );
};

export default DataGridPagination;
