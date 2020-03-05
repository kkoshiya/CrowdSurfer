import {connect} from 'react-redux';

import loggout from '../../actions/session_actions';
import Greeting from './greeting';


const mSTP = ( {session} ) => ({
  currentUser: session.currentUser
});

const mDTP = dispatch => ({
  loggout: () => dispatch(loggout())
})

export default connect(mSTP, mDTP)(Greeting)