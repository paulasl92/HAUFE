import  { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signIn , signUp} from "../redux/actions/user-action";

const Form = ( {formInformation : formInformation}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector((state) => state.authentication);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    dispatch(signUp({ email, password }, history));
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }, history));
  };

  return (
    <div className="">
      <div className="">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error !== null ? <div className="error">{error}</div> : null}
        <button
          className=""
          onClick={ formInformation.buttonEvent == "UP" ? handleSignUpClick : handleSignInClick }
        >
          {formInformation.buttonText}
        </button>
        <Link to={formInformation.link}>{formInformation.linkText}</Link>
      </div>
    </div>
  );
};

export default Form;