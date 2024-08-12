import { GridRowSelectionModel } from "@mui/x-data-grid";

const onRowSelection = (
  rowSelectionModel: GridRowSelectionModel,
  setSelectedCertificateId: (certificateId: string) => void,
  setExtendTools: (extendTools: boolean) => void
) => {
  const certificateId = rowSelectionModel[0] as string;
  setSelectedCertificateId(certificateId);

  setExtendTools(rowSelectionModel.length > 0);
  if (rowSelectionModel.length > 0) {
    setExtendTools(true);
  } else {
    setExtendTools(false);
  }
};

export default onRowSelection;
