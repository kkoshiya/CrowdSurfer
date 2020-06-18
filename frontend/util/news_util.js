export const fetchNews = () => {
  return $.ajax({
    url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=89036f14aef64bd8894a6a6215fdb89a',
    method: 'GET'
  })
}