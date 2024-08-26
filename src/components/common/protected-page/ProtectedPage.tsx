import React, { ReactNode, useEffect } from "react";
import useGetMe from "../../../hooks/queries/auth/useGetMe";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useIsLoggedIn } from "../../../hooks/context/is-logged-in/useIsLoggedIn";

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
  const notify = (message: string) =>
    toast.info(message, { position: "bottom-right" });
  useGetMe(setIsLoggedIn);

  useEffect(() => {
    if (isTokenRequired && !isLoggedIn) {
      notify("יש להתחבר על מנת לעבור לעמוד הבית");
      navigate("/login");
      console.log("יש להתחבר על מנת לעבור לעמוד הבית");
    } else if (!isTokenRequired && isLoggedIn) {
      notify("משתמש כבר מחובר למערכת");
      navigate("/");
      console.log("משתמש כבר מחובר למערכת");
    }
  }, [isLoggedIn]);

  return children;
};

export default ProtectedPage;
