import * as yup from 'yup'

const loginSchema = yup.object().shape({
  username: yup.string().required("הכנס שם משתמש"),
  password: yup.string().required("הכנס סיסמא")
})

export default loginSchema