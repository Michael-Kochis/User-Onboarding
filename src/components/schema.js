import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup
        .string()
        .required('User name is required.'),
    email: yup
        .string()
        .required('email address is required')
        .email('invalid email format'),
    password: yup
        .string()
        .required('You must enter a password.'),
    termsService: yup
        .boolean(),
});

export {
    schema
}