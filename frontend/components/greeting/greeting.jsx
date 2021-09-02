import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="login-signup">
    <div className="login-text">
      <Link to="/login" >Login</Link>
    </div>
    {/* &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link> */}
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div className="header-group">
    <div className="header-name">Hi, {currentUser.name}!</div>
    <button className="header-button" onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;