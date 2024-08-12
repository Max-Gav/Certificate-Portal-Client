import { IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteCertificateButton: React.FC = () => {
  return (
    <IconButton color="error" size="small">
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

export default DeleteCertificateButton;
