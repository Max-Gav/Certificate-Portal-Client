import axiosInstance from "../../../config/api/api";
import { useQuery } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import TokenPayload from "../../../common/types/TokenPayload";

const useGetMe = () => {
  return useQuery<TokenPayload, Error>({
    queryKey: ["me"],
    queryFn: (): Promise<TokenPayload> => {
      return axiosInstance
        .get<TokenPayload>(APIRoutes.ME)
        .then((response) => response.data);
    },

    onSettled: (data, error) => {
      console.log(data);
      console.log(error);
    },
    retry: false,
  });
};

export default useGetMe;
