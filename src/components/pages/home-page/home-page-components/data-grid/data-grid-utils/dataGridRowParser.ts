import { Certificate } from "../../../../../../common/types/Certificate";

const rowParser = (data: Certificate[] | undefined) => {
  return data
    ? data.map((item) => ({
        id: item.id,
        cert_name: item.cert_name,
        common_name: item.common_name,
        expiration_date: item.expiration_date,
        subject_alternative_names: item.subject_alternative_names,
        user_id: item.user_id,
      }))
    : [];
};

export default rowParser
