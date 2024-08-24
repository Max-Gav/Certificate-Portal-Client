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
import { Controller, useForm } from "react-hook-form";
import useCertificateRequest from "../../../../hooks/mutations/certificates/useCertificateRequest";
import APIRoutes from "../../../../config/api/APIRoutes";
import { CertificateDialogProps } from "../../../../common/types/Dialog Types/DialogProps";
import "../CertificateDialog.css";
import uploadCertificateSchema from "../../../../common/schemas/uploadCertificateSchema";
import UploadCertificateData from "../../../../common/types/Certificate Types/UploadCertificateData";

const UploadCertificateDialog: React.FC<CertificateDialogProps> = ({
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(uploadCertificateSchema),
  });
  const [uploadCertificateMutation, statusCode] = useCertificateRequest(
    APIRoutes.UPLOAD_CERTIFICATE,
    "POST",
    true
  );
  useEffect(() => {
    if (statusCode == 200) {
      onClose();
    }
  }, [statusCode]);

  const onSubmit = (certificateData: UploadCertificateData) => {
    uploadCertificateMutation.mutate(certificateData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"}>
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        העלאת תעודה
      </DialogTitle>
      <DialogContent>
        <Box
          component={"form"}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <TextField
            margin="dense"
            label="שם תעודה"
            type="text"
            fullWidth
            required
            error={Boolean(errors.cert_name)}
            helperText={errors.cert_name?.message}
            {...register("cert_name")}
          />
          <Controller
            name="certificate_file"
            control={control}
            render={({ field }) => (
              <TextField
                margin="dense"
                label="קובץ תעודה"
                type="file"
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
                error={Boolean(errors.certificate_file)}
                helperText={errors.certificate_file?.message}
                onChange={(event) => {
                  const target = event.target as HTMLInputElement;
                  if (target.files && target.files.length > 0) {
                    const file = target.files[0];
                    field.onChange(file);
                  }
                }}
              />
            )}
          />

          <DialogActions>
            <Button type="submit" color="primary">
              העלאה
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

export default UploadCertificateDialog;
