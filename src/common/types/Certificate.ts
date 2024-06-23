export interface Certificate {
    id: string;
    cert_name: string;
    common_name: string;
    subject_alternative_names: string[];
    expiration_date: string;
    user_id: string;
  }
  