import { connect } from 'react-redux';
import Side from './side';
import { fetchProject, fetchProjects } from '../../../actions/project_actions';
import { withRouter } from 'react-router-dom'

const mSTP = (state) => ({
  projects: Object.values(state.entities.projects)
})

const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default withRouter(connect(mSTP, mDTP)(Side))