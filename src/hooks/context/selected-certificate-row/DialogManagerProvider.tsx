import React, { ReactNode, createContext } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import DialogName from "../../../common/types/Dialog Types/DialogName";

type CurrentDialogProviderProps = {
  children: ReactNode;
};

type TCurrentDialogProviderContext = {
  currentDialog: DialogName;
  setCurrentDialog: React.Dispatch<React.SetStateAction<DialogName>>;
};
type TIsDialogOpenProviderContext = {
  isDialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CurrentDialogContext =
  createContext<TCurrentDialogProviderContext>({
    currentDialog: "None",
    setCurrentDialog: () => {},
  });
export const IsDialogOpenContext = createContext<TIsDialogOpenProviderContext>({
  isDialogOpen: false,
  setDialogOpen: () => {},
});

const DialogManagerProvider: React.FC<CurrentDialogProviderProps> = ({
  children,
}) => {
  const [currentDialog, setCurrentDialog] =
    useStateIfMounted<DialogName>("None");
  const [isDialogOpen, setDialogOpen] = useStateIfMounted<boolean>(false);
  return (
    <CurrentDialogContext.Provider value={{ currentDialog, setCurrentDialog }}>
      <IsDialogOpenContext.Provider
        value={{ isDialogOpen, setDialogOpen }}
      >
        {children}
      </IsDialogOpenContext.Provider>
    </CurrentDialogContext.Provider>
  );
};

export default DialogManagerProvider;
