import axiosInstance from "../../../config/api/api";
import { useQuery } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import { Certificate } from "../../../common/types/Certificate";

const useGetCertificates = () => {
  return useQuery<Certificate[], Error>({
    queryKey: ["certificates"],
    queryFn: (): Promise<Certificate[]> => {
      return axiosInstance
        .get<Certificate[]>(APIRoutes.GET_CERTIFICATES)
        .then((response) => response.data);
    },
    onSuccess: (data: Certificate[]) => {
      console.log("Fetched certificates:", data);
    },
    onError: (error: Error) => {
      console.error("Error fetching certificates:", error);
    },
    retry: false,
  });
};

export default useGetCertificates;
