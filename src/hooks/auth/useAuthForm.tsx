import axiosInstance from "../../config/api/api";
import { AxiosError, AxiosResponse } from "axios";
import FormDetails from "../../common/types/FormDetails";
import { useMutation } from "react-query";

const useAuthForm = (
  apiRoute: string,
  setStatusCode: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  return useMutation({
    mutationFn: (variables: FormDetails) => {
      return axiosInstance.post(apiRoute, {
        username: variables.username,
        password: btoa(variables.password),
      });
    },
    onSuccess: (data: AxiosResponse) => {
      console.log(data);
    },
    onError: (data: AxiosError) => {
      setStatusCode(data?.response?.status);
    },
  });
};

export default useAuthForm;
