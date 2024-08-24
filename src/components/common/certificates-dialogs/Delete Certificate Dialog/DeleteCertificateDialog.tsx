import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useCertificateRequest from "../../../../hooks/mutations/certificates/useCertificateRequest";
import APIRoutes from "../../../../config/api/APIRoutes";
import { CertificateDialogProps } from "../../../../common/types/Dialog Types/DialogProps";
import '../CertificateDialog.css'

const DeleteCertificateDialog: React.FC<CertificateDialogProps> = ({
  certificateId,
  open,
  onClose,
}) => {
  const [deleteCertificateMutation, statusCode] = useCertificateRequest(
    APIRoutes.DELETE_CERTIFICATE,
    "DELETE"
  );

  useEffect(() => {
    if (statusCode === 200) {
      onClose();
    }
  }, [statusCode]);

  const handleDelete = () => {
    deleteCertificateMutation.mutate(certificateId);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={"sm"}
    >
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        מחיקת תעודה
      </DialogTitle>
      <DialogContent>
        <Box>
            <Typography>?האם אתה בטוח שברצונך למחוק תעודה זו</Typography>
        </Box>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            מחק
          </Button>
          <Button onClick={onClose} color="primary">
            ביטול
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCertificateDialog;
