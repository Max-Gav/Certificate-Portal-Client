import { CircularProgress, Container } from "@mui/material";
import { DataGrid, GridDensity, GridRowId } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CertificateDialogProps } from "../../../../../common/types/Dialog Types/DialogProps";
import useGetCertificates from "../../../../../hooks/queries/certificates/useGetCertificates";
import AddCertificateDialog from "../../../../common/certificates-dialogs/Add Certificate Dialog/AddCertificateDialog";
import CreateCertificateDialog from "../../../../common/certificates-dialogs/Create Certificate Dialog/CreateCertificateDialog";
import EditCertificateDialog from "../../../../common/certificates-dialogs/Edit Certificate Dialog/EditCertificateDialog";
import DataGridToolbar from "./data-grid-components/data-grid-toolbar/DataGridToolbar";
import DataGridPagination from "./data-grid-components/DataGridPagination";
import columns from "./data-grid-utils/dataGridColumns";
import hebrewLocaleText from "./data-grid-utils/dataGridLocaleText";
import onRowSelection from "./data-grid-utils/dataGridOnRowSelection";
import rowParser from "./data-grid-utils/dataGridRowParser";
import DialogName from "../../../../../common/types/Dialog Types/DialogName";
import {
  useCurrentDialog,
  useIsDialogOpen,
} from "../../../../../hooks/context/selected-certificate-row/useDialogManager";
import DeleteCertificateDialog from "../../../../common/certificates-dialogs/Delete Certificate Dialog/DeleteCertificateDialog";

const dialogComponentMap: Record<
  DialogName,
  React.FC<CertificateDialogProps>
> = {
  None: () => <></>,
  Create: CreateCertificateDialog,
  Add: AddCertificateDialog,
  Edit: EditCertificateDialog,
  Delete: DeleteCertificateDialog,
};

// Extend the props for the toolbar and pagination slots
declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    extendTools: boolean;
  }
}

const HomeDataGrid: React.FC = () => {
  const { data, isLoading } = useGetCertificates();
  const { currentDialog, setCurrentDialog } = useCurrentDialog();
  const { isDialogOpen, setDialogOpen } = useIsDialogOpen();
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const [extendTools, setExtendTools] = useState<boolean>(false);
  const [density, setDensity] = useState<GridDensity>("standard");
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowId[]>([]);
  const rows = rowParser(data);
  const DialogComponent = dialogComponentMap[currentDialog];

  return (
    <>
      <DialogComponent
        certificateId={selectedRowId}
        open={isDialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setCurrentDialog("None");
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {isLoading && <CircularProgress color="orange" />}
        {data && (
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: DataGridToolbar, pagination: DataGridPagination }}
            slotProps={{
              toolbar: { extendTools },
            }}
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
            rowSelectionModel={rowSelectionModel}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              onRowSelection(
                newRowSelectionModel,
                setRowSelectionModel,
                setSelectedRowId,
                setExtendTools
              );
            }}
            onPaginationModelChange={() => {
              setExtendTools(false);
              setRowSelectionModel([]);
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
    </>
  );
};

export default HomeDataGrid;
