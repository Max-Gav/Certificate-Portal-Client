import axiosInstance from "../../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useState } from "react";
import AuthFormDetails from "../../../common/types/AuthFormDetails";

const useAuthForm = (apiRoute: string) => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: (authFormDetails: AuthFormDetails) => {
      const requestBody = {
        username: authFormDetails.username,
        password: btoa(authFormDetails.password),
      }
      return axiosInstance.post(apiRoute, requestBody);
    },
    onSuccess: (data: AxiosResponse) => {
      setStatusCode(data?.status);
    },
    onError: (error: AxiosError) => {
      setStatusCode(error?.response?.status);
    },
  });

  return [mutation, statusCode] as const;
};

export default useAuthForm;
