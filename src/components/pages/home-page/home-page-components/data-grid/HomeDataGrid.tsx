import React from "react";
import { DataGrid, GridDensity } from "@mui/x-data-grid";
import { CircularProgress, Container } from "@mui/material";
import useGetCertificates from "../../../../../hooks/queries/certificates/useGetCertificates";
import DataGridToolbar from "./data-grid-components/DataGridToolbar";
import columns from "./data-grid-utils/dataGridColumns";
import rowParser from "./data-grid-utils/dataGridRowParser";
import hebrewLocaleText from "./data-grid-utils/dataGridLocaleText";

const HomeDataGrid: React.FC = () => {
  const { data, isLoading } = useGetCertificates();
  const [density, setDensity] = React.useState<GridDensity>("standard");
  const rows = rowParser(data);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {isLoading && <CircularProgress />}
      {data && (
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: DataGridToolbar }}
          initialState={{
            density: "standard",
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoHeight={true}
          showCellVerticalBorder={true}
          disableRowSelectionOnClick={true}
          onDensityChange={(newDensity) => setDensity(newDensity)}
          density={density}
          localeText={hebrewLocaleText}
          pageSizeOptions={[5, 10, 15]}
          className="elevated-element"
          sx={{
            borderRadius: "15px",
            backgroundColor: "white",
            
            //  Remove Column Resizing 
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "&.MuiDataGrid-root": {
              border: "none",
            },
          }}
        />
      )}
    </Container>
  );
};

export default HomeDataGrid;
