import { connect } from 'react-redux';
import { signup, deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
   formType: signup,
   display: 'Sign Up',
   errors: state.errors.session
});

const mDTP = (dispatch, { location }) => ({
  processForm: user => dispatch(signup(user)),
  deleteErrors: () => dispatch(deleteErrors())
});

export default connect(mSTP, mDTP)(SessionForm)