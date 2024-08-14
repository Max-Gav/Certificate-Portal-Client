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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import theme from "../../../../config/theme/AppTheme";
import createCertificateSchema from "../../../../common/schemas/createCertificateSchema.";
import DialogSanFieldProps from "../../../../common/types/Dialog Types/DialogSanFieldProps";
import CreateCertificateData from "../../../../common/types/Certificate Types/CreateCertificateData";
import useCertificateRequest from "../../../../hooks/mutations/certificates/useCertificateRequest";
import {
  handleSanDelete,
  handleSanInputChange,
  handleSanKeyPress,
  textFields,
} from "./createCertificateDialogUtils";
import APIRoutes from "../../../../config/api/APIRoutes";
import { CertificateDialogProps } from "../../../../common/types/Dialog Types/DialogProps";

const CreateCertificateDialog: React.FC<CertificateDialogProps> = ({
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
    resolver: yupResolver(createCertificateSchema),
  });
  const [createCertificateMutation, statusCode] = useCertificateRequest(
    APIRoutes.CREATE_CERTIFICATE,
    "POST"
  );
  const [domainNameInput, setDomainNameInput] = useState<string>("");
  const [ipAddressInput, setIpAddressInput] = useState<string>("");
  const [isDomainNameValid, setDomainNameValid] = useState<boolean>(true);
  const [isIpAddressValid, setIpAddressValid] = useState<boolean>(true);

  useEffect(() => {
    if (statusCode == 201) {
      onClose();
    }
  }, [statusCode]);

  const sanFields: DialogSanFieldProps[] = [
    {
      name: "domain_names",
      label: "Domain Names",
      inputValue: domainNameInput,
    },
    {
      name: "ip_addresses",
      label: "IP Addresses",
      inputValue: ipAddressInput,
    },
  ];
  const onSubmit = (certificateData: CreateCertificateData) => {
    createCertificateMutation.mutate(certificateData);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          border: "3px solid black",
        },
      }}
      maxWidth={"sm"}
    >
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        יצירת תעודה חדשה
      </DialogTitle>
      <DialogContent>
        <Box
          component={"form"}
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          {textFields.map((field) => (
            <TextField
              key={field.name}
              autoFocus
              margin="dense"
              label={field.label}
              type="text"
              fullWidth
              required={field.required}
              error={Boolean(errors[field.name])}
              helperText={errors[field.name]?.message}
              {...register(field.name)}
            />
          ))}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="expiration_date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="תאריך תפוגה"
                  {...field}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) => field.onChange(date?.toDate())}
                  minDate={dayjs().add(1, "day")}
                  slotProps={{
                    textField: {
                      margin: "dense",
                      fullWidth: true,
                      required: true,
                      error: Boolean(errors.expiration_date),
                      helperText: errors.expiration_date?.message,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {sanFields.map((sanField) => (
            <Controller
              key={sanField.name}
              name={sanField.name}
              control={control}
              defaultValue={[]}
              render={({ field }) => {
                const sanValues = Array.isArray(field.value) ? field.value : [];

                let isFieldValid = true;
                let helperText = "Enter הוספה בלחיצה על";

                if (sanField.name === "domain_names") {
                  isFieldValid = isDomainNameValid;
                  helperText = isDomainNameValid
                    ? "Enter הוספה בלחיצה על"
                    : "הכנס שם דומיין תקין";
                } else if (sanField.name === "ip_addresses") {
                  isFieldValid = isIpAddressValid;
                  helperText = isIpAddressValid
                    ? "Enter הוספה בלחיצה על"
                    : "תקינה IP הכנס כתובת";
                }
                return (
                  <>
                    <TextField
                      name={sanField.name}
                      label={sanField.label}
                      margin="dense"
                      type="text"
                      fullWidth
                      value={sanField.inputValue}
                      onChange={(event) =>
                        handleSanInputChange(
                          event as React.ChangeEvent<HTMLInputElement>,
                          setDomainNameInput,
                          setIpAddressInput
                        )
                      }
                      onKeyDown={(event) =>
                        handleSanKeyPress(
                          event as React.KeyboardEvent<HTMLInputElement>,
                          domainNameInput,
                          ipAddressInput,
                          getValues,
                          setValue,
                          setDomainNameValid,
                          setIpAddressValid,
                          setDomainNameInput,
                          setIpAddressInput
                        )
                      }
                      error={!isFieldValid}
                      helperText={helperText}
                    />
                    {sanValues && sanValues.length > 0 && (
                      <Box
                        sx={{
                          backgroundColor: theme.palette.gray.main,
                          margin: "0px 10px",
                          padding: "1px 10px",
                          borderRadius: "10px",
                        }}
                      >
                        <Stack direction="row" spacing={1} marginY={2}>
                          {sanValues.map((san: string) => (
                            <Chip
                              key={san}
                              label={san}
                              onDelete={() =>
                                handleSanDelete(
                                  sanField.name,
                                  san,
                                  getValues,
                                  setValue
                                )
                              }
                            />
                          ))}
                        </Stack>
                      </Box>
                    )}
                  </>
                );
              }}
            />
          ))}

          <DialogActions>
            <Button type="submit" color="primary">
              יצירה
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

export default CreateCertificateDialog;
