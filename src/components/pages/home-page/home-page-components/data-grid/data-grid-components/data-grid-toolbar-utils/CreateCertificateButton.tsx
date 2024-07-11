import React from "react";
import CreateCertificateDialog from "../../../../../../common/certificates-dialog/CreateCertificateDialog";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateCertificateButton: React.FC = () => {
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
      <IconButton color="success" size="small" onClick={handleDialogOpen}>
        <AddIcon fontSize="small" />
      </IconButton>
      <CreateCertificateDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSubmit={handleCertSubmit}
      />
    </>
  );
};

export default CreateCertificateButton;
