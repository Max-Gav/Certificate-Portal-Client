import React, { ReactNode } from "react";
import useGetMe from "../../../hooks/queries/auth/useGetMe";
import { useNavigate } from "react-router-dom";

interface ProtectedPageProps {
  children: ReactNode;
  isTokenRequired: boolean;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({
  children,
  isTokenRequired
}) => {
  const navigate = useNavigate();
  const { isSuccess, isError } = useGetMe();
  if (isTokenRequired && isError) {
    navigate("/login");
  }else if (!isTokenRequired && isSuccess){
    navigate("/")
  }

  return children;
};

export default ProtectedPage;
