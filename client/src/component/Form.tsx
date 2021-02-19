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

  const [emailError, setEmailError] = useState("Please enter the email");
  const [passwordError, setPasswordError] = useState("Password needs to be at least six characters");

  const handleEmailChange =  (event) => {
    setEmail(event.target.value);
    emailValidation(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    passValidation(event.target.value);
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    dispatch(signUp({ email, password }, history));
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }, history));
  };

  const passValidation = (password) => {
    if (password.trim() === '') {
       setPasswordError('Password is required');
      return false;
    }
    if (password.trim().length < 6) {
      setPasswordError ('Password needs to be at least six characters');
      return false;
    }
    setPasswordError ('');
    return true;
  };
  
  const emailValidation = (email) => {
    if ( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)) {
      setEmailError('');
      return true;
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
    }
    setEmailError('Please enter a valid email');
    return false;
  };

  return (
    <div>
    <div>   
     {error !== null ? <div className="errorStatus">{error}</div> : null}
     {emailError !== null ? <div className="error">{emailError}</div> : null} 
     {passwordError !== null ? <div className="error">{passwordError}</div> : null}   
    </div>
    <div className="form">
        <div className="login login__form">
          <div className="container cont__login">
              <input
                className="email input"
                type="text"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
                name="email"
                required
              />
              <input
                className="password input" 
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                disabled={ passwordError != emailError }
                className="btn btn__login"
                onClick={ formInformation.buttonEvent == "UP" ? handleSignUpClick : handleSignInClick }
              >
                {formInformation.buttonText}
              </button>
          </div>
        </div>

        <div className="cta">
          <h2 className="cta__heading">{formInformation.linkText}</h2>
          <div>
            <Link to={formInformation.link}><span className="btn cta__btn cta__btn--text">{formInformation.buttonRedirect}</span></Link>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Form;