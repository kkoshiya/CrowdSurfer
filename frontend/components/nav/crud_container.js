import { connect } from 'react-redux';
import Crud from './crud';
import { createProject } from '../../actions/project_actions'

const mSTP = (state, ownProps) => ({
  
});

const mDTP = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project))
});

export default connect(mSTP, mDTP)(Crud)