import axiosInstance from "../../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useStateIfMounted } from "use-state-if-mounted";

const useCertificateRequest = <T,>(
  apiRoute: string,
  method: "POST" | "PATCH" | "DELETE",
  isFormData: boolean = false
) => {
  const [statusCode, setStatusCode] = useStateIfMounted<number | undefined>(
    undefined
  );
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: T) => {
      setStatusCode(undefined);

      let headers = {};
      let requestData: any;

      if (isFormData) {
        const formData = new FormData();
        Object.entries(data as Record<string, any>).forEach(([key, value]) => {
          formData.append(key, value);
        });
        requestData = formData;
        headers = { "Content-Type": "multipart/form-data" };
      } else {
        requestData = data;
        headers = { "Content-Type": "application/json" };
      }

      return axiosInstance.request({
        url: apiRoute,
        data: requestData,
        method: method,
        headers: headers,
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
