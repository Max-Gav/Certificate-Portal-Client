export default interface BaseCertificate{
    common_name: string;
    domain_names: string[];
    ip_addresses: string[];
  }