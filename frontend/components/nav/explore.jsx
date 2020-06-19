import React from 'react';
import Article from './article';

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.state={
      info: ''
    };
  };

  componentDidMount() {
    this.props.fetchNews();
  }


  render() {
    if (this.props.news.length === 0) return null;
      return (
        <div>
          <h1>Explore</h1>
          <h1>{this.props.news[2].length}</h1>
          <ul class="news-posts">
            {
              this.props.news[2].map(article =>
                <div> <Article article={article}/></div>)
            }
          </ul>
        </div>
      )

  }

};

export default Explore;