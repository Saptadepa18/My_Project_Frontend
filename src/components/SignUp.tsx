

import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from "formik"
import { LogInSchema } from '../schemas';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useMutation } from 'react-query';
import useSignUpMutation from './SignUpMutation';

interface FormValues{
    userName: string,
    email:string,
    role:string,
    password: string
}

const initialValues: FormValues={
    userName: "",
    email: "",
    role:"",
    password: ""
}

const SignUp: React.FC = () => {

  const navigate=useNavigate();

 
  const login = () => {
    navigate("/login");
  };
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues: initialValues,
    validationSchema: LogInSchema,
    onSubmit:(values,action)=>{
         mutate(values);
        console.log(values)
        navigate("/login");
        action.resetForm();
    }
  })
  
  const obSubmit1=async(values:FormValues)=>{
    try{
      console.log("Signup called");
        // const response= await axios.post("http://localhost:8080",values);
        const response= await axios.post("http://localhost:3001/register",values);
        return response.data;
    }catch(error)
    {
        console.log(error);
    }
  }

  const {mutate,isLoading}=useMutation(obSubmit1);
  return (

    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={login}>Log In</button> 
            <button type="button" className="toggle-btn">SignUp</button> 
           
        </div>

        <form id="register" className="input-group1"  onSubmit={handleSubmit}>
          <input type="text" name='userName' 
          className="input-field1" placeholder="User Name"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
            {errors.userName && touched.userName ?(
            <p className='error'>{errors.userName}</p>
          ):null}
          <input type='text' name='role' className='input-field1' placeholder='role'
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          <input type="email" name='email' 
          className="input-field1" placeholder="Email Id"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.email && touched.email ?(
            <p className='error'>{errors.email}</p>
          ):null}

          <input type="text" name='password' 
          className="input-field1" placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.password && touched.password ?(
            <p className='error'>{errors.password}</p>
          ):null}


          <button type="submit" className="submit-btn" >Register</button>
        </form>
      </div>
    </div>
  );
};

const queryClient=new QueryClient();

export const SignUpPage: React.FC=()=>{
  return (
    <QueryClientProvider client={queryClient}>
      <SignUp />
    </QueryClientProvider>
  )
}
 
export default SignUp;
