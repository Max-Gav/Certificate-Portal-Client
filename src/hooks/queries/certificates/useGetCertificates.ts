import axiosInstance from "../../../config/api/api";
import { useQuery } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import { CertificateElement } from "../../../common/types/Certificate Types/CertificateElement";
import CacheKeys from "../../CacheKeys";

const useGetCertificates = () => {
  return useQuery<CertificateElement[], Error>({
    queryKey: [CacheKeys.GetCertificates],
    queryFn: (): Promise<CertificateElement[]> => {
      return axiosInstance
        .get<CertificateElement[]>(APIRoutes.GET_CERTIFICATES)
        .then((response) => response.data);
    },
    onSuccess: () => {
    },
    onError: (error: Error) => {
      console.error("Error fetching certificates:", error);
    },
    retry: false,
    refetchInterval: 30000
  });
};

export default useGetCertificates;
