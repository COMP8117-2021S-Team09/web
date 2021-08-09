import React from "react";
import './styles.css';
import { Typography, Link } from '@material-ui/core'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Axios from 'axios'; 
import ViewSellerOrders from './ViewSellerOrders';
import {useState} from "react";
import { Redirect, useHistory } from "react-router-dom";

 
function ValidatedLoginForm (props) {

    const [redirect, setRedirect] =useState(false);
    const [history, setHistory]= useState(useHistory());
    return <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, props) => {
      console.log(values)
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
      }, 2000)
      console.log(props)
      console.log('Form data', values)
      
      const postData = {
        email: values.email,
        password: values.password,
        role: "SELLER"
        
        
      };

      Axios.post("https://tiffin-umbrella.herokuapp.com/login", postData, { headers: { 'Content-Type': 'application/json' } })
        .then(res => {  if(res.status!=200){
          alert("Invalid Email ID/Password")
        } else if(res.status === 200) {
          
          console.log("Success");
        //   window.localStorage.setItem("sellerid", res.data.id);
        //  window.location="/viewsellerorders";
          //console.log(res.data.id);
         history.push({
           pathname: "/sidebar",
           id: res.data.id
          });
          //return <Redirect to="/viewsellerorders" />
        }})
        .catch(errors => { console.log(errors) })

    }}
    /* onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         console.log("Logging in", values);
        // onSubmitProps.resetForm();
         setSubmitting(false);
       }, 500);
     // onSubmitProps.resetForm();
     }} */



    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address.";
      }

      // const passwordRegex = /(?=.*[0-9])/;
      // if (!values.password) {
      //   errors.password = "Required";
      // } else if (values.password.length < 8) {
      //   errors.password = "Password must be 8 characters long.";
      
      // } else if (!passwordRegex.test(values.password)) {
      //   errors.password = "Invalid password. Must contain one number.";
      // }

      return errors;
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >

    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      /* const onSubmit=(values,props)=>{
         console.log(values)
         setTimeout(()=>{
           props.resetForm()
           props.setSubmitting(false)
         },2000)
         console.log(props)
       }
       */
      
      return (
        <div>
        <div className='t'>
          <div>
          <div className='p'>
            <form onSubmit={handleSubmit}>
              <h1 >Log-In Form</h1>
              <br />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}


              <button type="submit" disabled={isSubmitting}>

                {isSubmitting ? "Loading" : "Login"}
              </button>
              <br /><br /><br />
              {/*<Typography>
              <Link href="#">Forgot Password ?</Link>
              </Typography>*/}
              <br />

              <Typography> For New Seller Registration ?
              <Link href="#" onClick={Formik.handleChange}> Sign Up </Link>
              </Typography>
              
            </form>
            
          </div>
          
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
       
        

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <br></br> 
        <br></br>
        <br></br>
       <br></br>     
        </div>
       
      );
    }}
  </Formik>
  
  
  }

export default ValidatedLoginForm;