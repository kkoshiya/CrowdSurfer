import { connect } from 'react-redux';
import Focus from './focus';
import { fetchProject, fetchProjects } from '../../../actions/project_actions';



const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(Focus)