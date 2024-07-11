import { IconButton } from "@mui/material";
import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditCertificateDialog from "../../../../../../common/certificates-dialog/EditCertificateDialog";

const EditCertificateButton: React.FC = () => {
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
      <IconButton color="primary" size="small" onClick={handleDialogOpen}>
        <ModeEditIcon fontSize="small" />
      </IconButton>

      <EditCertificateDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleCertSubmit}
      />
    </>
  );
};

export default EditCertificateButton;
