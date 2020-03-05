import React from 'react';
import SignUpContainer from "./signup_container";
import { Link } from "react-router-dom";

class SessionPage extends React.Component {
  render() {
    return (
      <div id="log-in-page">
        <img id="background-img" src="assets/background.png" />
        <img id="rocket" src="assets/rocket.png" />
        <SignUpContainer />
      </div>
    )
  }
}

export default SessionPage;