import React from "react";
import  Form  from "../component/Form";
import { formInformation } from "../models/formInformation";

const Signup = () => {
  

  const singUpForm : formInformation  = {
    buttonText: "Sign UP",
    buttonEvent: "UP",
    link: "/signin",
    linkText: "Already have an account?",
    buttonRedirect: "Log In!"
  }


  return (
    <Form formInformation={singUpForm} />
  );
};

export default Signup;