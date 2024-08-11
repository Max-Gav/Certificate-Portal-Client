import { IconButton } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddCertificateDialog from "../../../../../../common/certificates-dialogs/Add Certificate Dialog/AddCertificateDialog";
import AddCertificateData from "../../../../../../../common/types/Certificate Types/AddCertificateData";

const AddCertificateButton: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleCertSubmit = (cert: AddCertificateData) => {
    console.log("Certificate submitted:", cert);
  };
  return (
    <>
      <IconButton color="secondary" size="small" onClick={handleDialogOpen}>
        <FileUploadIcon fontSize="small" />
      </IconButton>

      <AddCertificateDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleCertSubmit}
      />
    </>
  );
};

export default AddCertificateButton;
