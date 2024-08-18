import { GridRowId, GridRowSelectionModel } from "@mui/x-data-grid";

const onRowSelection = (
  newRowSelectionModel: GridRowSelectionModel,
  setRowSelectionModel: React.Dispatch<React.SetStateAction<GridRowId[]>>,
  setSelectedCertificateId: (certificateId: string) => void,
  setExtendTools: (extendTools: boolean) => void
) => {
  setRowSelectionModel(newRowSelectionModel);
  
  const selectedCertificateId = newRowSelectionModel[0]
    ? (newRowSelectionModel[0] as string)
    : "";
  setSelectedCertificateId(selectedCertificateId);

  setExtendTools(selectedCertificateId.length > 0);
  if (selectedCertificateId.length > 0) {
    setExtendTools(true);
  } else {
    setExtendTools(false);
  }
};

export default onRowSelection;
