import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
   formType: signup,
   display: 'Sign Up'
});

const mDTP = (dispatch, { location }) => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm)