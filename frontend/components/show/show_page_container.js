import { connect } from 'react-redux';
import ShowPage from './show_page';
import { fetchProject, fetchProjects } from '../../actions/project_actions';



const mSTP = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projects: Object.values(state.entities.projects)
})

const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(ShowPage)