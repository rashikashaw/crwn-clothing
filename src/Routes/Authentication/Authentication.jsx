import React from "react";
import { SignUp } from "../../components/Sign-up-form/SignUp";
import { SignIn } from "../../components/Sign-in-form/SignIn"
import "../../components/Button/Button"
import './Authentication.styles.scss'

export const Authentication = () => {

  return(
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

