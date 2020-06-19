import React from 'react';
import Greeting_container from ".././greeting/greeting_container";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {search: false};
  }


  render () {
    return (
      <div id="nav">
        <div id="nav_left">
          <Link to={'/explore'}>
            <p id="explore">Explore</p>
          </Link>
          <Link to={'/startproject'}>
            <p>Start a Project</p>
          </Link>
        </div>
        <div>
          <Link to={'/'}>
            <img className="logo" src={window.logo} />
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