import axiosInstance from "../../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";

const useCertificateRequest = <T,>(apiRoute: string, method: "POST" | "PATCH" | "DELETE") => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (data: T) => {
      setStatusCode(undefined);
      return axiosInstance.request({
        url: apiRoute,
        method: method,
        data: method !== "DELETE" ? data : undefined,
      });
    },
    onSuccess: (data: AxiosResponse) => {
      setStatusCode(data?.status);
      queryClient.refetchQueries(["certificates"]);
    },
    onError: (error: AxiosError) => {
      setStatusCode(error?.response?.status);
    },
  });

  return [mutation, statusCode] as const;
};

export default useCertificateRequest;
