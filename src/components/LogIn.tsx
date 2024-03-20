import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from "formik"
import { LogInSchema, SignUpSchema } from '../schemas';
import axios from 'axios';
import { useMutation } from 'react-query';

interface FormValues{
    userName: string,
    email:string,
    password: string
}

const initialValues: FormValues={
    userName: "",
    email: "",
    password: ""
}

export const LogIn: React.FC=()=>{


    const navigate=useNavigate();

 
  const register = () => {

    navigate("/");
  };


      const obSubmit1=async(values:FormValues)=>{
        let response="";
        axios.post("http://localhost:8080/login",values).then((res:any)=>{
            response=res;
            console.log(res.data.token)
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("currId",res.data.currentId);
            localStorage.setItem("role",res.data.role);
        }).catch((err)=>{
            console.log(err);
            
        })


      }
    
      const {mutate,isLoading}=useMutation(obSubmit1);

      const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues: initialValues,
        // validationSchema:SignUpSchema,
        onSubmit:(values,action)=>{
            console.log(values);
            mutate(values,{
              onSuccess:()=>{
                console.log("Mutation completed")
                setTimeout(()=>{
                  const currId=localStorage.getItem("currId");
                  const role=localStorage.getItem("role");
                console.log(currId);
                if(role==="USER")
                {
                navigate(`/user/${currId}`)
                }
                else if(role==="ADMIN")
                {
                  navigate("/home");
                }
                else{
                  alert("Please enter the correct userName or Password")
                }
                action.resetForm();
                },500);
                
              }
            });
            // mutate(values);
            // const currId=localStorage.getItem("currId");
            // navigate(`/user/${currId}`)
            // navigate("/home");
            // action.resetForm();
        }
      })
    return (
        <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn">Log In</button>
           <button type="button" className="toggle-btn" onClick={register}>SignUp</button> 
        </div>
        <form id="login" className="input-group1" onSubmit={handleSubmit}>
          <input type="text" name='userName' 
          className="input-field1" placeholder="User Name"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          ></input>
          {errors.userName && touched.userName ?(
            <p className='error'>{errors.userName}</p>
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

          <button type="submit" className="submit-btn">Log in</button>
        </form>
        </div>
        </div>
    )

}