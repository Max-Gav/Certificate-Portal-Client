import axiosInstance from "../../../config/api/api";
import APIRoutes from "../../../config/api/APIRoutes";

const downloadFile = (fileData: Blob, filename: string) => {
  const href = URL.createObjectURL(fileData);
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};

const useGetCertificateFile = async (certificate_id: string) => {
  const response = await axiosInstance.get<Blob>(
    APIRoutes.GET_CERTIFICATE_FILE + `/${certificate_id}`,
    { responseType: "blob" }
  );

  downloadFile(response.data, `${certificate_id}.pem`);
};

export default useGetCertificateFile;
