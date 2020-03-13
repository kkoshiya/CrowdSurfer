import { connect } from 'react-redux';
import ShowPage from './show_page';
import { fetchProject, fetchProjects, updateProject } from '../../actions/project_actions';
import { updateUser } from '../../actions/user_actions';

const update = (user, project) => {
    dispatch(updateUser(user));
    dispatch(updateProject(project))
}

const mSTP = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projects: Object.values(state.entities.projects),
  currentUser: state.entities.users[state.session.id]
})


const mDTP = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchProjects: () => dispatch(fetchProjects()),
  update: (user, project) => update(user,project)
})

export default connect(mSTP, mDTP)(ShowPage)