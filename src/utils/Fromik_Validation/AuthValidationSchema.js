import * as yup from 'yup'
 const SignInValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is Required *'),
    password: yup.string().min(3, "Minimum 5 Char ").max(20, "Maximum 20 Char ").required('Password is Required *'),
});

const SignUpValidationSchema = yup.object().shape({
    username: yup.string().required('Username is Required *'),
    email: yup.string().email('Invalid email').required('Email is Required *'),

    mobile: yup.string().required('Mobile number is required')
        .min(9, 'Mobile number must be at least 9 digits')
        .max(10, 'Mobile number cannot exceed 10 digits').matches(/^(77|78|71|75|76|72|73|74|79|70|077|078|071|075|076|072|073|074|079|070)[0-9]{7}$/, 'Invalid Sri Lankan mobile number format'),
    grade: yup.string().required('garde is Required *'),
    gender: yup.string().required('garde is Required *'),

    password: yup.string().min(3, "Minimum 5 Char ").max(20, "Maximum 20 Char ").required('Password is Required *'),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "password is dose not match").required('Confirm  Password is Required *'),
    terms: yup.boolean().required('Checkbox is required'),


});

const AgentSignInValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is Required *'),
    password: yup.string().min(3, "Minimum 5 Char ").max(20, "Maximum 20 Char ").required('Password is Required *'),
});

const AgentSignUpValidationSchema = yup.object().shape({
    userame: yup.string().required('Username is Required *'),
    firstName: yup.string().required('First Name is Required *'),
    lastName: yup.string().required('First Name is Required *'),
    nic: yup.string().required('Nic is Required *'),
    email: yup.string().email('Invalid email').required('Email is Required *'),
    mobile: yup.string().required('Mobile number is required')
        .min(9, 'Mobile number must be at least 9 digits')
        .max(10, 'Mobile number cannot exceed 10 digits').matches(/^(77|78|71|75|76|72|73|74|79|70|077|078|071|075|076|072|073|074|079|070)[0-9]{7}$/, 'Invalid Sri Lankan mobile number format'),
    password: yup.string().min(3, "Minimum 5 Char ").max(20, "Maximum 20 Char ").required('Password is Required *'),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "password is dose not match").required('Confirm  Password is Required *'),
    terms: yup.boolean().required('Checkbox is required'),


});
export {
    SignInValidationSchema, SignUpValidationSchema, AgentSignInValidationSchema, AgentSignUpValidationSchema
}

