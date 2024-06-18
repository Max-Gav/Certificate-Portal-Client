import axiosInstance from "../../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import FormDetails from "../../../common/types/FormDetails";
import { useMutation } from "react-query";
import { useState } from "react";

const useAuthForm = (apiRoute: string) => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: (variables: FormDetails) => {
      return axiosInstance.post(apiRoute, {
        username: variables.username,
        password: btoa(variables.password),
      });
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
