import React, { ReactNode, createContext } from "react";
import { useStateIfMounted } from "use-state-if-mounted";

type IsLoggedInProviderProps = {
  children: ReactNode;
};

type TIsLoggedInProviderContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsLoggedInContext = createContext<TIsLoggedInProviderContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const IsLoggedInProvider: React.FC<IsLoggedInProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useStateIfMounted<boolean>(false);

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};

export default IsLoggedInProvider;
