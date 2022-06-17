import React from "react";
import { SignInWithGooglePopUp, createUserDocumentFromAuth } from '../../Utils/Firebase/firebase.utils';

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopUp()
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return(
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
}
