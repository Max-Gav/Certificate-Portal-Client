import { CertificateElement } from "../../../../../../common/types/Certificate Types/CertificateElement";

const rowParser = (data: CertificateElement[] | undefined) => {
  return data
    ? data.map((item) => ({
        id: item.id,
        cert_name: item.cert_name,
        common_name: item.common_name,
        expiration_date: item.expiration_date,
        domain_names: item.domain_names,
        user_id: item.user_id,
      }))
    : [];
};

export default rowParser
