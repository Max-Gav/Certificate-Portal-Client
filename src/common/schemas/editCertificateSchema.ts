import * as yup from "yup";

const editCertificateSchema = yup.object().shape({
  certName: yup
    .string()
    .min(2, "שם התעודה צריך להיות לפחות באורך 2 תווים")
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
});

export default editCertificateSchema;
