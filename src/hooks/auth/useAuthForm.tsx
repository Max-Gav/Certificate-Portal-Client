import { useState } from "react";
import axiosInstance from "../../config/api/api";
import { AxiosError } from "axios";
import FormDetails from "../../common/types/FormDetails";

const useAuthForm = (apiRoute: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);

  const request = async (formDetails: FormDetails) => {
    setLoading(true);
    setStatusCode(undefined);
    
    try {
      await axiosInstance.post(apiRoute, {username:formDetails.username, password: btoa(formDetails.password)});
    } catch (err) {
      const axiosError = err as AxiosError;
      setStatusCode(axiosError.response?.status);
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, statusCode };
};

export default useAuthForm;
