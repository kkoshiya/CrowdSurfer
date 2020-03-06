import { connect } from 'react-redux';
import Side from './side';
import { fetchProject, fetchProjects } from '../../../actions/project_actions';


const mSTP = (state) => ({
  projects: Object.values(state.entities.projects)
})

const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(Side)