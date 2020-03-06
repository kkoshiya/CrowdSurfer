import SideItem from './side_item';
import { fetchProject, fetchProjects } from '../../../actions/project_actions';
import { connect } from 'react-redux';

const mSTP = (state) => ({
  projects: Object.values(state.entities.projects)
})


const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(SideItem)   