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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
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
    if (this.props.display === 'Sign Up') {
      formId = "form_input"
    } else {
      formId = "hidden"
    }
    return (
      <div className="session_form">
        {/* <img class="form_background" src="assets/background.png" /> */}
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1 id="form-type-display" >{this.props.display}</h1>
            <div className="login-form">
                <br />
                <input id={formId} type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} />
                <br/>
                <input id="form_input" type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
                <br/>
                <input id="form_input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />          
                <p id="forgot-password">Forgot Password?</p>
              <br />
              <button id="submit_button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);