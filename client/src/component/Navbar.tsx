import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../redux/actions/user-action-creators";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) =>{
    return state.authentication
  });

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  function UserGreeting() {
    return <li onClick={handleSignOut}><Link to="/">Sign out</Link></li>;
  }
  
  function GuestGreeting() {
    return  <>
          <li><Link to="/signin">SignIn</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
      </>
    ;
  }

  function Greeting() {
    if (currentUser !== null) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  return (
    <nav>
      <div className="">
        <div className="">
          <ul id="nav-mobile" className="">
            {Greeting()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;