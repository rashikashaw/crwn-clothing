import React from "react";
import { SignInWithGooglePopUp, createUserDocumentFromAuth } from '../../Utils/Firebase/firebase.utils';
import { SignUp } from "../../components/Sign-up-form/SignUp";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopUp()
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return(
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      <SignUp />
    </div>
  );
}
