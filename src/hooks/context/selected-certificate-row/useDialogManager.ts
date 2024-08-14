import { useContext } from "react";
import { CurrentDialogContext, IsDialogOpenContext } from "./DialogManagerProvider";

export const useCurrentDialog = () => {
  return useContext(CurrentDialogContext);
};

export const useIsDialogOpen = () => {
  return useContext(IsDialogOpenContext);
};
