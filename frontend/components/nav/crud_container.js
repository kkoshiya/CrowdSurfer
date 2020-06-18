import { connect } from 'react-redux';
import Crud from './crud';
import { createProject } from '../../actions/project_actions'

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(mSTP, mDTP)(Crud)