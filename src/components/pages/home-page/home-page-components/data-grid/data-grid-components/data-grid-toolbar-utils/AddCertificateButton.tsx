import { IconButton } from "@mui/material";
import React from "react";
import AddCertificateDialog from "../../../../../../common/certificates-dialog/AddCertificateDialog";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const AddCertificateButton: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleCertSubmit = (cert: {
    cert_name: string;
    common_name: string;
    subject_alternative_names: string[];
    expiration_date: string | undefined;
  }) => {
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
