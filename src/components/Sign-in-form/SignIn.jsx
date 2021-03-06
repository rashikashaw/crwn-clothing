import  { React, useState, useContext } from "react";
import { FormInput } from "../Form-Input/FormInput";
import "../Button/Button";
import { Button } from "../Button/Button";
import { SignInWithGooglePopUp, createUserDocumentFromAuth, SignInUserWithEmailAndPassword } from "../../Utils/Firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";


const defaultFormFeild = {
  email: '',
  password: '',
};

export const SignIn = () => {
  const [ formFeilds, setFormFeilds ] = useState(defaultFormFeild);
  const {  email, password } = formFeilds;

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeild);
  };

  const SignInWithGoogle = async () => {
    await SignInWithGooglePopUp()}


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...formFeilds, [name]: value })
  }


  const submitDataHandler = async (event) => {
    event.preventDefault();
    
    try {
      const response = await SignInUserWithEmailAndPassword( email, password );
      resetFormFeild()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':  
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found': 
          alert('User not found');
          break;
        default: 
          console.log(error)
      };
    };
  };
  return(
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitDataHandler}>
        <FormInput
          label="Email" 
          type="email" 
          required
          onChange={handleChange} 
          name='email' 
          value={email} 
        />
        <FormInput
          label="Password"
          type="password" 
          required
          onChange={handleChange} 
          name='password' 
          value={password} 
        />
        <div className="buttons-conatiner">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>Google Sign In</Button>
        </div>
      </form >
    </div>
  );
}