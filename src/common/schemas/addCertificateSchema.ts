import * as yup from "yup";

const addCertificateSchema = yup.object().shape({
  certName: yup
    .string()
    .min(2, "שם התעודה צריך להיות לפחות באורך 2 תווים")
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
    .required("הכנס שם משתמש"),
  commonName: yup.string().required("הכנס ערך"),
  subjectAlternativeNames: yup.array().of(yup.string().required("הכנס ערך")),
  expirationDate: yup
    .date()
    .typeError("הכנס תאריך תקין")
    .required("הכנס תאריך תפוגה"),
});

export default addCertificateSchema;
