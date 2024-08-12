import React from "react";
import { DataGrid, GridDensity } from "@mui/x-data-grid";
import { CircularProgress, Container } from "@mui/material";
import useGetCertificates from "../../../../../hooks/queries/certificates/useGetCertificates";
import DataGridToolbar from "./data-grid-components/data-grid-toolbar/DataGridToolbar";
import columns from "./data-grid-utils/dataGridColumns";
import rowParser from "./data-grid-utils/dataGridRowParser";
import hebrewLocaleText from "./data-grid-utils/dataGridLocaleText";
import DataGridPagination from "./data-grid-components/DataGridPagination";
import onRowSelection from "./data-grid-utils/dataGridOnRowSelection";

const HomeDataGrid: React.FC = () => {
  const { data, isLoading } = useGetCertificates();
  const [selectedRowId, setSelectedRowId] = React.useState<string>("false");
  const [extendTools, setExtendTools] = React.useState<Boolean>(false);
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
          slots={{ toolbar: DataGridToolbar, pagination: DataGridPagination }}
          slotProps={{ toolbar: { extendTools } }}
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
          onDensityChange={(newDensity) => setDensity(newDensity)}
          density={density}
          localeText={hebrewLocaleText}
          pageSizeOptions={[5, 10, 15]}
          disableMultipleRowSelection={true}
          onRowSelectionModelChange={(rowSelectionModel) => {
            onRowSelection(
              rowSelectionModel,
              setSelectedRowId,
              setExtendTools
            );
          }}
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
