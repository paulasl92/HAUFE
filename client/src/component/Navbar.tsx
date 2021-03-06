import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../redux/actions/user-action";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) =>{
    return state.authentication
  });

  const handleSignOut = async () => {
    await dispatch(signOut(history));
  };

  function UserGreeting() {
    return <>
        <li><Link to="/">Go Home</Link></li>
        <li><Link to="/favs">My Favs</Link></li>
        <li onClick={handleSignOut}><Link to="/">Sign out</Link></li>
      </>
  }
  
  function GuestGreeting() {
    return  <>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
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
    <div className='content'>
      <nav id="navigation-bar"> 
            <ul>
              {Greeting()}
            </ul>
      </nav>
    </div>
  );
};

export default NavBar;