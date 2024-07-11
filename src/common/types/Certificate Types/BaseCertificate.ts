export default interface BaseCertificate{
    common_name: string;
    subject_alternative_names: string[];
    expiration_date: string | undefined;
  }