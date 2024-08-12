import { IconButton } from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditCertificateDialog from "../../../../../../../common/certificates-dialogs/Edit Certificate Dialog/EditCertificateDialog";

const EditCertificateButton: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <IconButton color="primary" size="small" onClick={handleDialogOpen}>
        <ModeEditIcon fontSize="small" />
      </IconButton>

      <EditCertificateDialog
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default EditCertificateButton;
