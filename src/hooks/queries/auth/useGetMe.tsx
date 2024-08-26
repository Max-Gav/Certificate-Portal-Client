import axiosInstance from "../../../config/api/api";
import { useQuery } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import TokenPayload from "../../../common/types/General Types/TokenPayload";
import CacheKeys from "../../CacheKeys";

const useGetMe = (
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return useQuery<TokenPayload, Error>({
    queryKey: [CacheKeys.GetMe],
    queryFn: (): Promise<TokenPayload> => {
      return axiosInstance
        .get<TokenPayload>(APIRoutes.ME)
        .then((response) => response.data);
    },
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: () => {
      setIsLoggedIn(false);
    },
    retry: false,
  });
};

export default useGetMe;
