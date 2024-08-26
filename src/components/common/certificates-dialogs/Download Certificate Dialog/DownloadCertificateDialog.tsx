import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { CertificateDialogProps } from "../../../../common/types/Dialog Types/DialogProps";
import "../CertificateDialog.css";
import useGetCertificateFile from "../../../../hooks/queries/certificates/useGetCertificateFile";
import { useStateIfMounted } from "use-state-if-mounted";
import { toastify } from "../../../../common/utils/toastifyUtils";

const DownloadCertificateDialog: React.FC<CertificateDialogProps> = ({
  certificateId,
  open,
  onClose,
}) => {
  const [statusCode, setStatusCode] = useStateIfMounted<Number | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useStateIfMounted<boolean>(false);

  const handleDownload = async () => {
    setIsLoading(true);
    const newStatusCode = await useGetCertificateFile(certificateId);
    setStatusCode(newStatusCode);
  };

  useEffect(() => {
    if (statusCode !== undefined) {
      setIsLoading(false);

      if (statusCode === 200) {
        toastify("התקנת התעודה הצליחה", "success");
        onClose();
      } else {
        onClose();
        toastify("התקנת התעודה נכשלה", "error");
      }
    }
  }, [statusCode]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"}>
      <DialogTitle textAlign={"center"} fontWeight={"bold"}>
        הורדת תעודה
      </DialogTitle>
      <DialogContent>
        <Box>
          <Typography>?האם אתה רוצה להוריד תעודה זו</Typography>
        </Box>
        <DialogActions>
          {isLoading ? (
            <CircularProgress size={24} color="primary" />
          ) : (
            <Button type="submit" color="primary" onClick={handleDownload}>
              הורדה
            </Button>
          )}
          <Button onClick={onClose} color="primary">
            ביטול
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadCertificateDialog;
