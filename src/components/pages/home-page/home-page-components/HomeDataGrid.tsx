import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CircularProgress, Container } from "@mui/material";
import useGetCertificates from "../../../../hooks/queries/certificates/useGetCertificates";

const HomeDataGrid: React.FC = () => {
  const { data, isLoading } = useGetCertificates();

  const columns: GridColDef[] = [
    { field: "common_name", headerName: "Common Name", flex: 150 },
    {
      field: "expiration_date",
      headerName: "Expiration Date",
      flex: 200,
    },
    {
      field: "subject_alternative_names",
      headerName: "SANs",
      flex: 300,
      renderCell: (params) => params.value.join(", "),
    },
    { field: "user_id", headerName: "User ID", flex: 150 },
  ];

  const rows = data
    ? data.map((item) => ({
        id: item.id,
        common_name: item.common_name,
        expiration_date: item.expiration_date,
        subject_alternative_names: item.subject_alternative_names,
        user_id: item.user_id,
      }))
    : [];

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "631px",
        marginTop:"20px"
      }}
    >
      {isLoading && <CircularProgress />}
      {data && (
        <DataGrid
          showCellVerticalBorder={true}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
          pageSizeOptions={[10,20,30]}
          sx={{ height: "100%" }}
          className="elevated-element"
        />
      )}
    </Container>
  );
};

export default HomeDataGrid;
