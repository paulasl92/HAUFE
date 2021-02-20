import React from "react";
import  Form  from "../component/Form";
import { formInformation } from "../models/formInformation";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp} from "../redux/actions/user-action";
import  { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const singUpForm : formInformation  = {
    buttonText: "Sign UP",
    buttonEvent: "UP",
    link: "/signin",
    linkText: "Already have an account?",
    buttonRedirect: "Log In!",
    handleClick: async (email, password) => {
      const res = await dispatch(signUp({ email, password }, history));
      setError(res);
    }
  }

  return (
    <div>
      <div className="errorContainer">
        <h1>Register!!</h1>
        {error !== null ? <div className="errorStatus">{error}</div> : null}
      </div>
      <Form formInformation={singUpForm} />
    </div>
  );
};

export default Signup;