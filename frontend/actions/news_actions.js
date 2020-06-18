import * as APIUtil from '../util/news_util';
export const RECIEVE_NEWS = 'RECIEVE_NEWS';

const recieve_news = (news) => ({
  type: RECIEVE_NEWS,
  news
})

export const fetchNews = () => dispatch => {
  return APIUtil.fetchNews().then((news) => dispatch(recieve_news(news)))
}