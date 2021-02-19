import React, {useState} from "react";
import  Form  from "../component/Form";
import { formInformation } from "../models/formInformation";
import { signIn} from "../redux/actions/user-action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const singUpForm : formInformation  = {
    buttonText: "Login",
    buttonEvent: "IN",
    link: "/signup",
    linkText: "Don't have an account?",
    buttonRedirect: "Register!",
    handleClick: async (email, password) => {
      const res = await dispatch(signIn({ email, password }, history));
      setError(res);
    }
  }

  return (
    <div className="">
      <h1>Log In!!</h1>
      {error !== null ? <div className="errorStatus">{error}</div> : null}
      <Form formInformation={singUpForm} />
    </div>
  );
};

export default Signin;