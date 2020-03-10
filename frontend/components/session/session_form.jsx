import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.display === 'Sign Up') {
      this.props.processForm(this.state);
    } else {
      this.props.processForm(this.state).fail( () => this.props.openModal('login'))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.deleteErrors()
  }

  demoUser(){
    this.state = {
      email: "demohuman@yahoo.com",
      password: "password"
    };
    this.props.processForm(this.state);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render() {
    let formId;
    let show;
    let demo;
    let hideLog;
    let log_in;
    let sign_up;
    let error;
    if (this.props.display === 'Sign Up') {
      formId = "form_input";
      show = "";
      demo = "hidden";
      hideLog = "hidden";
      log_in = "hidden";
      sign_up = "sign-up"
      error = "error-box"
    } else { //this means that it is log in 
      formId = "hidden";
      show = "hidden";
      demo = "demo";
      hideLog = ""
      log_in = "log-in";
      sign_up = "hidden"
      error = "hidden"
    }
    let errors = this.props.errors
    return (
      <div className="session_form">
        {/* <img class="form_background" src="assets/background.png" /> */}
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1 id="form-type-display" >{this.props.display}</h1>
            <div className={error}>
              <div id={error}>
                {
                  errors.map(error => {
                    return (<div>{error}</div>)
                  })
                }
              </div>
            </div>
            <div className="login-form">
              <br id={formId}/>
              <input id={formId} type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} />
              <br/>
              <input id="form_input" type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
              <br/>
              <input id="form_input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />          
              <p id="forgot-password">Forgot Password?</p>
              <br />
              <button id="submit_button" type="submit">Submit</button>
              <br className={hideLog}/>
              <p className={hideLog}>or</p>
              <br className={hideLog}/>
              <button id={demo} onClick={this.demoUser}>Demo User</button>
              
              <div className="container">
                <div className="container-2">
                  <div className={log_in}>
                      <p>New to Kickstarter?</p>
                      <p><Link to="/signup">Sign Up</Link></p>                  </div>
                </div>
              </div>
              <div className="container">
                <div className="container-2">
                  <div className={sign_up}>
                      <p>Already Have an Account?</p>
                      <p><Link to="/login">Log In</Link></p>                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);