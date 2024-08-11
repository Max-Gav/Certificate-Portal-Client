import * as yup from 'yup'

const registerSchema = yup.object().shape({
    username: yup.string().min(4, "שם המשתמש צריך להיות לפחות באורך 4 תווים").max(16, "שם המשתמש צריך להיות באורך 16 תווים לכל יותר").required("הכנס שם משתמש"),
    password: yup.string().min(6, "הסיסמא צריכה להיות לפחות באורך 6 תווים").max(20, "הסיסמא צריכה להיות באורך 20 תווים לכל יותר").required("הכנס סיסמא"),
    confirm_password: yup.string()
      .oneOf([yup.ref('password')], "הסיסמאות לא תואמות")
      .required("הכנס את הסיסמא פעם נוספת")
  });

export default registerSchema