import React, { ReactNode, createContext } from "react";
import { useStateIfMounted } from "use-state-if-mounted";

type SelectedCertificateIdProviderProps = {
  children: ReactNode;
};

type TSelectedCertificateIdContext = {
  selectedCertificateId: string;
  setSelectedCertificateId: (certificateId: string) => void;
};

export const SelectedCertificateIdContext =
  createContext<TSelectedCertificateIdContext>({
    selectedCertificateId: "",
    setSelectedCertificateId: () => {},
  });

const SelectedCertificateIdProvider: React.FC<
  SelectedCertificateIdProviderProps
> = ({ children }) => {
  const [selectedCertificateId, setSelectedCertificateId] =
    useStateIfMounted("");
  return (
    <SelectedCertificateIdContext.Provider
      value={{ selectedCertificateId, setSelectedCertificateId }}
    >
      {children}
    </SelectedCertificateIdContext.Provider>
  );
};

export default SelectedCertificateIdProvider;
