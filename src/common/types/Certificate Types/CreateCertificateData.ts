import BaseCertificate from "./BaseCertificate";

export default interface CreateCertificateData extends BaseCertificate {
  cert_name: string;
  country_name: string;
  state_or_province_name: string;
  locality_name: string;
  organization_name: string;
  organizational_unit_name: string;
  common_name: string;
  email_address: string;
  expiration_date: Date;
}
