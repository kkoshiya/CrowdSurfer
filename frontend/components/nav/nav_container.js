import { connect } from 'react-redux';
import Nav from './nav';
import { fetchProjects } from '../../actions/project_actions'

const mSTP = (state) => ({
  projects: Object.values(state.entities.projects)
})

const mDTP = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mSTP, mDTP)(Nav)