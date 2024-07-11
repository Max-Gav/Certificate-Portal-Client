import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import addCertificateSchema from "../../../common/schemas/addCertificateSchema";
import theme from "../../../config/theme/AppTheme";
import AddCertificate from "../../../common/types/Certificate Types/AddCertificate";

interface AddCertificateDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (cert: AddCertificate) => void;
}

const AddCertificateDialog: React.FC<AddCertificateDialogProps> = ({
  open,
  onClose,
}) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(addCertificateSchema),

  });

  const [sanInput, setSanInput] = useState("");

  const handleSanInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSanInput(event.target.value);
  };

  const handleSanKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && sanInput) {
      event.preventDefault();
      const currentSANs = getValues("subjectAlternativeNames") || [];
      if (!currentSANs.includes(sanInput)) {
        setValue("subjectAlternativeNames", [...currentSANs, sanInput]);
        setSanInput("");
      }
    }
  };

  const handleSanDelete = (san: string) => {
    const currentSANs = getValues("subjectAlternativeNames") || [];
    setValue(
      "subjectAlternativeNames",
      currentSANs.filter((name) => name !== san)
    );
  };

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
        הוספת תעודה קיימת
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
          <TextField
            margin="dense"
            label="Common Name"
            type="text"
            fullWidth
            required
            error={Boolean(errors.commonName)}
            helperText={errors.commonName?.message}
            {...register("commonName")}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="expirationDate"
              control={control}
              render={({ field }) => (
                <DateTimePicker
                  label="תאריך תפוגה"
                  {...field}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) => field.onChange(date?.toDate())}
                  slotProps={{
                    textField: {
                      margin: "dense",
                      fullWidth: true,
                      required: true,
                      error: Boolean(errors.expirationDate),
                      helperText: errors.expirationDate?.message,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <Controller
            name="subjectAlternativeNames"
            control={control}
            defaultValue={[]}
            render={({ field }) => {
              return (
                <>
                  <TextField
                    margin="dense"
                    label="Subject Alternative Names"
                    type="text"
                    fullWidth
                    value={sanInput}
                    onChange={handleSanInputChange}
                    onKeyPress={handleSanKeyPress}
                    helperText="Enter הוספה בלחיצה על"
                  />
                  {field.value && field.value.length > 0 && (
                    <Box
                      sx={{
                        backgroundColor: theme.palette.gray.main,
                        margin: "0px 10px",
                        padding: "1px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      <Stack direction="row" spacing={1} marginY={2}>
                        {field.value.map((san: string) => (
                          <Chip
                            key={san}
                            label={san}
                            onDelete={() => handleSanDelete(san)}
                          />
                        ))}
                      </Stack>
                    </Box>
                  )}
                </>
              );
            }}
          />
          <DialogActions>
            <Button type="submit" color="primary">
              הוספה
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

export default AddCertificateDialog;
