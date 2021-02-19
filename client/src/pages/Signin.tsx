import React from "react";
import  Form  from "../component/Form";
import { formInformation } from "../models/formInformation";

const Signin = () => {
  const singUpForm : formInformation  = {
    buttonText: "Login",
    buttonEvent: "IN",
    link: "/signup",
    linkText: "Don't have an account?",
    buttonRedirect: "Register!"
  }

  return (
    <div className="">
      <Form formInformation={singUpForm} />
    </div>
  );
};

export default Signin;