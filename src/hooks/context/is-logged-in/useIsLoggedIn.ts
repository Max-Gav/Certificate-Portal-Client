import { useContext } from "react";
import { IsLoggedInContext } from "./IsLoggedInProvider";

export const useIsLoggedIn = () => {
  return useContext(IsLoggedInContext);
};
