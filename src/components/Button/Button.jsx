import React from "react";
import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export const Button = ({ children, buttonType }) => {
  return(
    <button className= {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
};
