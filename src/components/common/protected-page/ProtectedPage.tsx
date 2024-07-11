import React, { ReactNode } from "react";
import useGetMe from "../../../hooks/queries/auth/useGetMe";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ProtectedPageProps {
  children: ReactNode;
  isTokenRequired: boolean;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({
  children,
  isTokenRequired,
}) => {
  const navigate = useNavigate();
  const { isSuccess, isError } = useGetMe();
  const notify = (message: string) => toast.info(message, {position:"bottom-right", });

  if (isTokenRequired && isError) {
    notify("יש להתחבר על מנת לעבור לעמוד הבית")
    navigate("/login");
  } else if (!isTokenRequired && isSuccess) {
    notify("משתמש כבר מחובר למערכת")
    navigate("/");
  } else {
    return children;
  }
};

export default ProtectedPage;
