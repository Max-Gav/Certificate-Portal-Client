import * as yup from "yup";

function isValidPemFile(value: any): boolean {
  if (value != null) {
    return value.name.endsWith(".pem");
  }
  return false;
}

const uploadCertificateSchema = yup.object().shape({
  cert_name: yup
    .string()
    .min(2, "שם התעודה צריך להיות לפחות באורך 2 תווים")
    .max(16, "שם התעודה צריך להיות באורך 16 תווים לכל יותר")
    .required("הכנס שם משתמש"),
  certificate_file: yup
    .mixed()
    .required("הכנס קובץ תעודה")
    .test("isPemFile", ".pem הכנס קובץ מסוג", isValidPemFile),
});

export default uploadCertificateSchema;
