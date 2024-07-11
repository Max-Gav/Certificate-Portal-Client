import axiosInstance from "../../../config/api/api";
import { useQuery } from "react-query";
import APIRoutes from "../../../config/api/APIRoutes";
import { CertificateElement } from "../../../common/types/Certificate Types/CertificateElement";

const useGetCertificates = () => {
  return useQuery<CertificateElement[], Error>({
    queryKey: ["certificates"],
    queryFn: (): Promise<CertificateElement[]> => {
      return axiosInstance
        .get<CertificateElement[]>(APIRoutes.GET_CERTIFICATES)
        .then((response) => response.data);
    },
    onSuccess: () => {
      // console.log("Fetched certificates:", data);
    },
    onError: (error: Error) => {
      console.error("Error fetching certificates:", error);
    },
    retry: false,
  });
};

export default useGetCertificates;
