import React from "react";
import CreateCertificateDialog from "../../../../../../common/certificates-dialogs/Create Certificate Dialog/CreateCertificateDialog";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateCertificateData from "../../../../../../../common/types/Certificate Types/CreateCertificateData";

const CreateCertificateButton: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleCertSubmit = (cert: CreateCertificateData) => {
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
