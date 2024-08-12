import axiosInstance from "../../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { useState } from "react";
import APIRoutes from "../../../config/api/APIRoutes";
import CreateCertificateData from "../../../common/types/Certificate Types/CreateCertificateData";

const useCreateCertificate = () => {
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
  const apiRoute = APIRoutes.CREATE_CERTIFICATE

  const mutation = useMutation({
    mutationFn: (certificateData: CreateCertificateData) => {
      setStatusCode(undefined);
      return axiosInstance.post(apiRoute, certificateData);
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

export default useCreateCertificate;
