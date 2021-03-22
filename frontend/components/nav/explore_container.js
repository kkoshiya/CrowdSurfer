import { connect } from 'react-redux';
import Explore from './explore';
import {fetchNews} from '../../actions/news_actions';


const mSTP = (state) => ({
  news: Object.values(state.entities.news)
});

const mDTP = (dispatch) => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(mSTP, mDTP)(Explore);