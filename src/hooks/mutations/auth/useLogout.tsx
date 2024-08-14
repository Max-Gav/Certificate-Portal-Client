import axiosInstance from "../../../config/api/api";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import { useStateIfMounted } from "use-state-if-mounted";

const useLogout = () => {
  const [statusCode, setStatusCode] = useStateIfMounted<number | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: () => {
      return axiosInstance.post(APIRoutes.LOGOUT);
    },
    onSuccess: (data: AxiosResponse) => {
      setStatusCode(data?.status);
    },
  });

  return [mutation, statusCode] as const;
};

export default useLogout;
