import BaseCertificate from "./BaseCertificate";

export interface CertificateElement extends BaseCertificate {
    id: string;
    cert_name: string;
    user_id: string;
  }
