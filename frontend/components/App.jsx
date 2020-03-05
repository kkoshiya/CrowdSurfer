import React from "react";
import {Route} from "react-router-dom"
import Greeting_container from "./greeting/greeting_container";

import Nav_container from "./nav/nav_container";
import Splat from './splat_container'
import LoginFormContainer from './session/session_form_container'
import SignupFormContainer from './session/signup_container'
import SessionPageContainer from './session/session_page_container'
import SignUpPageContainer from './session/sign_up_pagecontainer'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Nav_container />
    <Route exact path="/arts" component={Splat} />
    <AuthRoute exact path="/login" component={SessionPageContainer} /> 
    <AuthRoute exact path="/signup" component={SignUpPageContainer} />
    <Route exact path="/" component={Splat} />    
  </div>
);

export default App;
