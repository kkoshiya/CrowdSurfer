import { connect } from 'react-redux';
import Explore from './explore';
// import {fetchNews} from '../../actions/news_actions';
import {fetchProjects} from '../../actions/project_actions'


const mSTP = (state) => ({
  projects: Object.values(state.entities.projects)
});

const mDTP = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mSTP, mDTP)(Explore);