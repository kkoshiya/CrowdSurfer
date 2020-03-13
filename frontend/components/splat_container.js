import { connect } from 'react-redux';
import Splat from './splat';
import { Link, withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
  category: window.location.href.slice(25)
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(Splat)