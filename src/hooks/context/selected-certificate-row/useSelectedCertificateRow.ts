import { useContext } from "react";
import {
  SelectedCertificateIdContext,
} from "./SelectedCertificateIdProvider";

export const useSelectedCertificateId = () => {
  return useContext(SelectedCertificateIdContext);
};
