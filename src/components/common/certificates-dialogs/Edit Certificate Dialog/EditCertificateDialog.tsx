import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import editCertificateSchema from "../../../../common/schemas/editCertificateSchema";
import EditCertificateData from "../../../../common/types/Certificate Types/EditCertificateData";
import useCertificateRequest from "../../../../hooks/mutations/certificates/useCertificateRequest";
import APIRoutes from "../../../../config/api/APIRoutes";
import { CertificateDialogProps } from "../../../../common/types/Dialog Types/DialogProps";
import '../CertificateDialog.css'

const EditCertificateDialog: React.FC<CertificateDialogProps> = ({
  certificateId,
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editCertificateSchema),
  });
  const [editCertificateMutation, statusCode] = useCertificateRequest(
    APIRoutes.EDIT_CERTIFICATE,
    "PATCH"
  );
  useEffect(() => {
    if (statusCode == 200) {
      onClose();
    }
  }, [statusCode]);

  const onSubmit = (certificateData: EditCertificateData) => {
    editCertificateMutation.mutate(certificateData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={"sm"}
    >
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        עריכת תעודה
      </DialogTitle>
      <DialogContent>
        <Box
          component={"form"}
          onSubmit={handleSubmit((data) => {
            const certificateData: EditCertificateData = {
              certificate_id: certificateId,
              ...data,
            };
            onSubmit(certificateData);
          })}
        >
          <TextField
            autoFocus
            margin="dense"
            label="שם תעודה"
            type="text"
            fullWidth
            required
            error={Boolean(errors.cert_name)}
            helperText={errors.cert_name?.message}
            {...register("cert_name")}
          />

          <DialogActions>
            <Button type="submit" color="primary">
              עריכה
            </Button>
            <Button onClick={onClose} color="primary">
              ביטול
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditCertificateDialog;
