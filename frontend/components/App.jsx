import React from "react";
import {Route} from "react-router-dom"
import Greeting_container from "./greeting/greeting_container";

import Nav_container from "./nav/nav_container";
import Bar_container from "./bar/bar_container";
import IndexBody_container from './body/index_body_container';
import Splat from './splat_container'
import LoginFormContainer from './session/session_form_container'
import SignupFormContainer from './session/signup_container'

const App = () => (
  <div>
    <Nav_container />
    <Route exact path="/arts" component={Splat} />
    <Route exact path="/login" component={LoginFormContainer} /> 
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={Splat} />    
  </div>
);

export default App;
