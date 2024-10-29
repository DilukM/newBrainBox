import * as yup from 'yup'

export const ProfileValidationSchema = yup.object().shape({
    username: yup.string().required('Username is Required *'),
    mobile: yup.string().required('Mobile number is required')
        .min(9, 'Mobile number must be at least 9 digits')
        .max(10, 'Mobile number cannot exceed 10 digits').matches(/^(77|78|71|75|76|72|73|74|79|70|077|078|071|075|076|072|073|074|079|070)[0-9]{7}$/, 'Invalid Sri Lankan mobile number format'),
    zipCode: yup.string().required('Zip Code is Required *'),
    address: yup.string().required('Address is Required *'),

    dateofBirth: yup.string().required('Date Of Birth is Required *'),
   
    gender: yup.string().required('Gender is Required *'),
   


});

 
