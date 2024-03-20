import * as Yup from "yup";

export const ContactUsSchema= Yup.object({
    name: Yup.string().min(4).max(50).required("please enter your name"),
    phone: Yup.string().min(9).max(10).required("please enter your phone number"),
    email: Yup.string().email("Invalid email").required("please enter your email id"),
    subject: Yup.string().min(4).max(30).required("please enter the subject"),
    message: Yup.string().min(5).max(200).required("please enter the message")
})

export const LogInSchema= Yup.object({
    userName: Yup.string().max(40).min(2).required("please enter the user id"),
    role:Yup.string().required("please enter the role"),
    email: Yup.string().email("Invalid email").required("please enter the email address"),
    password: Yup.string().min(5).max(20).required("Please enter the password")
})

export const SignUpSchema= Yup.object({
    username: Yup.string().max(40).min(2).required("please enter the user id"),
    password:Yup.string().min(5).max(20).required("please enter the password")

})

