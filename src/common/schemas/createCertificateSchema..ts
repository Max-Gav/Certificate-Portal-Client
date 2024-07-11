import * as yup from "yup";

const createCertificateSchema = yup.object().shape({
  certName: yup
    .string()
    .min(2, "שם התעודה צריך להיות לפחות באורך 2 תווים")
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
    .required("הכנס שם משתמש"),
  countryCode: yup
    .string()
    .required("הכנס קוד מדינה")
    .length(2, "קוד המדינה צריך להיות באורך 2 תוים"),
  stateProvinceName: yup
    .string()
    .required("הכנס שם מדינה או שם מחוז")
    .max(100, "שם המדינה או שם המחוז לא יכול להיות ארוך מדי"),
  localityName: yup
    .string()
    .required("הכנס שם מקום (עיר וכו')")
    .max(100, "שם המקום לא יכול להיות ארוך מדי"),
  organizationName: yup
    .string()
    .required("הכנס שם ארגון")
    .max(100, "שם הארגון לא יכול להיות ארוך מדי"),
  organizationalUnitName: yup
    .string()
    .required("הכנס את שם היחידה בארגון")
    .max(100, "שם היחידה לא יכול להיות ארוך מדי"),
  commonName: yup
    .string()
    .required("הכנס ערך")
    .max(100, "ערך זה לא יכול להיות ארוך מדי"),
  emailAddress: yup.string().email("עליך להכניס אימייל").max(100, "כתובת האימייל לא יכולה להיות ארוכה מדי"),
  subjectAlternativeNames: yup.array().of(yup.string().required("הכנס ערך")),
  expirationDate: yup
    .date()
    .typeError("הכנס תאריך תקין")
    .required("הכנס תאריך תפוגה"),
});

export default createCertificateSchema;
