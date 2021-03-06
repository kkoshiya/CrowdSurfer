import { connect } from 'react-redux';

import { login, logout, signup, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    display: "Log in",
    errors: state.errors.session,
    modal: state.modal,
    formType: 'login'
   }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = 'login';
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteErrors: () => dispatch(deleteErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);