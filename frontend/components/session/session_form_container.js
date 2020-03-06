import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    display: "Log in",
    errors: state.errors.session
   }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = 'login';
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);