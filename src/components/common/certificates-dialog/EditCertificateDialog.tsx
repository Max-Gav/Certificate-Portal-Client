import { yupResolver } from "@hookform/resolvers/yup";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AddCertificate from "../../../common/types/Certificate Types/AddCertificate";
import editCertificateSchema from "../../../common/schemas/editCertificateSchema";

interface EditCertificateDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (cert: AddCertificate) => void;
}

const EditCertificateDialog: React.FC<EditCertificateDialogProps> = ({
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

  const onFormSubmit = (data: any) => {
    // const formattedData = {
    //   ...data,
    //   expiration_date: data.expiration_date
    //     ? data.expiration_date.toISOString()
    //     : undefined,
    // };
    // onSubmit(formattedData);
    // onClose();
    console.log(data);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          border: "2px solid black",
        },
      }}
      maxWidth={"sm"}
    >
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        עריכת תעודה 
      </DialogTitle>
      <DialogContent>
        <Box component={"form"} onSubmit={handleSubmit(onFormSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            label="שם תעודה"
            type="text"
            fullWidth
            required
            error={Boolean(errors.certName)}
            helperText={errors.certName?.message}
            {...register("certName")}
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
