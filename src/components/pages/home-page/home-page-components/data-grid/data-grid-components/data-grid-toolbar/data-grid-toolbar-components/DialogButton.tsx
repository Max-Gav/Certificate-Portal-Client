import React from "react";
import {
  useCurrentDialog,
  useIsDialogOpen,
} from "../../../../../../../../hooks/context/selected-certificate-row/useDialogManager";
import { IconButton, SvgIconTypeMap, Tooltip } from "@mui/material";
import DialogName from "../../../../../../../../common/types/Dialog Types/DialogName";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

type DialogButtonProps = {
  dialogName: DialogName;
  extendTools: boolean;
  extendToolsRequired: boolean | undefined;
};

const buttonTooltipTitleMap: Record<DialogName, string> = {
  None: "לא זמין",
  Create: "יצירת תעודה",
  Add: "הוספת תעודה",
  Edit: "עריכת תעודה",
  Delete: "מחיקת תעודה",
};

const buttonIconComponentMap: Record<
  DialogName,
  OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
> = {
  None: AddIcon,
  Create: AddIcon,
  Add: FileUploadIcon,
  Edit: ModeEditIcon,
  Delete: DeleteIcon,
};

const buttonColorMap: Record<
  DialogName,
  "success" | "secondary" | "primary" | "error"
> = {
  None: "success",
  Create: "success",
  Add: "secondary",
  Edit: "primary",
  Delete: "error",
};

const DialogButton: React.FC<DialogButtonProps> = ({
  dialogName,
  extendTools,
  extendToolsRequired,
}) => {
  const { setCurrentDialog } = useCurrentDialog();
  const { setDialogOpen } = useIsDialogOpen();
  const ButtonIconComponent = buttonIconComponentMap[dialogName];

  return (
    <Tooltip title={buttonTooltipTitleMap[dialogName]}>
      <IconButton
        color={buttonColorMap[dialogName]}
        size="small"
        onClick={() => {
          if (extendTools || !extendToolsRequired) {
            setCurrentDialog(dialogName);
            setDialogOpen(true);
          }
        }}
        sx={{
          ...(!extendTools && extendToolsRequired && { opacity: "0.3" }),
        }}
      >
        <ButtonIconComponent fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DialogButton;
