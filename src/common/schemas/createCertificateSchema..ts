import * as yup from "yup";
import { domainRegex, ipRegex } from "../utils/regexPatterns";

const CA_NAME_MIN = "שם התעודה צריך להיות לפחות באורך 2 תווים";

const createCertificateSchema = yup.object().shape({
  cert_name: yup
    .string()
    .min(2, CA_NAME_MIN)
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
    .required("הכנס שם משתמש"),
  country_name: yup
    .string()
    .required("הכנס קוד מדינה")
    .length(2, "קוד המדינה צריך להיות באורך 2 תוים"),
  state_or_province_name: yup
    .string()
    .required("הכנס שם מדינה או שם מחוז")
    .max(100, "שם המדינה או שם המחוז לא יכול להיות ארוך מדי"),
  locality_name: yup
    .string()
    .required("הכנס שם מקום (עיר וכו')")
    .max(100, "שם המקום לא יכול להיות ארוך מדי"),
  organization_name: yup
    .string()
    .required("הכנס שם ארגון")
    .max(100, "שם הארגון לא יכול להיות ארוך מדי"),
  organizational_unit_name: yup
    .string()
    .required("הכנס את שם היחידה בארגון")
    .max(100, "שם היחידה לא יכול להיות ארוך מדי"),
  common_name: yup
    .string()
    .required("הכנס ערך")
    .max(100, "ערך זה לא יכול להיות ארוך מדי"),
  email_address: yup
    .string()
    .email("עליך להכניס אימייל")
    .max(100, "כתובת האימייל לא יכולה להיות ארוכה מדי")
    .required("הכנס כתובת אימייל"),
  domain_names: yup
    .array()
    .of(
      yup
        .string()
        .matches(domainRegex, "הכנס שם דומיין תקין")
        .required("הכנס ערך")
    )
    .default([]),
  ip_addresses: yup
    .array()
    .of(
      yup
        .string()
        .matches(ipRegex, "הכנס כתובת IP תקינה")
        .required("הכנס ערך")
    )
    .default([]),
  expiration_date: yup
    .date()
    .typeError("הכנס תאריך תקין")
    .required("הכנס תאריך תפוגה"),
});

export default createCertificateSchema;
