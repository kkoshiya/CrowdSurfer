import { connect } from 'react-redux';
import Focus from './focus';
import { fetchProject, fetchProjects } from '../../../actions/project_actions';
import { withRouter } from 'react-router-dom'
import { getUser } from '../../../actions/user_actions'

const mSTP = (state) => {
  return {
    projects: Object.values(state.entities.projects)
  }
}

const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects()),
  getUser: (user) => dispatch(getUser())
})

export default withRouter(connect(mSTP, mDTP)(Focus))