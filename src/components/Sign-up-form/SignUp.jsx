import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase.utils";
import { FormInput } from "../Form-Input/FormInput";
import "./SignInForm.styles.scss"
import "../Button/Button";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.actions";

const defaultFormFeild = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
export const SignUp = () => {
  const [ formFeilds, setFormFeilds ] = useState(defaultFormFeild);
  const { displayName, email, password, confirmPassword } = formFeilds;
  const dispatch = useDispatch();
  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeild);
  };
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...formFeilds, [name]: value })
  }
  const submitDataHandler = async (event) => {
    event.preventDefault();

    if( password !== confirmPassword) {
      alert('password do not match')
      return;
    };
    
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFeild()
    } catch (error) {
      if( error.code === 'auth/email-already-in-use' ){
        alert("Cannot create user, email already in use")
      } else {
      console.log('user creation encountered an error', error.message);
      }
    }
  }
  return(
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitDataHandler}>
        <FormInput
          label= "Display Name" 
          required 
          type="text" 
          onChange={handleChange} 
          name='displayName' 
          value={displayName}
         />
        <FormInput
          label="Email" 
          required 
          type="email" 
          onChange={handleChange} 
          name='email' 
          value={email} 
        />
        <FormInput
          label="Password"
          required 
          type="password" 
          onChange={handleChange} 
          name='password' 
          value={password} 
        />
        <FormInput
          label="Confirm Password"
          required 
          type="password" 
          onChange={handleChange} 
          name='confirmPassword' 
          value={confirmPassword} 
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}