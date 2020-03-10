import React from 'react';
import SessionFormContainer from "./session_form_container";
import { Link } from "react-router-dom";

class SessionPage extends React.Component {
  render() {
    return (
      <div id="log-in-page">
        <img id="background-img" src={window.background} />
        <img id="rocket" src={window.rocket}/>
        <SessionFormContainer />
      </div>
    )
  }
}

export default SessionPage;