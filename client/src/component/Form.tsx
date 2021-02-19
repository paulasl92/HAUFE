import  { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import '../util/styles/form.scss';
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
    <div className="form">

        <div className="login login__form">
          <div className="container cont__login">
              <input
                className="email input"
                type="text"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                className="password input" 
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {error !== null ? <div className="error">{error}</div> : null}
              <button
                className="btn btn__login"
                onClick={ formInformation.buttonEvent == "UP" ? handleSignUpClick : handleSignInClick }
              >
                {formInformation.buttonText}
              </button>
          </div>
        </div>

        <div className="cta">
          <h2 className="cta__heading">{formInformation.linkText}</h2>
          <div className="btn cta__btn">
            <Link to={formInformation.link}><span className="cta__btn--text">{formInformation.buttonRedirect}</span></Link>
          </div>
        </div>
    </div>
  );
};

export default Form;