import  { React, useState } from "react";
import { FormInput } from "../Form-Input/FormInput";
import "../Button/Button";
import Button, { BUTTON_TYPE_CLASSES }  from "../Button/Button";
import { SignInWithGooglePopUp, SignInUserWithEmailAndPassword } from "../../Utils/Firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.actions";



const defaultFormFeild = {
  email: '',
  password: '',
};

export const SignIn = () => {
  const dispatch = useDispatch()
  const [ formFeilds, setFormFeilds ] = useState(defaultFormFeild);
  const {  email, password } = formFeilds;

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeild);
  };

  const SignInWithGoogle = async () => {
    dispatch(googleSignInStart());
  }


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...formFeilds, [name]: value })
  }


  const submitDataHandler = async (event) => {
    event.preventDefault();
    
    try {
      dispatch(emailSignInStart( email, password ));
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
          <Button 
            type="button" 
            buttonType={BUTTON_TYPE_CLASSES.google} 
            onClick={SignInWithGoogle}>Google Sign In</Button>
        </div>
      </form >
    </div>
  );
}