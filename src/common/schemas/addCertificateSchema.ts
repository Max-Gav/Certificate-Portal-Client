import * as yup from "yup";

const addCertificateSchema = yup.object().shape({
  cert_name: yup
    .string()
    .min(2, "שם התעודה צריך להיות לפחות באורך 2 תווים")
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
    .required("הכנס שם משתמש"),
  common_name: yup.string().required("הכנס ערך"),
  domain_names: yup.array().of(yup.string().required("הכנס ערך")),
  ip_addresses: yup.array().of(yup.string().required("הכנס ערך")),
  expiration_date: yup
    .date()
    .typeError("הכנס תאריך תקין")
    .required("הכנס תאריך תפוגה"),
});

export default addCertificateSchema;
