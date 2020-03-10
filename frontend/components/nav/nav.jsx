import React from 'react';
import Greeting_container from ".././greeting/greeting_container";
import { Link } from "react-router-dom";

class Nav extends React.Component {


  render () {
    return (
      <div id="nav">
        <div id="nav_left">
          <p id="explore">Explore</p>
          <p>Start a Project</p>
        </div>
        <div>
          <Link to={'/'}>
            <img className="logo" src={window.c11} />
          </Link>
        </div>
        <div id="nav_right">
          <p id="search-p">Search</p>
          <Greeting_container />
        </div>
      </div>
    )
  }
}

export default Nav;