import  { useState } from "react";
import { Link } from "react-router-dom";
import '../util/styles/form.scss';
import {passValidation, emailValidation} from '../validation/validation';
const Form = ( {formInformation : formInformation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("Please enter the email");
  const [passwordError, setPasswordError] = useState("Password needs to be at least six characters");

  const handleEmailChange =  (event) => {
    setEmail(event.target.value);
    setEmailError(emailValidation(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(passValidation(event.target.value));
  };

  
  const handleClick = function(event) {
    event.preventDefault();
    formInformation.handleClick(email, password)
  };

  return (
    <div>
    <div>   
     {emailError !== '' ? <div className="error">{emailError}</div> : null} 
     {passwordError !== '' ? <div className="error">{passwordError}</div> : null}   
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
                onClick={ (e) => handleClick(e) }
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