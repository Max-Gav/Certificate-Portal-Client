import React, { ReactNode, useEffect } from "react";
import useGetMe from "../../../hooks/queries/auth/useGetMe";
import { useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../../../hooks/context/is-logged-in/useIsLoggedIn";
import { toastify } from "../../../common/utils/toastifyUtils";

interface ProtectedPageProps {
  children: ReactNode;
  isTokenRequired: boolean;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({
  children,
  isTokenRequired,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  useGetMe(setIsLoggedIn);

  useEffect(() => {
    if (isTokenRequired && !isLoggedIn) {
      toastify("יש להתחבר על מנת לעבור לעמוד הבית", "info");
      navigate("/login");
      console.log("יש להתחבר על מנת לעבור לעמוד הבית");
    } else if (!isTokenRequired && isLoggedIn) {
      toastify("משתמש כבר מחובר למערכת", "info");
      navigate("/");
      console.log("משתמש כבר מחובר למערכת");
    }
  }, [isLoggedIn]);

  return children;
};

export default ProtectedPage;
