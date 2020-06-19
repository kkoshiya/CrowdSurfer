import React from "react";
import {Route} from "react-router-dom"
import Greeting_container from "./greeting/greeting_container";

import Nav_container from "./nav/nav_container";
import Splat from './splat_container';
import Crud from './nav/crud_container';
import Explore from './nav/explore_container'
import LoginFormContainer from './session/session_form_container'
import SignupFormContainer from './session/signup_container'
import SessionPageContainer from './session/session_page_container'
import SignUpPageContainer from './session/sign_up_pagecontainer'
import ShowPageContainer from './show/show_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal'
import Footer from './footer_container'
import { Switch } from 'react-router-dom'


const App = () => (
  <div>
    <Modal />
    <Nav_container />
    <Switch> 
      <Route exact path="/art" component={Splat} />
      <Route exact path="/comics" component={Splat} />
      <Route exact path="/technology" component={Splat} />
      <Route exact path="/film" component={Splat} />
      <Route exact path="/food" component={Splat} />
      <Route exact path="/games" component={Splat} />
      <Route exact path="/publishing" component={Splat} />
      <AuthRoute exact path="/login" component={SessionPageContainer} /> 
      <AuthRoute exact path="/signup" component={SignUpPageContainer} />
      <Route exact path="/projects/:projectId" component={ShowPageContainer} />
      <ProtectedRoute exact path="/startproject" component={Crud} />
      <Route exact path ="/explore" component={Explore} />
      <Route path="/" component={Splat} />   
    </Switch>
    <Footer />
  </div>
);

export default App;
